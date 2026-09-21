// app/layout.tsx
import Link from "next/link";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <nav className="flex items-center justify-between px-6 py-4 border-b">
          <Link href="/" className="font-bold text-lg">JobFlow</Link>
          <Link href="/applications" className="text-blue-600">Mes candidatures</Link>
        </nav>
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}