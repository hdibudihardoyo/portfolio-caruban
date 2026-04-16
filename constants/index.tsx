import { ReactNode } from "react";
import { Cpu, Palette, HeadphonesIcon, Layers } from "lucide-react";
import {
  faInstagram,
  faTiktok,
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

export const allProjects = [
  {
    title: "Project1.Title",
    category: "Project1.Category",
    desc: "Project1.Description",
    image: "/projects1.png",
    link: "https://buku-buwuhan.vercel.app/",
  },
  // {
  //   title: "Project2.Title",
  //   category: "Project2.Category",
  //   desc: "Project2.Description",
  //   image: "/image-contoh.jpg",
  //   link: "#",
  // },
  // {
  //   title: "Project3.Title",
  //   category: "Project3.Category",
  //   desc: "Project3.Description",
  //   image: "/image-contoh.jpg",
  //   link: "#",
  // },
];

export const socialMedia = [
  {
    icon: faInstagram,
    link: "https://instagram.com/caruban_tech",
    color: "hover:bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]",
  },
  {
    icon: faTiktok,
    link: "https://tiktok.com/@caruban_tech",
    color: "hover:bg-black",
  },
  {
    icon: faGithub,
    link: "https://github.com/CarubanTech",
    color: "hover:bg-[#333]",
  },
];

export const contactConfig = {
  instagramHandle: "@caruban_tech",
  whatsappNumber: "62882001771113",
  email: "caruban_tech@gmail.com",
};

export const navLinks = [
  { key: "Home", name: "Beranda", id: "/#" },
  { key: "Projects", name: "Proyek", id: "/#project" },
  { key: "Services", name: "Layanan", id: "/#services" },
  { key: "Pricing", name: "Harga", id: "/#pricing" },
  { key: "Testimonials", name: "Testimoni", id: "/#testimonial" },
  { key: "Contact", name: "Kontak", id: "/contact" },
];

export interface PricingPlan {
  title: string;
  price: string;
  desc: string;
  features: string[];
  button: string;
  highlight?: boolean;
}

export const gratisPlans: PricingPlan[] = [
  {
    title: "Free.BasicWebProfile.Title",
    price: "Rp 0",
    desc: "Free.BasicWebProfile.Description",
    features: [
      "Free.BasicWebProfile.Feature1",
      "Free.BasicWebProfile.Feature2",
      "Free.BasicWebProfile.Feature3",
    ],
    button: "Free.BasicWebProfile.Button",
  },
  {
    title: "Free.UMKMStarter.Title",
    price: "Rp 0",
    desc: "Free.UMKMStarter.Description",
    features: [
      "Free.UMKMStarter.Feature1",
      "Free.UMKMStarter.Feature2",
      "Free.UMKMStarter.Feature3",
    ],
    button: "Free.UMKMStarter.Button",
  },
  {
    title: "Free.LandingPage.Title",
    price: "Rp 0",
    desc: "Free.LandingPage.Description",
    features: [
      "Free.LandingPage.Feature1",
      "Free.LandingPage.Feature2",
      "Free.LandingPage.Feature3",
    ],
    button: "Free.LandingPage.Button",
  },
];

export const berbayarPlans: PricingPlan[] = [
  {
    title: "Paid.BusinessWebsite.Title",
    price: "Rp 1.500.000",
    desc: "Paid.BusinessWebsite.Description",
    features: [
      "Paid.BusinessWebsite.Feature1",
      "Paid.BusinessWebsite.Feature2",
      "Paid.BusinessWebsite.Feature3",
      "Paid.BusinessWebsite.Feature4",
    ],
    button: "Paid.BusinessWebsite.Button",
  },
  {
    title: "Paid.ECommerce.Title",
    price: "Rp 3.500.000",
    desc: "Paid.ECommerce.Description",
    features: [
      "Paid.ECommerce.Feature1",
      "Paid.ECommerce.Feature2",
      "Paid.ECommerce.Feature3",
      "Paid.ECommerce.Feature4",
    ],
    button: "Paid.ECommerce.Button",
    highlight: true,
  },
  {
    title: "Paid.CustomApp.Title",
    price: "Mulai Rp 5jt",
    desc: "Paid.CustomApp.Description",
    features: [
      "Paid.CustomApp.Feature1",
      "Paid.CustomApp.Feature2",
      "Paid.CustomApp.Feature3",
      "Paid.CustomApp.Feature4",
    ],
    button: "Paid.CustomApp.Button",
  },
];

export const featuredProjects = [
  {
    id: "01",
    title: "Featured01.Title",
    description: "Featured01.Description",
    image: "/projects1.png",
    slug: "https://buku-buwuhan.vercel.app/",
    imageLeft: true,
  },
  // {
  //   id: "02",
  //   title: "Featured02.Title",
  //   description: "Featured02.Description",
  //   image: "/image-contoh.jpg",
  //   slug: "https://www.google.com",
  //   imageLeft: false,
  // },
];

export const reviews = [
  {
    text: "Testimonial1",
    name: "miyaa anifah",
  },
  {
    text: "Testimonial2",
    name: "Rizky Pratama",
  },
  {
    text: "Testimonial3",
    name: "Farhan Alif",
  },
  {
    text: "Testimonial4",
    name: "Andi Saputra",
  },
  {
    text: "Testimonial5",
    name: "Siti Aminah",
  },
  {
    text: "Testimonial6",
    name: "Budi Santoso",
  },
];

export interface ServiceItem {
  image: string;
  icon: ReactNode;
  title: string;
  description: string;
  number: string;
}

export const services: ServiceItem[] = [
  {
    image: "/image-contoh.jpg",
    icon: <Cpu className="w-5 h-5" />,
    title: "TechnologyLatest",
    description: "TechnologyLatestDescription",
    number: "01",
  },
  {
    image: "/image-contoh.jpg",
    icon: <Palette className="w-5 h-5" />,
    title: "IntuitiveDesign",
    description: "IntuitiveDesignDescription",
    number: "02",
  },
  {
    image: "/image-contoh.jpg",
    icon: <HeadphonesIcon className="w-5 h-5" />,
    title: "SupportPlus",
    description: "SupportPlusDescription",
    number: "03",
  },
  {
    image: "/image-contoh.jpg",
    icon: <Layers className="w-5 h-5" />,
    title: "EfficiencyScalability",
    description: "EfficiencyScalabilityDescription",
    number: "04",
  },
];

export const teams = [
  {
    role: "BackEndDeveloper",
    name: "HARIS GUNAWAN R",
    image: "/haris.jpeg",
    socials: [
      { icon: faInstagram, link: "https://www.instagram.com/harisgunawanr_" },
      { icon: faGithub, link: "https://github.com/HarisGunawanRomadon" },
      { icon: faLinkedin, link: "https://www.linkedin.com/in/harisgunawanr" },
    ],
  },
  {
    role: "FrontEndDeveloper",
    name: "HADI BUDI HARDOYO",
    image: "/hadii.jpg",
    socials: [
      {
        icon: faInstagram,
        link: "https://www.instagram.com/hdibudihardoyo ",
      },
      { icon: faGithub, 
        link: "https://github.com/hdibudihardoyo " },
      {
        icon: faLinkedin,
        link: "https://www.linkedin.com/in/hdibudihardoyo",
      },
    ],
  },
  {
    role: "FrontEndDeveloper",
    name: "LUFTAN HADI",
    image: "/lutfann.jpeg",
    socials: [
      { icon: faInstagram, link: "https://www.instagram.com/lutfanhadi05" },
      { icon: faGithub, link: "https://github.com/Lutfanhadi" },
      { icon: faLinkedin, link: "https://www.linkedin.com/in/lutfan-hadi" },
    ],
  },
  {
    role: "UIUXDesigner",
    name: "DAMAYANTI",
    image: "/haris.jpeg",
    socials: [
      { icon: faInstagram, link: "https://www.instagram.com/yantirrz_" },
      { icon: faGithub, link: "https://github.com/yantirrz" },
      {
        icon: faLinkedin,
        link: "https://www.linkedin.com/in/damayanti-74b1b625a",
      },
    ],
  },
];

export const techStacks = [
  { name: "Next.js", icon: "nextjs2" },
  { name: "React", icon: "react" },
  { name: "Tailwind CSS", icon: "tailwindcss" },
  { name: "TypeScript", icon: "typescript" },
  { name: "Node.js", icon: "nodejs" },
  { name: "PostgreSQL", icon: "postgresql" },
  { name: "MongoDB", icon: "mongodb" },
  { name: "Prisma", icon: "prisma" },
  { name: "Docker", icon: "docker" },
  { name: "Git", icon: "git" },
  { name: "Firebase", icon: "firebase" },
  { name: "Figma", icon: "figma" },
  { name: "Vercel", icon: "vercel" },
  { name: "Laravel", icon: "laravel" },
  { name: "MySQL", icon: "mysql" },
  { name: "PHP", icon: "php" },
  { name: "VueJs", icon: "vuejs" },
  { name: "Bootstrap", icon: "bootstrap5" },
  { name: "Canva", icon: "canva" },
  { name: "Css3", icon: "css3" },
  { name: "Github", icon: "github" },
  { name: "Html5", icon: "html5" },
  { name: "JavaScript", icon: "js" },
  { name: "N8n", icon: "n8n" },
  { name: "Slack", icon: "slack" },
  { name: "WordPress", icon: "wordpress" },
];

export const faqs = [
  {
    question: "Question1",
    answer: "Answer1",
  },
  {
    question: "Question2",
    answer: "Answer2",
  },
  {
    question: "Question3",
    answer: "Answer3",
  },
  {
    question: "Question4",
    answer: "Answer4",
  },
  {
    question: "Question5",
    answer: "Answer5",
  },
  {
    question: "Question6",
    answer: "Answer6",
  },
];

export const footerSocials = [
  { icon: faInstagram, link: "https://www.instagram.com/caruban_tech" },
  { icon: faGithub, link: "https://github.com/CarubanTech" },
  { icon: faLinkedin, link: "https://www.linkedin.com/company/carubantech" },
  { icon: faWhatsapp, link: "https://wa.me/62882001771113" },
];

export const footerServices = [
  "WebDevelopment",
  "MobileApps",
  "UIDesign",
  "ITConsulting",
];

export const footerContact = {
  address: "Cirebon, Jawa Barat, Indonesia",
  email: "carubantech@gmail.com",
};
