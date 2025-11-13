import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getSession } from '@/lib/auth';

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // Protect teacher routes
  if (path.startsWith('/teachers') && !path.startsWith('/teachers/page')) {
    const session = await getSession();
    
    if (!session) {
      return NextResponse.redirect(new URL('/auth/login', request.url));
    }
    
    if (session.role !== 'TEACHER') {
      return NextResponse.redirect(new URL('/', request.url));
    }
  }

  // Protect student routes
  if (path.startsWith('/students') && !path.startsWith('/students/page')) {
    const session = await getSession();
    
    if (!session) {
      return NextResponse.redirect(new URL('/auth/login', request.url));
    }
    
    if (session.role !== 'STUDENT') {
      return NextResponse.redirect(new URL('/', request.url));
    }
  }

  // Protect parent routes
  if (path.startsWith('/parents') && !path.startsWith('/parents/page')) {
    const session = await getSession();
    
    if (!session) {
      return NextResponse.redirect(new URL('/auth/login', request.url));
    }
    
    if (session.role !== 'PARENT') {
      return NextResponse.redirect(new URL('/', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/teachers/:path*',
    '/students/:path*',
    '/parents/:path*',
  ],
};
