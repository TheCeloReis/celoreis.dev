import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

type LayoutPropsType = {
  children?: React.ReactNode;
  shouldFormatHtml?: boolean;
};

const Layout = (props: LayoutPropsType) => {
  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
