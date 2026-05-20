"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const links = [
  { label: "Casos", href: "/work" },
  { label: "Servicios", href: "/services" },
  { label: "Nosotros", href: "/about" },
  { label: "Contacto", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] as [number,number,number,number] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#fafaf8]/90 backdrop-blur-md border-b border-black/[0.06]"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 md:px-10">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo-betancur.webp"
              alt="Betancur Global Advisory"
              width={160}
              height={160}
              className="rounded-full"
              priority
            />
            <span className="hidden md:block text-[#1a2e5a] text-xs font-semibold tracking-widest uppercase leading-tight">
              Betancur<br />
              <span className="font-normal text-[#1a2e5a]/60">Global Advisory</span>
            </span>
          </Link>

          <ul className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group relative text-[#0a0a0a]/50 text-sm tracking-wide transition-colors hover:text-[#0a0a0a]"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#C4983A] transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-6">
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center gap-2 rounded-full border border-[#C4983A]/40 px-6 py-2.5 text-sm text-[#C4983A] tracking-wide transition-all hover:border-[#C4983A] hover:bg-[#C4983A]/5"
            >
              Hablemos
            </Link>

            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="relative flex h-6 w-6 flex-col items-end justify-center gap-1.5 md:hidden"
              aria-label="Menú"
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 6, width: "100%" } : { rotate: 0, y: 0, width: "100%" }}
                className="block h-px bg-[#0a0a0a] origin-center"
                style={{ width: "100%" }}
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -6, width: "100%" } : { rotate: 0, y: 0, width: "75%" }}
                className="block h-px bg-[#0a0a0a] origin-center"
              />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.25, 0.4, 0.25, 1] as [number,number,number,number] }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-[#fafaf8] px-8 md:hidden"
          >
            <ul className="flex flex-col gap-8">
              {links.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-4xl font-bold text-[#0a0a0a]/70 hover:text-[#0a0a0a] transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
