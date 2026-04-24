"use client";

import { motion, AnimatePresence } from "framer-motion";
import AiAssistant from "./AiChatbot";
import { useChatbotContext } from "./AiChatbotContext";

export default function AiChatbotFloating() {
  const { isOpen, setIsOpen } = useChatbotContext();

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay untuk close */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-[var(--color-tertiary)]/20 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="fixed bottom-24 right-6 z-50 w-[calc(100vw-3rem)] md:w-[400px] h-[70vh] md:h-[600px] surface rounded-3xl overflow-hidden flex flex-col"
            >
              <AiAssistant />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
