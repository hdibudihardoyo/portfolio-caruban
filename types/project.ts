/** Featured project (ditampilkan di halaman home) */
export interface FeaturedProject {
  id: string;
  title: string;
  description: string;
  image: string;
  slug: string;
  imageLeft: boolean;
}

/** Project item di halaman /projects (semua proyek) */
export interface ProjectItem {
  title: string;
  category: string;
  desc: string;
  image: string;
  link: string;
}
