import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getSession } from '@/lib/auth';

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // Public routes that don't require authentication
  const publicTeacherRoutes = ['/teachers'];
  const publicStudentRoutes = ['/students'];
  const publicParentRoutes = ['/parents'];

  // Protect teacher routes (except public pages)
  if (path.startsWith('/teachers') && !publicTeacherRoutes.includes(path)) {
    const session = await getSession();
    
    if (!session) {
      return NextResponse.redirect(new URL('/auth/login', request.url));
    }
    
    if (session.role !== 'TEACHER') {
      return NextResponse.redirect(new URL('/', request.url));
    }
  }

  // Protect student routes (except public pages)
  if (path.startsWith('/students') && !publicStudentRoutes.includes(path)) {
    const session = await getSession();
    
    if (!session) {
      return NextResponse.redirect(new URL('/auth/login', request.url));
    }
    
    if (session.role !== 'STUDENT') {
      return NextResponse.redirect(new URL('/', request.url));
    }
  }

  // Protect parent routes (except public pages)
  if (path.startsWith('/parents') && !publicParentRoutes.includes(path)) {
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
