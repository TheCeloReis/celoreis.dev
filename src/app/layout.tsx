import React from "react";

const Layout: React.FC<{ children: React.ReactNode }> = (props) => {
  return (
    <html>
      <body>{props.children}</body>
    </html>
  );
};

export default Layout;
