import { NextResponse } from "next/server";

export async function GET(){
  return NextResponse.json({msg:"try /check/:word or /includes/:letters"});
}