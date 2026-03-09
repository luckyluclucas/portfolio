import Link from "next/link";
import { githubProfileLink, linkedinProfileLink, whatsappLink } from "@/lib/socialMediaLinks";

export default async function Footer() {
  const links = [
    { href: linkedinProfileLink, label: "LinkedIn" },
    { href: githubProfileLink, label: "GitHub" },
    { href: whatsappLink, label: "WhatsApp" },
  ]

  return (
    <footer className="mt-16 border-t border-border/60 dark:border-white/10 bg-secondary/40 dark:bg-background">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col gap-1 text-sm text-muted-foreground text-center md:text-left">
          <span className="font-semibold text-foreground text-base">Rean Lucas Dev</span>
          <span>Portfólio desenvolvido por mim</span>
          <span>© 2025 — Todos os direitos reservados</span>
        </div>

        <div className="flex items-center gap-6">
          {links.map(({ href, label }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors underline-offset-4 hover:underline"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
