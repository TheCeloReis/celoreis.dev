import React from "react";
import ReactMarkdown from "react-markdown";
import "./Markdown.scss";

type MarkdownProps = {
  children: string;
};

const Markdown: React.FC<MarkdownProps> = (props) => {
  return <ReactMarkdown className="markdown">{props.children}</ReactMarkdown>;
};

export default Markdown;
