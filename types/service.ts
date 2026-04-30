import type { ReactNode } from "react";

/** Type untuk item layanan / service card */
export interface ServiceItem {
  image: string;
  icon: ReactNode;
  title: string;
  description: string;
  number: string;
}
