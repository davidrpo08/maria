"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type Project = {
  title: string; client: string | null; category: string | null; year: string | null;
  imageUrl: string | null; challenge: string | null; solution: string | null;
  outcome: string | null; services: string[] | null; gallery: string[] | null; summary: string | null;
};
type Adjacent = { prev: { title: string; slug: string } | null; next: { title: string; slug: string } | null };

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 32 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" } as const,
    transition: { duration: 0.7, delay, ease: [0.25, 0.4, 0.25, 1] as [number,number,number,number] },
  };
}

export function ProjectDetail({ project, adjacent }: { project: Project; adjacent: Adjacent }) {
  return (
    <main className="bg-[#fafaf8] min-h-screen">

      {/* Hero image */}
      <div className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden bg-[#e8e8e4]">
        {project.imageUrl && (
          <Image src={project.imageUrl} alt={project.title} fill className="object-cover" priority sizes="100vw" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#fafaf8] via-transparent to-transparent" />
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute bottom-10 left-6 md:left-10"
        >
          <span className="text-black/40 text-xs uppercase tracking-[0.3em] bg-white/70 backdrop-blur-sm px-3 py-1 rounded-full">
            {project.category}
          </span>
        </motion.div>
      </div>

      {/* Título + meta */}
      <section className="px-6 md:px-10 py-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_220px] gap-12 items-start">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] as [number,number,number,number] }}
            className="text-[#0a0a0a] text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]"
          >
            {project.title}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-6 text-sm"
          >
            {project.client && (
              <div>
                <p className="text-black/25 text-[10px] uppercase tracking-widest mb-1">Cliente</p>
                <p className="text-black/70">{project.client}</p>
              </div>
            )}
            {project.year && (
              <div>
                <p className="text-black/25 text-[10px] uppercase tracking-widest mb-1">Año</p>
                <p className="text-black/70">{project.year}</p>
              </div>
            )}
            {project.services && project.services.length > 0 && (
              <div>
                <p className="text-black/25 text-[10px] uppercase tracking-widest mb-2">Servicios prestados</p>
                <div className="flex flex-col gap-1.5">
                  {project.services.map((s) => (
                    <span key={s} className="text-black/45 text-xs">{s}</span>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>

        {project.summary && (
          <motion.p {...fadeUp(0.2)} className="mt-10 text-black/45 text-[18px] md:text-3xl leading-relaxed max-w-3xl font-light">
            {project.summary}
          </motion.p>
        )}
      </section>

      <div className="border-t border-black/[0.06] max-w-7xl mx-auto px-6 md:px-10" />

      {/* El reto / Enfoque / Resultados */}
      <section className="px-6 md:px-10 py-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
        {[
          { label: "El reto", body: project.challenge },
          { label: "Nuestro enfoque", body: project.solution },
          { label: "Resultados", body: project.outcome },
        ].map(({ label, body }, i) => body && (
          <motion.div key={label} {...fadeUp(i * 0.1)}>
            <p className="text-black/25 text-[10px] uppercase tracking-[0.3em] mb-5">{label}</p>
            <p className="text-black/55 text-[18px] leading-relaxed">{body}</p>
          </motion.div>
        ))}
      </section>

      {/* Galería */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="px-6 md:px-10 pb-24 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.gallery.map((url, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.08)}
                className={`relative overflow-hidden rounded-xl ${i === 0 ? "md:col-span-2 aspect-[16/7]" : "aspect-[4/3]"}`}
              >
                <Image src={url} alt="" fill className="object-cover hover:scale-105 transition-transform duration-700" sizes="(max-width:768px) 100vw, 50vw" />
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Navegación prev/next */}
      <div className="border-t border-black/[0.06]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-2">
          {adjacent.prev ? (
            <Link href={`/work/${adjacent.prev.slug}`} className="group py-10 pr-8 border-r border-black/[0.06]">
              <p className="text-black/25 text-[10px] uppercase tracking-widest mb-2">Anterior</p>
              <p className="text-black/50 text-sm md:text-base font-medium group-hover:text-black transition-colors">
                ← {adjacent.prev.title}
              </p>
            </Link>
          ) : <div />}
          {adjacent.next ? (
            <Link href={`/work/${adjacent.next.slug}`} className="group py-10 pl-8 text-right">
              <p className="text-black/25 text-[10px] uppercase tracking-widest mb-2">Siguiente</p>
              <p className="text-black/50 text-sm md:text-base font-medium group-hover:text-black transition-colors">
                {adjacent.next.title} →
              </p>
            </Link>
          ) : <div />}
        </div>
      </div>

      <div className="py-10 text-center border-t border-black/[0.06]">
        <Link href="/work" className="text-black/25 text-xs uppercase tracking-widest hover:text-black/50 transition-colors">
          ← Todos los casos
        </Link>
      </div>
    </main>
  );
}
