import { ReactNode} from 'react';
import Head from '../../node_modules/next/head';
import Header from './Header';

const Layout = ({ children } : { children : ReactNode }) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="" />
      </Head>
      <Header />
      <main className='main-content'>{children}</main>
      </>
  );
};

export default Layout