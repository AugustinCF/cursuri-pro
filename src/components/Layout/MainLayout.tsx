import { ReactNode } from "react";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="bg-white shadow p-4">
        <div className="max-w-7xl mx-auto font-semibold text-xl">
          Cursuri Profesionale
        </div>
      </header>
      <main className="py-0">{children}</main>
      <footer className="bg-gray-100 text-center py-4 text-sm">
        © {new Date().getFullYear()} Cursuri Profesionale
      </footer>
    </div>
  );
}
