"use client";

import { initChatWidget, destroyChatWidget } from "@theceloreis/chat-widget";
import { useEffect } from "react";

const ChatWidget = () => {
  useEffect(() => {
    initChatWidget({
      genAIAPIKey: process.env.NEXT_PUBLIC_GEN_AI_API_KEY!,
      theme: {
        primaryColor: "#1d6681",
      },
      header: {
        title: "Celo Reis (AI agent)",
        description: "Ask me anything!",
      },
    });
    return () => {
      destroyChatWidget();
    };
  }, []);

  return null;
};

export default ChatWidget;
