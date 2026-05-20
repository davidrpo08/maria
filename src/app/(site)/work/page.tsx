import { Projects } from "@/components/projects";

export const metadata = {
  title: "Casos — Betancur Corporative Services",
};

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-[#fafaf8] pt-56">
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-4">
        <p className="text-black/30 text-xs uppercase tracking-[0.3em] mb-6">Casos seleccionados</p>
        <h1 className="text-[#0a0a0a] text-5xl md:text-7xl font-bold tracking-tight">
          Nuestros casos
        </h1>
        <p className="text-black/40 text-[18px] mt-4 max-w-sm leading-relaxed">
          Engagements seleccionados en consultoría financiera, comercial y organismos internacionales.
        </p>
      </div>
      <Projects />
    </main>
  );
}
