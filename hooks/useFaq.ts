import { useState } from "react";

export function useFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaqItem = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return {
    openIndex,
    toggleFaqItem,
  };
}
