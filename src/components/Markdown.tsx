import React from "react";
import ReactMarkdown from "react-markdown";

type MarkdownProps = {
  children: string;
};

const Markdown: React.FC<MarkdownProps> = (props) => {
  return <ReactMarkdown>{props.children}</ReactMarkdown>;
};

export default Markdown;
