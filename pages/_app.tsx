import type { AppProps } from "next/app";
import "../styles/globals.css";

import { NextSeo } from "next-seo";
import Head from "next/head";
import Script from "next/script";

import "@fontsource/jost/400.css"
import "@fontsource/jost/500.css";
import "@fontsource/jost/600.css"
import "@fontsource/jost/700.css"
import "@fontsource/sen/400.css"
import "@fontsource/sen/700.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script id="google-analytics" strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
                `}
      </Script>
      <NextSeo
        title="Arunava | Web Developer"
        titleTemplate="Arunava | Web Developer"
        defaultTitle="Arunava | Web Developer"
        description="Hey! I'm Arunava, A Web Developer, Blogger and a Student!"
        openGraph={{
          url: "https://www.arunava.tech/",
          title: "Arunava Ghosh | AG",
          description:
            "Hey! I'm Arunava, A Web Developer, Blogger and a Student!",
          images: [
            {
              url: "https://arunava.tech/static/images/socialbg.png",
              alt: "Arunava | Web Developer",
            },
          ],
        }}
        twitter={{
          handle: "@ag_arunava",
          site: "@ag_arunava",
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "Frontend Developer, Arunava, Arunava Tech, arunavatech, Web Developer, web development, web developer, blogger, tech enthusiast, open source",
          },
        ]}
      />
      <Head>
        <link rel="icon" type="image/png" href="/assests/avatar.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
