import { NextResponse } from 'next/server';
import { AppleCallback } from '@/features/auth';
import { getToken } from '@/entities/user';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const code = url.searchParams.get('code')!;
  
  await AppleCallback({searchParams: {code}});
  console.log(await getToken());
  return NextResponse.redirect('http://localhost:3000/'); 
}
