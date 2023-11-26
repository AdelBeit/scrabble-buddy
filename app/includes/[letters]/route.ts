import { type NextRequest, NextResponse } from 'next/server';
import postgres from '../../../lib/database';

export async function GET(
  request: NextRequest,
  { params }: { params: { letters: string } }
) {
  const letters = params.letters;
  try {
    const letterArr = letters && letters.split('');
    const RESULT_CAP = 50;
    if (letterArr.length < 1)
      throw new Error('Please provide at least one letter.');
    let query = 'SELECT word FROM words WHERE ';
    let conditions = [];
    for (let i = 0; i < letterArr.length; i++) {
      conditions.push(`word ILIKE '%${letterArr[i]}%'`);
    }
    query += conditions.join(' AND ');
    const result = await postgres.query(query);
    if (result.rowCount === 0) {
      return NextResponse.json({ msg: 'No words can be formed with those letters.' });
    }
    return NextResponse.json({
      msg: result.rows
        .map((row: { word: string }) => row.word)
        .sort(
          (a: string, b: string) => a.length - b.length || a.localeCompare(b)
        )
        .slice(0, RESULT_CAP)
    });
  } catch (err) {
    return NextResponse.json({ msg: err });
  }
}


// Schema for the '/includes/:letters' route
const includesLettersSchema = {
  params: {
    type: "object",
    properties: {
      letters: { type: "string" },
    },
    required: ["letters"],
  },
};
