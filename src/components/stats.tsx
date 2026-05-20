"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "15+", label: "Años de experiencia" },
  { value: "$800M+", label: "En transacciones asesoradas" },
  { value: "3", label: "Continentes" },
  { value: "200+", label: "Clientes corporativos" },
];

export function Stats() {
  return (
    <section className="bg-[#0f1e3a] px-6 md:px-10 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="flex flex-col gap-2"
          >
            <span className="text-[#C4983A] text-4xl md:text-5xl font-bold tracking-tight">
              {stat.value}
            </span>
            <span className="text-white/40 text-xs uppercase tracking-widest leading-snug">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
