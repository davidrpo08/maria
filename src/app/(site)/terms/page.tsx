export const metadata = {
  title: "Términos de uso — Betancur Global Advisory",
};

const sections = [
  {
    title: "1. Aceptación de los términos",
    body: "El acceso y uso de este sitio web implica la aceptación de los presentes términos de uso. Si no está de acuerdo con ellos, le pedimos abstenerse de utilizar el sitio.",
  },
  {
    title: "2. Objeto del sitio",
    body: "Este sitio tiene como finalidad presentar los servicios de asesoría estratégica, financiera y comercial de Betancur Global Advisory, así como facilitar el contacto con potenciales clientes.",
  },
  {
    title: "3. Propiedad intelectual",
    body: "Todos los contenidos de este sitio —textos, imágenes, marca y diseño— son propiedad de Betancur Global Advisory o se utilizan bajo la licencia correspondiente, y no pueden reproducirse sin autorización previa.",
  },
  {
    title: "4. Uso del formulario de contacto",
    body: "Al enviar información a través del formulario de contacto, usted declara que los datos suministrados son veraces y autoriza su uso para los fines descritos en la política de privacidad.",
  },
  {
    title: "5. Limitación de responsabilidad",
    body: "La información publicada en este sitio tiene carácter informativo y no constituye asesoría financiera, legal o comercial vinculante. Cualquier decisión basada en esta información debe validarse mediante consulta directa con Betancur Global Advisory.",
  },
  {
    title: "6. Modificaciones",
    body: "Betancur Global Advisory podrá actualizar estos términos en cualquier momento. La versión vigente será siempre la publicada en este sitio.",
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#fafaf8] pt-56 pb-32">
      <div className="max-w-3xl mx-auto px-6 md:px-10">
        <p className="text-black/30 text-xs uppercase tracking-[0.3em] mb-6">Legal</p>
        <h1 className="text-[#0a0a0a] text-4xl md:text-6xl font-bold tracking-tight mb-4">
          Términos de uso
        </h1>
        <p className="text-black/40 text-[18px] mb-16">
          Última actualización: julio de 2026.
        </p>

        <div className="flex flex-col gap-10">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="text-[#0f1e3a] text-xl font-bold tracking-tight mb-3">
                {s.title}
              </h2>
              <p className="text-black/50 text-[17px] leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
