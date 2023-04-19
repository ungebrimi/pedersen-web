import Layout from "@/layout/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n";
import { Suspense } from "react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <I18nextProvider i18n={i18n}>
      <Suspense fallback="loading">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Suspense>
    </I18nextProvider>
  );
}
