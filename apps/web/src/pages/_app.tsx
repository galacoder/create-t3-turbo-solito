import "raf/polyfill";
import "setimmediate";
import "../styles/globals.css";
import { AppProps, type AppType } from "next/app";
import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { Provider } from "@aeon/core/provider";

import { api } from "~/utils/api";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) => {
  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  );
};

export default api.withTRPC(MyApp);
