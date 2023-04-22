import { type AppType } from 'next/app';
import Head from 'next/head';

import { type Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';

import { Layout } from '@/components/layout';
import { api } from '@/utils/api';

import '@/styles/globals.css';

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>DNV</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
