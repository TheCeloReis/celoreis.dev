"use client";

import dynamic from "next/dynamic";

const ChatWidgetComponent = dynamic(
  () => import("@theceloreis/chat-widget").then((mod) => mod.ChatWidget),
  { ssr: false },
);

const ChatWidget = () => (
  <ChatWidgetComponent
    genAIAPIKey={process.env.NEXT_PUBLIC_GEN_AI_API_KEY!}
    theme={{
      primaryColor: "#1d6681",
    }}
    header={{
      title: "Celo Reis (AI agent)",
      description: "Ask me anything!",
    }}
  />
);

export default ChatWidget;
