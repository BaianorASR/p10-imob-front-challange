import '../styles/globals.css';

import type { AppProps } from 'next/app';

import { OrganismHeader } from '../atomic/organism/OrganismHeader';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="">
      <OrganismHeader />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
