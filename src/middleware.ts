import { NextRequest, NextResponse } from 'next/server';

/**
 * Caso o usuário tente acessar a rota de login enquanto está deslogado, ele poderá fazer o login e será redirecionado para a tela de artigos
 * Caso o usuário tente acessar a rota de login já logado, será redirecionado para a tela de artigos
 * Caso o usuário tente acessar a rota de artigos deslogado, será redirecionado para a tela de login, ao fazer login será redirecionado para a tela de artigos
 * */

export function middleware(req: NextRequest) {
  if (
    req.nextUrl.pathname.startsWith('/entrar') &&
    req.cookies.get('next-auth.session-token')
  ) {
    return NextResponse.redirect(new URL('/artigos', req.url));
  }

  if (!req.cookies.get('next-auth.session-token')) {
    // Se não estiver logado, redirecione para a página de login
    return NextResponse.rewrite(new URL('/entrar', req.url));
  }

  // Se não corresponder a nenhuma das condições acima, retorne `null`
  // para permitir que a solicitação continue sem interrupção.
  return null;
}

export const config = {
  matcher: ['/entrar', '/artigos:path*'],
};
