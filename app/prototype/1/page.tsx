import {
  ScrollTabs,
  ScrollTabsContent,
  ScrollTabsList,
  ScrollTabsTrigger,
} from "@/components/ui/scroll-tabs";
import { Community, Discover, Hero, Identity, Logo, mock } from "@/prototype/1";

export default function Prototype2() {
  return (
    <main>
      <ScrollTabs defaultValue="home">
        <ScrollTabsContent
          value="home"
          className="flex items-center justify-center p-4"
          aria-label={mock.home.title}
        >
          <Logo />
        </ScrollTabsContent>

        <ScrollTabsList className="top-0">
          <ScrollTabsTrigger value="home">{mock.home.label}</ScrollTabsTrigger>
          <ScrollTabsTrigger value="discover">
            {mock.discover.label}
          </ScrollTabsTrigger>
          <ScrollTabsTrigger value="identity">
            {mock.identity.label}
          </ScrollTabsTrigger>
          <ScrollTabsTrigger value="community">
            {mock.community.label}
          </ScrollTabsTrigger>
        </ScrollTabsList>

        <Hero />

        <ScrollTabsContent value="discover" aria-label={mock.discover.title}>
          <Discover />
        </ScrollTabsContent>
        <ScrollTabsContent value="identity" aria-label={mock.identity.title}>
          <Identity />
        </ScrollTabsContent>
        <ScrollTabsContent value="community" aria-label={mock.community.title}>
          <Community />
        </ScrollTabsContent>
      </ScrollTabs>
    </main>
  );
}
