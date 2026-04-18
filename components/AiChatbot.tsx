"use client";

import React, { useRef, useEffect } from "react";
import { SendIcon, Bot, X } from "lucide-react";
import { SUGGESTIONS } from "@/constants/ai-prompt";
import { cn } from "@/lib/utils";
import { useChatbotContext } from "./AiChatbotContext";

const AiAssistant = () => {
  const { messages, input, setInput, isLoading, sendMessage, setIsOpen } = useChatbotContext();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    setTimeout(scrollToBottom, 300);
  }, [messages, isLoading]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (!input.trim() || isLoading) return;
      sendMessage(input);
      const target = e.target as HTMLTextAreaElement;
      target.style.height = "40px";
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  return (
    <div className="flex flex-col h-full w-full bg-white/80 backdrop-blur-sm overflow-hidden">
      {/* Header */}
      <div className="p-4 border-b bg-[#1ca078] text-primary-foreground shadow-sm shrink-0">
        <div className="flex items-center gap-3">
          <div className="shrink-0 aspect-square p-2 bg-white/20 flex items-center justify-center size-10 md:size-12 rounded-full backdrop-blur-md border border-white/30">
            <Bot className="size-6 md:size-8" />
          </div>
          <div className="tracking-tight overflow-hidden">
            <h3 className="font-bold text-base md:text-lg leading-tight truncate">Caruban AI</h3>
            <p className="text-[10px] md:text-xs text-blue-100 truncate">
              Asisten Virtual Caruban Technology
            </p>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="ml-auto p-2 hover:bg-white/10 rounded-full transition-colors cursor-pointer"
            aria-label="Tutup Chat"
          >
            <X className="size-5" />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-hidden relative">
        <div
          ref={scrollAreaRef}
          className="h-full overflow-y-auto px-4 py-4 scroll-smooth"
        >
          <div className="space-y-6">
            {messages.map((m) => (
              <div
                key={m.id}
                className={cn(
                  "flex gap-3 w-full animate-in slide-in-from-bottom-2 duration-300",
                  m.role === "user" ? "justify-end" : "justify-start",
                )}
              >
                <div
                  className={cn(
                    "p-3 rounded-2xl text-sm max-w-[80%] shadow-sm leading-relaxed",
                    m.role === "user"
                      ? "bg-primary text-primary-foreground rounded-br-none"
                      : "bg-muted/80 backdrop-blur-sm border border-border text-foreground rounded-bl-none",
                  )}
                >
                  <p className="whitespace-pre-wrap text-sm leading-relaxed">
                    {m.content}
                  </p>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="w-full animate-in fade-in duration-300">
                <div className="bg-muted/50 p-4 rounded-2xl rounded-bl-none flex gap-1 items-center h-10 w-fit">
                  <span className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce [animation-delay:-0.3s]" />
                  <span className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce [animation-delay:-0.15s]" />
                  <span className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-3 border-t bg-[#1ca078] flex flex-col gap-4 shrink-0">
        {!isLoading && messages.length < 2 && messages.length > 0 && (
          <div className="flex flex-wrap gap-2 w-full animate-in fade-in slide-in-from-bottom-2 mb-1">
            {SUGGESTIONS.map((text) => (
              <button
                key={text}
                onClick={() => sendMessage(text)}
                className="cursor-pointer bg-accent text-accent-foreground hover:bg-primary/20 transition-all py-1 px-3 rounded-full text-[11px] font-normal border border-border"
              >
                {text}
              </button>
            ))}
          </div>
        )}
        <div className="flex gap-2 w-full relative items-center pb-4">
          <textarea
            value={input}
            placeholder="Ketik pesan..."
            onChange={handleInput}
            onKeyDown={handleKeyDown}
            rows={1}
            style={{ minHeight: "40px", height: "40px" }}
            className="flex-1 min-h-[40px] max-h-[120px] resize-none rounded-3xl border border-muted-foreground/20 bg-background shadow-sm focus:outline-none focus:ring-2 focus:ring-primary py-[10px] px-4 leading-[20px] overflow-hidden text-sm disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isLoading}
            autoFocus={false}
          />
          <button
            onClick={() => sendMessage(input)}
            disabled={isLoading || !input.trim()}
            className="rounded-full size-10 shadow-md bg-primary hover:bg-primary/80 shrink-0 transition-transform active:scale-95 flex items-center justify-center text-primary-foreground disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <SendIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AiAssistant;