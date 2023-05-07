import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="TeeRex store is a simple webapp where customers can browse through the catalog of t-shirts, add t-shirts to the shopping cart and checkout the items in the cart."
        />
        <meta name="author" content="Hari Perisetla" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
