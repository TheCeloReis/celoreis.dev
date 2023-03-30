import { Html, Head, Main, NextScript, DocumentProps } from "next/document";

const Document: React.FC<DocumentProps> = ({ locale }) => {
  return (
    <Html lang={locale}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
