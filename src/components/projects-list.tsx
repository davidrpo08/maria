"use client";

import { useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { SanityProject } from "@/sanity/queries";

function FloatingImage({ src, visible, x, y }: {
  src: string; visible: boolean;
  x: ReturnType<typeof useMotionValue<number>>;
  y: ReturnType<typeof useMotionValue<number>>;
}) {
  return (
    <motion.div
      style={{ x, y, translateX: "-50%", translateY: "-110%" }}
      className="pointer-events-none fixed z-30 w-[340px] aspect-[4/3] rounded-xl overflow-hidden shadow-2xl"
      animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0.9 }}
      transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
    >
      {src && <Image src={src} alt="" fill className="object-cover" sizes="340px" />}
    </motion.div>
  );
}

function ProjectRow({ project, index, onMouseMove, onMouseEnter, onMouseLeave }: {
  project: SanityProject; index: number;
  onMouseMove: (e: React.MouseEvent) => void;
  onMouseEnter: (src: string) => void;
  onMouseLeave: () => void;
}) {
  const id = String(index + 1).padStart(2, "0");
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.07, ease: [0.25, 0.4, 0.25, 1] }}
    >
      <Link href={`/work/${project.slug}`}>
        <motion.div
          onMouseMove={onMouseMove}
          onMouseEnter={() => onMouseEnter(project.imageUrl ?? "")}
          onMouseLeave={onMouseLeave}
          className="group relative flex items-center justify-between border-t border-black/[0.07] py-7 transition-colors hover:border-black/20"
        >
          <motion.div
            className="absolute inset-0 bg-black/[0.015]"
            initial={{ scaleX: 0, originX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
          />

          <div className="relative flex items-baseline gap-5">
            <span className="text-black/20 text-xs tabular-nums">{id}</span>
            <div>
              <span className="text-[#0a0a0a] text-2xl md:text-4xl font-bold tracking-tight block transition-all duration-300 group-hover:translate-x-2">
                {project.title}
              </span>
              {project.summary && (
                <span className="text-black/35 text-xs mt-1 block md:hidden">{project.summary}</span>
              )}
            </div>
          </div>

          <div className="relative flex items-center gap-8 text-right shrink-0 ml-4">
            <span className="hidden md:block text-black/35 text-sm max-w-[200px] text-right leading-snug">
              {project.client ?? project.category}
            </span>
            <span className="text-black/20 text-xs tabular-nums">{project.year}</span>
            <span className="text-black/20 text-sm transition-all duration-300 group-hover:translate-x-1 group-hover:text-black/50">→</span>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}

export function ProjectsList({ projects }: { projects: SanityProject[] }) {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 150, damping: 20 });
  const y = useSpring(rawY, { stiffness: 150, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    rawX.set(e.clientX);
    rawY.set(e.clientY);
  };

  return (
    <section className="bg-[#fafaf8] px-6 md:px-10 pb-32">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between py-16 border-b border-black/[0.07]">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[#C4983A] text-xs uppercase tracking-[0.3em] flex items-center gap-2"
          >
            Casos seleccionados
          </motion.h2>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-black/20 text-xs"
          >
            ({projects.length})
          </motion.span>
        </div>

        <div>
          {projects.map((project, i) => (
            <ProjectRow
              key={project._id}
              project={project}
              index={i}
              onMouseMove={handleMouseMove}
              onMouseEnter={(src) => setActiveImage(src)}
              onMouseLeave={() => setActiveImage(null)}
            />
          ))}
          <div className="border-t border-black/[0.07]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 flex justify-end"
        >
          <Link
            href="/work"
            className="group inline-flex items-center gap-3 text-black/30 text-sm tracking-wide hover:text-black transition-colors"
          >
            Ver todos los casos
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </motion.div>
      </div>

      <FloatingImage src={activeImage ?? ""} visible={!!activeImage} x={x} y={y} />
    </section>
  );
}
