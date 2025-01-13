import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Middleware для проверки аутентификации
export function middleware(req: NextRequest) {
  const token = req.cookies.get('accessToken');

  if (!token) {
    // Если токен отсутствует, перенаправляем на главную страницу
    return NextResponse.redirect(new URL('/', req.url));
  }
  
  // Если токен присутствует, продолжаем выполнение запроса
  return NextResponse.next();
}

// Указываем маршруты, для которых применимо middleware
export const config = {
  matcher: ['/health/:path*', '/budget/:path*', '/sport/:path*'], // Пример: защита маршрутов /dashboard и /profile
};
