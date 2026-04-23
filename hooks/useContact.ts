import { useState } from "react";
import { contactConfig } from "@/constants";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

interface UseContactReturn {
  formData: FormData;
  loading: boolean;
  status: "idle" | "success" | "error";
  errorMessage: string;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  handleSendEmail: (e: React.FormEvent) => void;
  handleWhatsAppChat: (e: React.FormEvent) => void;
}

export const useContact = (): UseContactReturn => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    // Validasi
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.message
    ) {
      setErrorMessage("Semua field harus diisi");
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
      return;
    }

    setLoading(true);
    setStatus("idle");
    setErrorMessage("");

    try {
      const subject = `New Contact from ${formData.firstName} ${formData.lastName}`;
      const body = `Name: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
      const mailtoLink = `mailto:${contactConfig.email}?subject=${encodeURIComponent(
        subject,
      )}&body=${encodeURIComponent(body)}`;

      window.location.href = mailtoLink;
      setStatus("success");
      setFormData({ firstName: "", lastName: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    } catch (error) {
      setStatus("error");
      setErrorMessage("Terjadi kesalahan saat membuka email");
      console.error(error);
      setTimeout(() => setStatus("idle"), 3000);
    } finally {
      setLoading(false);
    }
  };

  const handleWhatsAppChat = (e: React.FormEvent) => {
    e.preventDefault();

    // Validasi
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.message
    ) {
      setErrorMessage("Semua field harus diisi");
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
      return;
    }

    const message = `Name: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const whatsappLink = `https://wa.me/${contactConfig.whatsappNumber}?text=${encodeURIComponent(
      message,
    )}`;
    window.open(whatsappLink, "_blank");
  };

  return {
    formData,
    loading,
    status,
    errorMessage,
    handleInputChange,
    handleSendEmail,
    handleWhatsAppChat,
  };
};
