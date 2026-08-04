import dynamic from "next/dynamic";

import { Hero } from "@/components/home/Hero";
import { TrustedBy } from "@/components/home/TrustedBy";

const WhyChoose = dynamic(() => import("@/components/home/WhyChoose"));
const Services = dynamic(() => import("@/components/home/Services"));
const Products = dynamic(() => import("@/components/home/Products"));
const Academy = dynamic(() => import("@/components/home/Academy"));
const Technology = dynamic(() => import("@/components/home/Technology"));
const Statistics = dynamic(() => import("@/components/home/Statistics"));
const Testimonials = dynamic(() => import("@/components/home/Testimonials"));
const Faq = dynamic(() => import("@/components/home/Faq"));
const ContactCTA = dynamic(() => import("@/components/home/ContactCTA"));

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
