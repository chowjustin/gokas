import ComingSoon from "./coming-soon/page";
import Head from "next/head";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GoKas | Your Treasury Bestie",
};

export default function Page() {
  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/public/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/public/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/public/favicon-16x16.png"
        />
        <link rel="manifest" href="/public/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/public/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <link rel="shortcut icon" href="/public/favicon.ico" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="msapplication-config" content="/public/browserconfig.xml" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <ComingSoon />
    </>
  );
}
