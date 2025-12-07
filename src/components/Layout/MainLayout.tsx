import { ReactNode } from "react";
import Header from "./Header";
import { Course } from "@/types/course";

interface MainLayoutProps {
  children: ReactNode;
  courses?: Course[];
}

export default function MainLayout({ children, courses = [] }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Header courses={courses} />
      <main className="py-0">{children}</main>
      <footer className="bg-gray-100 text-center py-4 text-sm">
        © {new Date().getFullYear()} Cursuri Profesionale
      </footer>
    </div>
  );
}
