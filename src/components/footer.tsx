"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const links = [
  {
    heading: "Servicios",
    items: [
      { label: "Consultoría Financiera", href: "/services" },
      { label: "Comercial & Mercadeo", href: "/services" },
      { label: "Consultoría ONU", href: "/services" },
    ],
  },
  {
    heading: "Compañía",
    items: [
      { label: "Casos", href: "/work" },
      { label: "Nosotros", href: "/about" },
      { label: "Contacto", href: "/contact" },
    ],
  },
];

const offices = [
  { city: "Bogotá", address: "Cra. 7 #71-21, Piso 8" },
  { city: "Miami", address: "1221 Brickell Ave, Suite 900" },
  { city: "Ginebra", address: "Rue du Rhône 14, CH-1204" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0f1e3a] px-6 md:px-10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto">

        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-14 pb-16 border-b border-white/[0.08]">

          {/* Logo + tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <Link href="/" className="flex items-center gap-4">
              <Image
                src="/logo-betancur.webp"
                alt="Betancur Global Advisory"
                width={160}
                height={160}
                className="rounded-full"
              />
              <div className="flex flex-col">
                <span className="text-white text-sm font-semibold tracking-widest uppercase">Betancur</span>
                <span className="text-white/40 text-xs tracking-widest uppercase">Global Advisory</span>
              </div>
            </Link>
            <p className="text-white/30 text-[18px] leading-relaxed max-w-xs">
              Asesoría estratégica corporativa para empresas que exigen el más alto estándar de servicio.
            </p>
            <a
              href="mailto:info@betancurglobaladvisory.com"
              className="text-white/40 text-sm hover:text-white transition-colors"
            >
              info@betancurglobaladvisory.com
            </a>
          </motion.div>

          {/* Nav columns */}
          {links.map((col, ci) => (
            <motion.div
              key={col.heading}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 + ci * 0.08 }}
              className="flex flex-col gap-4"
            >
              <p className="text-white/25 text-[10px] uppercase tracking-[0.3em]">{col.heading}</p>
              <ul className="flex flex-col gap-3">
                {col.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-white/45 text-sm hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Offices */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="py-10 flex flex-wrap gap-8 border-b border-white/[0.08]"
        >
          {offices.map((office) => (
            <div key={office.city} className="flex flex-col gap-1">
              <p className="text-white/25 text-[10px] uppercase tracking-widest">{office.city}</p>
            </div>
          ))}
        </motion.div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-white/20 text-xs">
            © {year} Betancur Global Advisory. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-white/20 text-xs hover:text-white/50 transition-colors">
              Política de privacidad
            </Link>
            <Link href="/terms" className="text-white/20 text-xs hover:text-white/50 transition-colors">
              Términos de uso
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
