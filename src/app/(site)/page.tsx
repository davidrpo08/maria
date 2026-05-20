import { Hero } from "@/components/hero";
import { Stats } from "@/components/stats";
import { Trajectory } from "@/components/trajectory";
import { Projects } from "@/components/projects";
import { Services } from "@/components/services";
import { Contact } from "@/components/contact";

export const metadata = {
  title: "Betancur Global Advisory",
  description: "Asesoría estratégica en finanzas, mercadeo corporativo y consultoría para organismos internacionales.",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <Trajectory />
      <Projects />
      <Services />
      <Contact />
    </main>
  );
}
