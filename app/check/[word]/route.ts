import { type NextRequest, NextResponse } from "next/server";
import postgres from '../../../lib/database';

export async function GET(request: NextRequest,{params}:{params:{word:string}}){
  const word = params.word;
  try {
    const result = await postgres.query(
      'SELECT word FROM words WHERE word = UPPER($1)',
      [word]
    );
      let response = {msg:"Valid word!",isValid:true};
    if (result.rowCount === 0) {
      response = {msg:"Invalid word!",isValid:false};
    }
    let nextResponse = NextResponse.json(response);
    nextResponse.headers.set('Access-Control-Allow-Origin','*');
    return nextResponse;
  } catch (err) {
    let nextResponse = NextResponse.json({ msg: err });
    nextResponse.headers.set('Access-Control-Allow-Origin','*');
    return nextResponse;
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
