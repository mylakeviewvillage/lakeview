import { NextResponse } from 'next/server';

const Middleware = (req) => {

  if (req?.page?.params?.slug) {
    console.log(req.page.params);
    if (req.page.params.slug[0] !== 'img') {
      console.log('running page request');
      if (req.nextUrl.pathname === req.nextUrl.pathname.toLowerCase())
        return NextResponse.next();

      return NextResponse.redirect(`${req.nextUrl.origin}${req.nextUrl.pathname.toLowerCase()}`);
    }else{
      return NextResponse.next();
    }
  }else{
    return NextResponse.next();
  }

  
};

export default Middleware;