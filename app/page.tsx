import { Identity, Landing } from "@/sections";

const SECTIONS = [
  { id: "landing", label: "Landing", title: "Landing" },
  { id: "identity", label: "Identity", title: "Identity & Proof" },
  { id: "story", label: "Story", title: "Story & Media" },
  { id: "care", label: "Care", title: "Care & Repair" },
  { id: "co-create", label: "Co-create", title: "Co-create (3D Configurator)" },
  { id: "circular", label: "Circular", title: "Circular Services" },
  { id: "community", label: "Community", title: "Community & Rewards" },
] as const;

const Home = () => (
  <main className="min-h-dvh bg-background text-foreground">
    {/* Sticky top tabs (anchor links) */}
    <nav
      className="sticky top-0 z-50 bg-background/85 backdrop-blur border-b"
      aria-label="Passport sections"
    >
      <div className="max-w-screen-sm mx-auto px-3">
        <ul className="flex gap-2 overflow-x-auto py-2">
          {SECTIONS.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="whitespace-nowrap rounded-full border px-3 py-1 text-sm hover:bg-foreground hover:text-background transition-colors"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>

    {/* Sections */}
    <div className="max-w-screen-sm mx-auto px-4 pt-6 pb-24">
      <Landing id="landing" nextHref="#identity" />
      <Identity id="identity" nextHref="#story" />

      {/* Remaining placeholders */}
      {SECTIONS.slice(2).map((s) => (
        <section key={s.id} id={s.id} className="scroll-mt-20 py-6">
          <div className="h-[70vh] rounded-2xl border grid place-content-center text-center">
            <h2 className="text-xl font-semibold">{s.title}</h2>
          </div>
        </section>
      ))}
    </div>
  </main>
);

export default Home;
