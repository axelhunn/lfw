import {
  ScrollTabs,
  ScrollTabsList,
  ScrollTabsTrigger,
} from "@/components/ui/scroll-tabs";
import { Care, Identity, Landing, mock, Story } from "@/prototype/0";

const Home = () => {
  return (
    <main className="min-h-dvh bg-background text-foreground">
      <ScrollTabs defaultValue="landing">
        <ScrollTabsList aria-label="Passport sections">
          {mock.sections.map((s) => (
            <ScrollTabsTrigger key={s.id} value={s.id}>
              {s.label}
            </ScrollTabsTrigger>
          ))}
        </ScrollTabsList>

        {/* Sections */}
        <div className="max-w-screen-sm mx-auto px-4 pt-6 pb-24">
          <Landing id="landing" nextHref="#identity" />
          <Story id="story" />
          <Identity id="identity" nextHref="#story" />
          <Care id="care" />

          {/* Remaining placeholders */}
          {mock.sections.slice(4).map((s) => (
            <section key={s.id} id={s.id} className="scroll-mt-20 py-6">
              <div className="h-[70vh] rounded-2xl border grid place-content-center text-center">
                <h2 className="text-xl font-semibold">{s.title}</h2>
              </div>
            </section>
          ))}
        </div>
      </ScrollTabs>
    </main>
  );
};

export default Home;
