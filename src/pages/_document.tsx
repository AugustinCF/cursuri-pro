import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ro">
      <Head>
        <link rel="preconnect" href="https://api.cursbuldo.cloud" />
        <link rel="dns-prefetch" href="https://api.cursbuldo.cloud" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
