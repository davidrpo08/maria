"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Consultoría Financiera",
    description: "Asesoría en estructuración de deuda, fusiones y adquisiciones, due diligence, valoración de empresas y planificación financiera estratégica para corporaciones en crecimiento.",
    tags: ["M&A", "Due Diligence", "Valoración", "Reestructuración"],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
  },
  {
    number: "02",
    title: "Comercial & Mercadeo",
    description: "Diseño e implementación de estrategias comerciales, posicionamiento de marca, análisis de mercado y planes de expansión para empresas que buscan consolidar su presencia.",
    tags: ["Estrategia Comercial", "Branding", "Expansión", "Análisis de Mercado"],
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&q=80",
  },
];

export function Services() {
  return (
    <section className="bg-[#fafaf8] px-6 md:px-10 py-32 border-t border-black/[0.06]">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-end justify-between mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-[#C4983A] text-xs uppercase tracking-[0.3em] mb-3 flex items-center gap-2"
            >
              <span className="inline-block w-5 h-px bg-[#C4983A]" />
              Lo que hacemos
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-[#0f1e3a] text-3xl md:text-5xl font-bold tracking-tight"
            >
              Nuestros servicios
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link href="/services" className="group hidden md:inline-flex items-center gap-2 text-black/30 text-sm hover:text-[#C4983A] transition-colors">
              Ver todos
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </motion.div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.25, 0.4, 0.25, 1] as [number,number,number,number] }}
              className="group flex flex-col rounded-2xl overflow-hidden border border-black/[0.07] hover:border-[#C4983A]/40 transition-colors duration-300"
            >
              {/* Photo */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width:768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-[#0f1e3a]/40 group-hover:bg-[#0f1e3a]/20 transition-colors duration-300" />
                <span className="absolute top-4 left-4 text-[#C4983A] text-xs font-bold tracking-widest">
                  {service.number}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-4 p-6 bg-white flex-1">
                <h3 className="text-[#0f1e3a] text-xl font-bold tracking-tight leading-snug">
                  {service.title}
                </h3>
                <p className="text-black/40 text-[18px] leading-relaxed flex-1">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2 border-t border-black/[0.06]">
                  {service.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-[#C4983A]/25 px-3 py-1 text-[10px] text-[#C4983A] tracking-wide uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
