/** Types untuk AI Chatbot messages & props */

export interface IMessage {
  id: string;
  role: "user" | "assistant" | "system";
  content: string;
}

export interface IAiAssistantProps {
  messages: IMessage[];
  input: string;
  setInput: (val: string) => void;
  isLoading: boolean;
  sendMessage: (text: string) => void;
}
