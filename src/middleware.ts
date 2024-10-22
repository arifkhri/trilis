import { NextResponse } from 'next/server';

export function middleware(request) {

  const { pathname: nextPathname } = request.nextUrl;
  // const userIsLoggedIn = !!request.cookies.get('utoken');

  const destinationUrl = (url) => new URL(url, request.url);

  if(nextPathname === '/') {
    return NextResponse.redirect(destinationUrl('/home'));
  }


  // if (['/checkout', '/products'].some((prefix) => nextPathname.startsWith(prefix)) && !userIsLoggedIn) {
  //   return NextResponse.redirect(destinationUrl('/login'));
  // }

  return NextResponse.next();
}
