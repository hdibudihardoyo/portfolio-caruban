import type { IMessage } from "./AiChatbot";

export interface ChatbotContextType {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  messages: IMessage[];
  input: string;
  setInput: (val: string) => void;
  isLoading: boolean;
  sendMessage: (text: string) => void;
}
