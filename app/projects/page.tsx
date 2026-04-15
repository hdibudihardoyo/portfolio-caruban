import AllProjects from "@/components/AllProjectSection/allprojects";

export const metadata = {
  title: "Semua Proyek | Caruban Technology",
  description:
    "Daftar portofolio lengkap pengembangan web dan aplikasi oleh Caruban Technology.",
};

export default function ProjectsPage() {
  return (
    <main>
      <AllProjects />
    </main>
  );
}
