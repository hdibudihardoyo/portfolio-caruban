import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface NavLink {
  key: string;
  name: string;
  id: string;
}

export interface FooterSocial {
  icon: IconDefinition;
  link: string;
}
export interface FooterContact {
  address: string;
  email: string;
}
