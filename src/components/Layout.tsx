import type { PropsWithChildren } from 'react';

import { Header } from './Header';

import '../styles/reset.css';
import '../styles/globals.css';

export function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
