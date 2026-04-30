import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

/** Satu link sosial media */
export interface SocialLink {
  icon: IconDefinition;
  link: string;
}

/** Satu anggota tim */
export interface TeamMember {
  role: string;
  name: string;
  image: string;
  socials: SocialLink[];
}
