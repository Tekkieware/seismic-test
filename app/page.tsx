import Hero from "@/components/landing page/hero";
import Navbar from "@/components/landing page/navbar";
import PopularStores from "@/components/landing page/popular-stores";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-6 bg-background">
      <Navbar />
      <Hero />
      <PopularStores />
    </main>
  );
}
