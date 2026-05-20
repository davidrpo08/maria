"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

function SplitText({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) {
  const words = text.split(" ");
  return (
    <span className={className} aria-label={text}>
      {words.map((word, wi) => (
        <span key={wi} className="inline-block overflow-hidden mr-[0.22em] last:mr-0">
          <motion.span
            className="inline-block"
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1, delay: delay + wi * 0.1, ease: [0.25, 0.4, 0.25, 1] as [number,number,number,number] }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

function CityClock({ city, timezone }: { city: string; timezone: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const tick = () => {
      if (!ref.current) return;
      ref.current.textContent = new Intl.DateTimeFormat("es-CO", {
        timeZone: timezone, hour: "2-digit", minute: "2-digit",
      }).format(new Date());
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [timezone]);
  return (
    <div className="flex flex-col gap-0.5">
      <span className="text-black/30 text-[10px] uppercase tracking-widest">{city}</span>
      <span ref={ref} className="text-[#C4983A] text-xs tabular-nums font-medium" />
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen w-full bg-[#fafaf8] overflow-hidden pt-56 pb-0">
      {/* Grain */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.025] [background-image:url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/%3E%3C/svg%3E')] [background-size:200px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-[calc(100vh-14rem)]">

        {/* Left — texto */}
        <div className="flex flex-col justify-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[#C4983A] text-xs tracking-[0.3em] uppercase mb-8 flex items-center gap-2"
          >
            <span className="inline-block w-6 h-px bg-[#C4983A]" />
            Betancur Global Advisory — Est. 2010
          </motion.p>

          <h1 className="text-[clamp(3rem,6.5vw,7rem)] font-light leading-[0.9] tracking-tight text-[#0f1e3a] [font-family:var(--font-cormorant)]">
            <SplitText text="Soluciones" delay={0.2} />
            <br />
            <SplitText text="corporativas" delay={0.35} className="italic font-light text-[#C4983A]" />
            <br />
            <SplitText text="de alto nivel." delay={0.5} />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mt-8 max-w-sm text-[#0f1e3a]/45 text-[18px] leading-relaxed"
          >
            Asesoría estratégica en finanzas, mercadeo corporativo y consultoría
            para organismos internacionales. Resultados medibles para empresas
            que exigen excelencia.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-8 flex flex-wrap gap-2"
          >
            {["Consultoría Financiera", "Comercial & Mercadeo", "Consultoría ONU"].map((s) => (
              <span key={s} className="rounded-full border border-[#C4983A]/30 px-4 py-1.5 text-xs text-[#C4983A] tracking-wide">
                {s}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="mt-10 flex items-center gap-4"
          >
            <Link
              href="/contact"
              className="rounded-full bg-[#0f1e3a] px-8 py-4 text-base font-medium text-white hover:bg-[#1a2e5a] transition-colors"
            >
              Hablemos
            </Link>
            <Link
              href="/work"
              className="group flex items-center gap-2 text-sm text-[#0f1e3a]/50 hover:text-[#0f1e3a] transition-colors"
            >
              Ver casos
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
            <a
              href="https://www.linkedin.com/in/mar%C3%ADa-elisa-betancur-ab7b27356"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 flex items-center justify-center w-10 h-10 rounded-full border border-[#0f1e3a]/20 text-[#0f1e3a]/40 hover:border-[#C4983A] hover:text-[#C4983A] transition-colors"
              aria-label="LinkedIn"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </motion.div>
        </div>

        {/* Right — fotografía ejecutiva */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] as [number,number,number,number] }}
          className="relative flex items-end justify-center h-[520px] md:h-[680px]"
        >
          {/* Decorative circle behind */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[380px] h-[380px] rounded-full bg-[#0f1e3a]/[0.04] border border-[#C4983A]/20" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[280px] h-[280px] rounded-full bg-[#C4983A]/[0.06]" />

          {/* Gold corner accent */}
          <div className="absolute top-8 right-8 w-16 h-[2px] bg-[#C4983A]" />
          <div className="absolute top-8 right-8 w-[2px] h-16 bg-[#C4983A]" />
          <div className="absolute bottom-8 left-8 w-16 h-[2px] bg-[#C4983A]/40" />
          <div className="absolute bottom-8 left-8 w-[2px] h-16 bg-[#C4983A]/40" />

          {/* Photo */}
          <div className="relative w-full h-full">
            <Image
              src="/ejecutiva.webp"
              alt="Ejecutiva Betancur Global Advisory"
              fill
              className="object-contain object-bottom drop-shadow-xl"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </motion.div>
      </div>

      {/* Bottom bar — relojes */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between border-t border-black/[0.06] py-6 mt-10"
      >
        <div className="flex gap-8">
          <CityClock city="Bogotá" timezone="America/Bogota" />
          <CityClock city="Miami" timezone="America/New_York" />
          <CityClock city="Ginebra" timezone="Europe/Zurich" />
        </div>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="text-[#C4983A] text-lg"
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  );
}
