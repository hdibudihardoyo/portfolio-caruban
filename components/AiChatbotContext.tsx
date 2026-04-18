"use client";

import { IMessage } from "@/types/AiChatbot";
import { createContext, useContext, useState, useCallback, ReactNode } from "react";

interface ChatbotContextType {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  messages: IMessage[];
  input: string;
  setInput: (val: string) => void;
  isLoading: boolean;
  sendMessage: (text: string) => void;
}

const ChatbotContext = createContext<ChatbotContextType | undefined>(undefined);

export const ChatbotProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<IMessage[]>([
    {
      id: "initial",
      role: "assistant",
      content: "Halo Kak! Saya Caruban AI, asisten virtual Caruban Technology. Ada yang bisa saya bantu terkait layanan pengembangan web, aplikasi, atau konsultasi IT?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = useCallback(async (text: string) => {
    if (!text.trim()) return;

    const userMessage: IMessage = {
      id: Date.now().toString(),
      role: "user",
      content: text,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [...messages, userMessage].map(({ role, content }) => ({
            role,
            content,
          })),
        }),
      });

      if (!response.ok) throw new Error("Gagal mengirim pesan");

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      
      const assistantMessageId = (Date.now() + 1).toString();
      let assistantContent = "";

      setMessages((prev) => [
        ...prev,
        { id: assistantMessageId, role: "assistant", content: "" },
      ]);

      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          
          const chunk = decoder.decode(value, { stream: true });
          assistantContent += chunk;
          
          setMessages((prev) =>
            prev.map((msg) =>
              msg.id === assistantMessageId
                ? { ...msg, content: assistantContent }
                : msg
            )
          );
        }
      }
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 2).toString(),
          role: "assistant",
          content: "Mohon maaf Kak, sepertinya ada gangguan koneksi. Silakan coba lagi nanti ya.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }, [messages]);

  return (
    <ChatbotContext.Provider
      value={{
        isOpen,
        setIsOpen,
        messages,
        input,
        setInput,
        isLoading,
        sendMessage,
      }}
    >
      {children}
    </ChatbotContext.Provider>
  );
};

export const useChatbotContext = () => {
  const context = useContext(ChatbotContext);
  if (context === undefined) {
    throw new Error("useChatbotContext must be used within a ChatbotProvider");
  }
  return context;
};
