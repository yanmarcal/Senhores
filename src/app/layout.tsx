import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Autonomia Diária — Página Inicial",
  description:
    "Aplicação web acessível focada na autonomia de pessoas idosas nas tarefas do dia a dia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className="min-h-screen bg-stone-50 text-slate-950 font-sans">
        {children}
      </body>
    </html>
  );
}
