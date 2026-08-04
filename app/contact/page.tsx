import type { Metadata } from "next";

import { PageHero } from "@/components/shared/PageHero";
import { PageCTA } from "@/components/shared/PageCTA";
import { ContactFormSection } from "@/components/shared/ContactFormSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Container } from "@/components/layout/Container";
import { ds } from "@/lib/design-system";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact ALPHARISE Innovation Private Limited for software projects, AI solutions, cloud delivery, or TechRise Academy.",
};

const faqs = [
  {
    q: "How soon will you respond?",
    a: "We typically respond within one business day.",
  },
  {
    q: "Can we book a consultation?",
    a: "Yes. Share your requirements through the form and request a free consultation.",
  },
  {
    q: "Do you work with startups and enterprises?",
    a: "Yes. We partner with startups, SMEs, and large organizations.",
  },
  {
    q: "Where are you located?",
    a: "We operate from India and collaborate with clients remotely and on-site as needed.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Discuss Your Next Project"
        description="Reach out for software development, AI solutions, cloud platforms, or academy programs."
      />

      <ContactFormSection />

      <section className={cn(ds.section, ds.sectionMuted)}>
        <div aria-hidden className={ds.divider} />
        <Container size="md">
          <h2 className="font-heading text-center text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            FAQ
          </h2>
          <div className="mt-10 rounded-2xl border border-slate-200/90 bg-white/80 p-2 sm:p-4">
            <Accordion>
              {faqs.map((item, index) => (
                <AccordionItem
                  key={item.q}
                  value={`contact-faq-${index}`}
                  className="px-3 sm:px-4"
                >
                  <AccordionTrigger className="py-4 text-left font-semibold hover:no-underline">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-sm leading-7 text-slate-600">
                    <p>{item.a}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Container>
      </section>

      <PageCTA
        title="Prefer a guided conversation?"
        description="Book a free consultation and we'll help you map the right approach."
        primaryLabel="Book Free Consultation"
        primaryHref="/contact"
        secondaryLabel="View Services"
        secondaryHref="/services"
        muted={false}
      />
    </>
  );
}
