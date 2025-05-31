"use client";

import React from "react";
import Script from "next/script";

const Page = () => {
  return (
    <div>
      <Script
        src="https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js"
        onLoad={() => {
          window.CMS.registerPreviewStyle("/admin/styles.css");
        }}
      />
    </div>
  );
};

export default Page;
