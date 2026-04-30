export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export type ContactStatus = "idle" | "success" | "error";

export interface UseContactReturn {
  formData: ContactFormData;
  loading: boolean;
  status: ContactStatus;
  errorMessage: string;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleSendEmail: (e: React.FormEvent) => void;
  handleWhatsAppChat: (e: React.FormEvent) => void;
}
