import Hero from "@/components/Hero";
import PropertyShowcase from "@/components/PropertyShowcase";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import AgencyFeatures from "@/components/AgencyFeatures";
import AboutSection from "@/components/AboutSection";
import SubscriptionSection from "@/components/SubscriptionSection";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-x-hidden">
      <div id="home" className="w-full"><Hero /></div>
      <ScrollReveal yOffset={20}><div id="properties" className="w-full"><PropertyShowcase /></div></ScrollReveal>
      <ScrollReveal yOffset={20}><div id="stats" className="w-full"><Stats /></div></ScrollReveal>
      <ScrollReveal yOffset={20}><div id="services" className="w-full"><Services /></div></ScrollReveal>
      <ScrollReveal yOffset={20}><div id="agency" className="w-full"><AgencyFeatures /></div></ScrollReveal>
      <ScrollReveal yOffset={20}><div id="about" className="w-full"><AboutSection /></div></ScrollReveal>
      <ScrollReveal yOffset={20}><div id="pricing" className="w-full"><SubscriptionSection /></div></ScrollReveal>
    </main>
  );
}
