import Head from "next/head";
import { Header } from "./header";
import { Footer } from "./footer";

export const Layout = ({ children, headerData }) => {
  return (
    <div>
      <Head>
        <title>Homies</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header headerData={headerData} />
      <div>{children}</div>
      <Footer />
    </div>
  );
};
