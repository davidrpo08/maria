"use client";

import { motion } from "framer-motion";

const milestones = [
  {
    year: "2010",
    title: "Fundación",
    body: "Creación de Betancur Global Advisory con foco en asesoría financiera para empresas de mediana y gran escala en Colombia.",
  },
  {
    year: "2014",
    title: "Expansión internacional",
    body: "Apertura de operaciones en Miami y vinculación con clientes en el mercado latinoamericano y norteamericano.",
  },
  {
    year: "2020",
    title: "Gerencia Comercial — Levi Strauss & Co.",
    body: "Liderazgo de la gerencia comercial para Levi Strauss & Co. en Colombia, dirigiendo estrategia de ventas, posicionamiento de marca y expansión del canal retail en el mercado local.",
  },
  {
    year: "2026",
    title: "Consultora acreditada ONU",
    body: "Acreditación como consultora especializada ante organismos del sistema de Naciones Unidas, asesorando programas de desarrollo sostenible y cumplimiento de estándares internacionales.",
  },
  {
    year: "Hoy",
    title: "Tres continentes",
    body: "Más de 200 clientes en 3 continentes, con un portafolio de transacciones que supera los $800 millones de dólares asesorados.",
  },
];

export function Trajectory() {
  return (
    <section id="trajectory" className="bg-[#fafaf8] px-6 md:px-10 py-32 border-t border-black/[0.06] scroll-mt-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.6fr] gap-20 items-start">

        {/* Left — encabezado */}
        <div className="md:sticky md:top-32">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[#C4983A] text-xs uppercase tracking-[0.3em] mb-4 flex items-center gap-2"
          >
            <span className="inline-block w-5 h-px bg-[#C4983A]" />
            Trayectoria
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[#0f1e3a] text-3xl md:text-5xl font-bold tracking-tight leading-[1.1]"
          >
            Más de una<br />
            <span className="italic font-light text-[#0f1e3a]/35">década de impacto</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 text-black/40 text-[18px] leading-relaxed max-w-xs"
          >
            Una firma construida sobre resultados concretos, presencia global y el más alto nivel de exigencia institucional.
          </motion.p>

          {/* UN badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 inline-flex items-center gap-3 rounded-2xl border border-[#C4983A]/25 bg-[#C4983A]/[0.04] px-5 py-4"
          >
            <span className="text-2xl">🌐</span>
            <div>
              <p className="text-[#0f1e3a] text-xs font-semibold tracking-wide uppercase">Consultora ONU</p>
              <p className="text-black/35 text-[11px] mt-0.5">Sistema de Naciones Unidas · desde 2026</p>
            </div>
          </motion.div>
        </div>

        {/* Right — línea de tiempo */}
        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-[11px] top-2 bottom-2 w-px bg-black/[0.07]" />

          <div className="flex flex-col gap-12">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] }}
                className="relative pl-10"
              >
                {/* dot */}
                <div className={`absolute left-0 top-1.5 w-[23px] h-[23px] rounded-full border-2 flex items-center justify-center ${m.year === "Hoy" ? "border-[#C4983A] bg-[#C4983A]" : "border-[#C4983A]/40 bg-[#fafaf8]"}`}>
                  <div className={`w-2 h-2 rounded-full ${m.year === "Hoy" ? "bg-white" : "bg-[#C4983A]/60"}`} />
                </div>

                <span className="text-[#C4983A] text-[11px] font-semibold tracking-widest uppercase">{m.year}</span>
                <h3 className="text-[#0f1e3a] text-lg font-bold mt-1 mb-2">{m.title}</h3>
                <p className="text-black/45 text-[18px] leading-relaxed">{m.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
