import { Hero } from "@/components/home/Hero";
import { TrustedBy } from "@/components/home/TrustedBy";
import WhyChoose from "@/components/home/WhyChoose";
import Services from "@/components/home/Services";
import Products from "@/components/home/Products";
import Academy from "@/components/home/Academy";
import Technology from "@/components/home/Technology";
import Statistics from "@/components/home/Statistics";
import Testimonials from "@/components/home/Testimonials";
import Faq from "@/components/home/Faq";
import ContactCTA from "@/components/home/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <WhyChoose />
      <Services />
      <Products />
      <Academy />
      <Technology />
      <Statistics />
      <Testimonials />
      <Faq />
      <ContactCTA />
    </>
  );
}
