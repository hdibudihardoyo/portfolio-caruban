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
    title: "Aplikasi Buwuhan",
    category: "Web Development",
    desc: "Digitalisasi catatan sumbangan hajatan berbasis cloud.",
    image: "/image-contoh.jpg",
    link: "#",
  },
  {
    title: "Inventory Master",
    category: "Management System",
    desc: "Sistem pelacakan stok barang real-time untuk UMKM.",
    image: "/image-contoh.jpg",
    link: "#",
  },
  {
    title: "Caruban Tech Profile",
    category: "Landing Page",
    desc: "Website company profile dengan performa tinggi dan SEO.",
    image: "/image-contoh.jpg",
    link: "#",
  },
];

export const socialMedia = [
  {
    icon: faInstagram,
    link: "https://instagram.com/username",
    color: "hover:bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]",
  },
  {
    icon: faTiktok,
    link: "https://tiktok.com/@username",
    color: "hover:bg-black",
  },
  {
    icon: faGithub,
    link: "https://github.com/username",
    color: "hover:bg-[#333]",
  },
];

export const contactConfig = {
  instagramHandle: "@shrimp_dev",
  whatsappNumber: "628xxxxxxxxxx",
  email: "contact@yourdomain.com",
};

export const navLinks = [
  { name: "Beranda", id: "/#" },
  { name: "Proyek", id: "/#project" },
  { name: "Layanan", id: "/#services" },
  { name: "Harga", id: "/#pricing" },
  { name: "Testimoni", id: "/#testimonial" },
  { name: "Kontak", id: "/contact" },
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
    title: "Basic Web Profile",
    price: "Rp 0",
    desc: "Halaman web statis sederhana untuk menampilkan profil profesional Anda.",
    features: [
      "1 Halaman Landing Page (Single Page)",
      "Setup Dasar Media Sosial",
      "Template Standar",
    ],
    button: "Daftar Program UMKM!",
  },
  {
    title: "UMKM Starter",
    price: "Rp 0",
    desc: "Katalog digital sederhana agar produk Anda dapat diakses pelanggan kapan saja.",
    features: [
      "Katalog Produk Statis",
      "Integrasi WhatsApp",
      "Optimasi Mobile",
    ],
    button: "Daftar Program UMKM!",
  },
  {
    title: "Landing Page Edukasi",
    price: "Rp 0",
    desc: "Solusi penyampaian informasi organisasi untuk instansi non-profit.",
    features: ["Desain Informatif", "Maintenance 3 Bulan", "Google Maps"],
    button: "Daftar Sekarang!",
  },
];

export const berbayarPlans: PricingPlan[] = [
  {
    title: "Business Website",
    price: "Rp 1.500.000",
    desc: "Website profesional untuk bisnis dengan fitur lengkap dan custom desain.",
    features: [
      "Multi Page Website",
      "Custom Design",
      "SEO Basic",
      "Support 3 Bulan",
    ],
    button: "Pesan Sekarang",
  },
  {
    title: "E-Commerce",
    price: "Rp 3.500.000",
    desc: "Toko online dengan sistem pembayaran otomatis (Payment Gateway).",
    features: [
      "Keranjang & Checkout",
      "Payment Gateway",
      "Dashboard Admin",
      "Manajemen Produk",
    ],
    button: "Pesan Sekarang",
    highlight: true,
  },
  {
    title: "Custom App",
    price: "Mulai Rp 5jt",
    desc: "Aplikasi web sesuai kebutuhan logika bisnis Anda yang kompleks.",
    features: [
      "Full Custom Logic",
      "API Integration",
      "Scalable System",
      "Maintenance Premium",
    ],
    button: "Konsultasi Gratis",
  },
];

export const featuredProjects = [
  {
    id: "01",
    title: "Aplikasi Buwuhan",
    description:
      "Sistem Buwuhan adalah platform manajemen catatan keuangan yang dirancang khusus untuk memodernisasi tradisi pemberian sumbangan (kondangan/buwuhan) pada acara hajatan. Aplikasi ini menggantikan pencatatan manual di buku besar menjadi sistem basis data yang terorganisir, akurat, dan mudah diakses secara real-time.",
    image: "/image-contoh.jpg",
    slug: "https://www.google.com",
    imageLeft: true,
  },
  {
    id: "02",
    title: "Sistem Manajemen Inventaris",
    description:
      "Kami menghadirkan solusi teknologi yang efisien untuk membantu manajemen data dan keuangan Anda. Dengan antarmuka yang bersih dan performa yang cepat, setiap proyek kami kerjakan dengan standar kualitas tinggi untuk mendukung skalabilitas bisnis.",
    image: "/image-contoh.jpg",
    slug: "https://www.google.com",
    imageLeft: false,
  },
];

export const reviews = [
  {
    text: "Websitenya keren parah, gue suka banget sama desainnya! Worth it lah pokoknya",
    name: "miyaa anifah",
  },
  {
    text: "Timnya asik-asik, ga ribet, langsung ngerti maunya kita. Hasilnya juga mantap!",
    name: "Rizky Pratama",
  },
  {
    text: "Revisinya sabar banget ngeladenin request gue yang banyak. Makasih ya",
    name: "Farhan Alif",
  },
  {
    text: "Pelayanan cepat dan hasil sesuai ekspektasi, recommended banget!",
    name: "Andi Saputra",
  },
  {
    text: "Desainnya bener-bener mencerminkan identitas brand kami. Caruban Tech emang juara!",
    name: "Siti Aminah",
  },
  {
    text: "Kodingannya rapi, performa web kencang banget. Puas banget sama hasilnya.",
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
    title: "Teknologi Terbaru",
    description:
      "Menggunakan stack teknologi modern untuk memastikan performa sistem yang optimal dan keamanan data yang terjamin.",
    number: "01",
  },
  {
    image: "/image-contoh.jpg",
    icon: <Palette className="w-5 h-5" />,
    title: "Desain Intuitif",
    description:
      "Riset UI/UX yang mendalam untuk menciptakan pengalaman pengguna yang mulus di berbagai perangkat.",
    number: "02",
  },
  {
    image: "/image-contoh.jpg",
    icon: <HeadphonesIcon className="w-5 h-5" />,
    title: "Penuh Dukungan",
    description:
      "Layanan pemeliharaan dan dukungan teknis pasca-rilis untuk menjamin stabilitas aplikasi Anda secara berkala.",
    number: "03",
  },
  {
    image: "/image-contoh.jpg",
    icon: <Layers className="w-5 h-5" />,
    title: "Efisiensi & Skalabilitas",
    description:
      "Sistem yang dirancang secara modular sehingga mudah dikembangkan seiring pertumbuhan bisnis Anda.",
    number: "04",
  },
];

export const teams = [
  {
    role: "Back-End Developer",
    name: "HARIS GUNAWAN R",
    image: "/haris.jpeg",
    socials: [
      { icon: faInstagram, link: "#" },
      { icon: faGithub, link: "#" },
      { icon: faLinkedin, link: "#" },
    ],
  },
  {
    role: "Front-End Developer",
    name: "HADI BUDI HARDOYO",
    image: "/hadii.jpg",
    socials: [
      { icon: faInstagram, link: "#" },
      { icon: faGithub, link: "#" },
      { icon: faLinkedin, link: "#" },
    ],
  },
  {
    role: "Front-End Developer",
    name: "LUFTAN HADI",
    image: "/lutfann.jpeg",
    socials: [
      { icon: faInstagram, link: "#" },
      { icon: faGithub, link: "#" },
      { icon: faLinkedin, link: "#" },
    ],
  },
  {
    role: "UI/UX Designer",
    name: "DAMAYANTI",
    image: "/haris.jpeg",
    socials: [
      { icon: faInstagram, link: "#" },
      { icon: faGithub, link: "#" },
      { icon: faLinkedin, link: "#" },
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
    question: "Mengapa bisnis saya membutuhkan website atau aplikasi khusus?",
    answer:
      "Website dan aplikasi meningkatkan kredibilitas, memperluas jangkauan pasar secara global, dan memungkinkan bisnis Anda beroperasi 24/7 tanpa batasan fisik.",
  },
  {
    question:
      "Berapa lama waktu yang dibutuhkan untuk menyelesaikan satu proyek?",
    answer:
      "Durasi proyek bergantung pada kompleksitas dan fitur yang dibutuhkan. Rata-rata proyek sederhana selesai dalam 2–4 minggu, sementara proyek kompleks bisa memakan waktu 1–3 bulan.",
  },
  {
    question: "Bagaimana dengan keamanan data dan pemeliharaan setelah rilis?",
    answer:
      "Kami menerapkan standar keamanan terkini dan menyediakan paket pemeliharaan pasca-rilis untuk memastikan aplikasi Anda tetap aman, stabil, dan terus diperbarui.",
  },
  {
    question: "Apakah ada biaya tersembunyi selain biaya pengembangan?",
    answer:
      "Tidak ada biaya tersembunyi. Semua biaya akan diuraikan secara transparan di awal sebelum proyek dimulai, termasuk biaya hosting, domain, dan pemeliharaan jika diperlukan.",
  },
  {
    question: "Apakah saya bisa mengajukan revisi jika hasil tidak sesuai?",
    answer:
      "Tentu saja. Kami menyediakan sesi revisi sesuai kesepakatan di awal proyek untuk memastikan hasil akhir sesuai dengan ekspektasi Anda.",
  },
  {
    question:
      "Bagaimana cara memulai konsultasi proyek dengan Caruban Technology?",
    answer:
      "Anda bisa menghubungi kami melalui halaman kontak atau langsung via WhatsApp. Tim kami akan merespons dalam 1x24 jam untuk mendiskusikan kebutuhan proyek Anda.",
  },
];

export const footerSocials = [
  { icon: faInstagram, link: "#" },
  { icon: faGithub, link: "#" },
  { icon: faLinkedin, link: "#" },
  { icon: faWhatsapp, link: "#" },
];

export const footerServices = [
  "Web Development",
  "Mobile Apps",
  "UI/UX Design",
  "IT Consulting",
];

export const footerContact = {
  address: "Cirebon, Jawa Barat, Indonesia",
  email: "hello@carubantech.id",
};
