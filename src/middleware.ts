import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Check if the path starts with /admin
  if (request.nextUrl.pathname.startsWith('/admin')) {
    // Check for auth token in cookies
    const adminToken = request.cookies.get('adminToken')?.value;
    
    if (!adminToken || adminToken !== 'authenticated') {
      // Redirect unauthorized users to homepage
      return NextResponse.redirect(new URL('/', request.url));
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: '/admin/:path*',
};
