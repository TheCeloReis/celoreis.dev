"use client";

import React from "react";
import { useLocale } from "react-aria-components";

const NotFound = () => {
  const { locale } = useLocale();

  return (
    <html>
      <body>
        <div>NotFound {locale}</div>
      </body>
    </html>
  );
};

export default NotFound;
