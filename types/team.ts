import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface SocialLink {
  icon: IconDefinition;
  link: string;
}

export interface TeamMember {
  role: string;
  name: string;
  image: string;
  socials: SocialLink[];
}
