export const metadata = {
  title: "Política de privacidad — Betancur Global Advisory",
};

const sections = [
  {
    title: "1. Responsable del tratamiento",
    body: "Betancur Global Advisory es responsable del tratamiento de los datos personales que los usuarios proporcionan a través de este sitio web, en particular mediante el formulario de contacto. Para cualquier consulta relacionada con el tratamiento de sus datos, puede escribir a ceo@betancurglobaladvisory.com.",
  },
  {
    title: "2. Datos que recopilamos",
    body: "Recopilamos únicamente los datos que usted nos proporciona voluntariamente al completar el formulario de contacto: nombre, correo electrónico, empresa, y el contenido del mensaje enviado.",
  },
  {
    title: "3. Finalidad del tratamiento",
    body: "Los datos suministrados se utilizan exclusivamente para responder a su solicitud de información o consultoría, y para gestionar la relación comercial que se derive de ese contacto.",
  },
  {
    title: "4. Conservación de datos",
    body: "Conservamos su información únicamente durante el tiempo necesario para atender su solicitud, salvo que exista una relación comercial vigente que requiera un período de conservación mayor.",
  },
  {
    title: "5. Terceros",
    body: "Sus datos no se venden ni se comparten con terceros, salvo con los proveedores tecnológicos estrictamente necesarios para el funcionamiento del formulario de contacto de este sitio.",
  },
  {
    title: "6. Sus derechos",
    body: "Usted puede solicitar en cualquier momento el acceso, rectificación o eliminación de sus datos personales escribiendo a ceo@betancurglobaladvisory.com.",
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#fafaf8] pt-56 pb-32">
      <div className="max-w-3xl mx-auto px-6 md:px-10">
        <p className="text-black/30 text-xs uppercase tracking-[0.3em] mb-6">Legal</p>
        <h1 className="text-[#0a0a0a] text-4xl md:text-6xl font-bold tracking-tight mb-4">
          Política de privacidad
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
