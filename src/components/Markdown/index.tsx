import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkToc from "remark-toc";
import remarkHeadingId from "remark-heading-id";
import "./Markdown.scss";

import rehypeHighlight from "rehype-highlight";
import rehypeHighlightLines from "rehype-highlight-code-lines";

// Using require
import hljs from "highlight.js";
import typescript from "highlight.js/lib/languages/typescript";

import "highlight.js/styles/atom-one-dark.css";

hljs.registerLanguage("typescript", typescript);

type MarkdownProps = {
  children: string;
};

const Markdown: React.FC<MarkdownProps> = (props) => {
  return (
    <div className="markdown">
      <ReactMarkdown
        remarkPlugins={[
          remarkGfm,
          remarkToc,
          { plugins: [[remarkHeadingId, { defaults: true }]] },
        ]}
        rehypePlugins={[
          rehypeHighlight,
          [rehypeHighlightLines, { showLineNumbers: true }],
        ]}
      >
        {props.children}
      </ReactMarkdown>
    </div>
  );
};

export default Markdown;
