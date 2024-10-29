import Head from "next/head";
import React from "react";

const HeadTitle = ({ title }: any) => {
  return (
    <React.Fragment>
      <Head>
        <title>
          {title} | Baskio - Clean, Versatile, Responsive Bootstrap 5 & Nextjs
          Theme
        </title>
      </Head>
    </React.Fragment>
  );
};
export default HeadTitle;
