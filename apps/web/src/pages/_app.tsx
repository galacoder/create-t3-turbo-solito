import "raf/polyfill";
import "setimmediate";
import "../../global.css";

import type { AppProps, AppType } from "next/app";
import Head from "next/head";
import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { api } from "~/utils/api";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) => {
  return (
    <>
      <Head>
        <title>AeonBook</title>
        <meta name="description" content="AeonBook" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
};

export default api.withTRPC(MyApp);
