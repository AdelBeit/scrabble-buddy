import { NextResponse } from "next/server";

export async function GET(){
  return NextResponse.redirect("try /check/:word or /includes/:letters");
}