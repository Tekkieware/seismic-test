import Hero from "@/components/landing page/hero";
import Navbar from "@/components/landing page/navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-6 bg-background">
      <Navbar />
      <Hero />
    </main>
  );
}
