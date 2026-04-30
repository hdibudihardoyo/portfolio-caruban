import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

/** Link navigasi di Navbar */
export interface NavLink {
  key: string;
  name: string;
  id: string;
}

/** Item sosial media di Footer */
export interface FooterSocial {
  icon: IconDefinition;
  link: string;
}

/** Info kontak di Footer */
export interface FooterContact {
  address: string;
  email: string;
}
