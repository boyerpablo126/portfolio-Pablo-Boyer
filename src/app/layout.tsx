import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `${site.firstName} ${site.lastName} — Portfolio d'architecture`,
  description: `Portfolio de ${site.firstName} ${site.lastName}, étudiant en architecture : projets, outils et parcours.`,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body>{children}</body></html>;
}
