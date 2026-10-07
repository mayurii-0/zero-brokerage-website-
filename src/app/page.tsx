import Hero from "@/components/Hero";
import PropertyShowcase from "@/components/PropertyShowcase";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import AgencyFeatures from "@/components/AgencyFeatures";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-x-hidden">
      <div id="home" className="w-full"><Hero /></div>
      <div id="properties" className="w-full"><PropertyShowcase /></div>
      <div id="stats" className="w-full"><Stats /></div>
      <div id="services" className="w-full"><Services /></div>
      <div id="agency" className="w-full"><AgencyFeatures /></div>
      <div id="about" className="w-full"><AboutSection /></div>
      <div id="contact" className="w-full"><ContactSection /></div>
    </main>
  );
}
