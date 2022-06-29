import '../styles/globals.css';

import type { AppProps } from 'next/app';

import { OrganismFooter } from '../atomic/organism/OrganismFooter';
import { OrganismHeader } from '../atomic/organism/OrganismHeader';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="">
      <OrganismHeader />
      <Component {...pageProps} />
      <OrganismFooter />
    </div>
  );
}

export default MyApp;
