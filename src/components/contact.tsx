"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const interests = ["Consultoría Financiera", "Comercial & Mercadeo", "Consultoría ONU", "Paquete completo"];

function Field({ label, name, type = "text", required = true }: { label: string; name: string; type?: string; required?: boolean }) {
  const [focused, setFocused] = useState(false);
  const [filled, setFilled] = useState(false);
  return (
    <div className="relative">
      <motion.label
        htmlFor={name}
        animate={{
          y: focused || filled ? -22 : 0,
          scale: focused || filled ? 0.78 : 1,
          color: focused ? "rgba(10,10,10,0.7)" : "rgba(10,10,10,0.3)",
        }}
        transition={{ duration: 0.2 }}
        className="absolute left-0 top-3 origin-left text-sm pointer-events-none"
        style={{ transformOrigin: "left" }}
      >
        {label}
      </motion.label>
      <input
        id={name} name={name} type={type} required={required}
        onFocus={() => setFocused(true)}
        onBlur={(e) => { setFocused(false); setFilled(e.target.value.length > 0); }}
        onChange={(e) => setFilled(e.target.value.length > 0)}
        className="w-full bg-transparent border-b border-black/10 pt-5 pb-3 text-[#0a0a0a] text-sm outline-none transition-colors focus:border-black/40"
      />
      <motion.div
        className="absolute bottom-0 left-0 h-px bg-[#0a0a0a]"
        animate={{ scaleX: focused ? 1 : 0, originX: 0 }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
}

function TextareaField({ label, name }: { label: string; name: string }) {
  const [focused, setFocused] = useState(false);
  const [filled, setFilled] = useState(false);
  return (
    <div className="relative col-span-2">
      <motion.label
        htmlFor={name}
        animate={{
          y: focused || filled ? -22 : 0,
          scale: focused || filled ? 0.78 : 1,
          color: focused ? "rgba(10,10,10,0.7)" : "rgba(10,10,10,0.3)",
        }}
        transition={{ duration: 0.2 }}
        className="absolute left-0 top-3 origin-left text-sm pointer-events-none"
        style={{ transformOrigin: "left" }}
      >
        {label}
      </motion.label>
      <textarea
        id={name} name={name} rows={4}
        onFocus={() => setFocused(true)}
        onBlur={(e) => { setFocused(false); setFilled(e.target.value.length > 0); }}
        onChange={(e) => setFilled(e.target.value.length > 0)}
        className="w-full resize-none bg-transparent border-b border-black/10 pt-5 pb-3 text-[#0a0a0a] text-sm outline-none transition-colors focus:border-black/40"
      />
      <motion.div
        className="absolute bottom-0 left-0 h-px bg-[#0a0a0a]"
        animate={{ scaleX: focused ? 1 : 0, originX: 0 }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
}

export function Contact() {
  const [selected, setSelected] = useState<string[]>([]);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const toggle = (item: string) =>
    setSelected((prev) => prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]);

  return (
    <section id="contact" className="bg-[#f0f0ec] px-6 md:px-10 py-32 border-t border-black/[0.06] scroll-mt-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="text-black/30 text-xs uppercase tracking-[0.3em] mb-6"
          >
            Contacto
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[#0a0a0a] text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]"
          >
            Hablemos de<br />
            <span className="text-black/25 italic font-light">su proyecto</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 space-y-4 text-black/40 text-sm"
          >
            <p>ceo@betancurglobaladvisory.com</p>
            <a
              href="https://www.linkedin.com/in/mar%C3%ADa-elisa-betancur-ab7b27356"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-[#C4983A]/40 px-5 py-2.5 text-[#C4983A] text-sm tracking-wide hover:border-[#C4983A] hover:bg-[#C4983A]/5 transition-all"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn — María Elisa Betancur
            </a>
            <p className="pt-2 text-black/25 text-xs">Bogotá · Miami · Ginebra</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <AnimatePresence mode="wait">
            {sent ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex flex-col justify-center h-full gap-4 py-10"
              >
                <span className="text-[#0a0a0a] text-5xl">✓</span>
                <p className="text-[#0a0a0a] text-2xl font-bold">Mensaje enviado.</p>
                <p className="text-black/40 text-[18px]">Nos pondremos en contacto en menos de 48 horas.</p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={async (e) => {
                  e.preventDefault();
                  setLoading(true);
                  setError(false);
                  const form = e.currentTarget;
                  const res = await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                      access_key: "50d8032a-5f54-491f-9522-5236d1d14955",
                      name: (form.elements.namedItem("name") as HTMLInputElement).value,
                      email: (form.elements.namedItem("email") as HTMLInputElement).value,
                      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
                      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
                      interests: selected.join(", "),
                      subject: "Nuevo mensaje — Betancur Global Advisory",
                    }),
                  });
                  const json = await res.json();
                  setLoading(false);
                  if (json.success) setSent(true);
                  else setError(true);
                }}
                className="grid grid-cols-2 gap-x-8 gap-y-10"
              >
                <Field label="Nombre" name="name" />
                <Field label="Correo electrónico" name="email" type="email" />
                <Field label="Teléfono (opcional)" name="phone" required={false} />
                <div className="col-span-2">
                  <p className="text-black/25 text-xs uppercase tracking-widest mb-4">Me interesa</p>
                  <div className="flex flex-wrap gap-2">
                    {interests.map((item) => (
                      <button
                        key={item} type="button" onClick={() => toggle(item)}
                        className={`rounded-full border px-4 py-1.5 text-xs tracking-wide transition-all duration-200 ${
                          selected.includes(item)
                            ? "border-[#0a0a0a] text-[#0a0a0a] bg-black/5"
                            : "border-black/15 text-black/35 hover:border-black/40"
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
                <TextareaField label="Cuéntenos sobre su empresa y necesidad" name="message" />
                {error && (
                  <p className="col-span-2 text-red-500 text-xs text-right">
                    Hubo un error al enviar. Intente de nuevo.
                  </p>
                )}
                <div className="col-span-2 flex justify-end">
                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group flex items-center gap-3 rounded-full bg-[#1a2e5a] px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-[#243f7a] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? "Enviando..." : "Enviar mensaje"}
                    {!loading && <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>}
                  </motion.button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
