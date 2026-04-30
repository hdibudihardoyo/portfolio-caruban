/** Data form kontak */
export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

/** Status pengiriman form */
export type ContactStatus = "idle" | "success" | "error";

/** Return type dari hook useContact */
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
