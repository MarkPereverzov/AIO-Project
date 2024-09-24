import { NextResponse } from "next/server";
import { GoogleCallback } from "@/features/auth";
import { getToken } from "@/entities/user";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const code = url.searchParams.get('code')!;
  
  await GoogleCallback({searchParams: {code}});
  console.log(await getToken());
  return NextResponse.redirect('http://localhost:3000/'); 
}
