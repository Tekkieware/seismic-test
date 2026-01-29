import BuiltForYou from "@/components/landing page/built-for-you";
import FAQs from "@/components/landing page/faqs";
import Hero from "@/components/landing page/hero";
import HowItWorks from "@/components/landing page/how-it-works";
import Navbar from "@/components/shared/navbar";
import PlatformHighlights from "@/components/landing page/platform-highlights";
import PopularStores from "@/components/landing page/popular-stores";
import StartNow from "@/components/landing page/start-now";
import Footer from "@/components/shared/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <Hero />
      <PopularStores />
      <HowItWorks />
      <PlatformHighlights />
      <BuiltForYou />
      <FAQs />
      <StartNow />
      <Footer />
    </main>
  );
}
