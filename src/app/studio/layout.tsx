// The Studio manages its own full-screen layout — no navbar or cursor here
export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return <div style={{ position: "fixed", inset: 0, zIndex: 9999 }}>{children}</div>;
}
