import { Navbar } from "@/components/navbar";
import { CustomCursor } from "@/components/custom-cursor";
import { SmoothScroll } from "@/components/smooth-scroll";
import { Footer } from "@/components/footer";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <SmoothScroll>
        {children}
        <Footer />
      </SmoothScroll>
    </>
  );
}
