import { type NextRequest, NextResponse } from "next/server";
import postgres from '../../../lib/database';

export async function GET(request: NextRequest,{params}:{params:{word:string}}){
  const word = params.word;
  try {
    const result = await postgres.query(
      'SELECT word FROM words WHERE word = UPPER($1)',
      [word]
    );
    if (result.rowCount === 0) {
      return NextResponse.json({ msg: 'Invalid word!' });
    }
    return NextResponse.json({ msg: 'Valid word!' });
  } catch (err) {
    return NextResponse.json({ msg: err });
  }
}

// Schema for the '/check/:word' route
const checkWordSchema = {
  params: {
    type: "object",
    properties: {
      word: { type: "string" },
    },
    required: ["word"],
  },
};