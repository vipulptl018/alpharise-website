
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { LastUpdated } from "@/components/shared/LastUpdated";
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
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Contact",
  description: "Contact ALPHARISE INNOVATION PRIVATE LIMITED — registered office details, email, working hours, map, and contact form.",
  path: "/contact",
});

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
    q: "Do you work with startups and growing businesses?",
    a: "Yes. We partner with startups, SMEs, and larger organizations.",
  },
];

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Contact" }]} />
      <LastUpdated date="August 4, 2026" />
      <PageHero
        eyebrow="Contact"
        title="Let's Discuss Your Next Project"
        description="Reach out for software development, AI solutions, cloud platforms, or academy programs."
      />

      <ContactFormSection />

      <section className={cn(ds.section, ds.sectionWhite)}>
        <div aria-hidden className={ds.divider} />
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className={cn(ds.surface, ds.surfacePad)}>
              <h2 className="mb-6 text-center font-heading text-3xl font-semibold tracking-tight text-[#0F172A] sm:text-4xl">
                FAQ
              </h2>
              <Accordion>
                {faqs.map((item, index) => (
                  <AccordionItem
                    key={item.q}
                    value={`contact-faq-${index}`}
                    className="px-1"
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
          </div>
        </Container>
      </section>

      <PageCTA
        title="Prefer email support?"
        description="For account, billing, or platform help, use our Support page or admin@alphariseinnovation.com."
        primaryLabel="Visit Support"
        primaryHref="/support"
        secondaryLabel="View Services"
        secondaryHref="/services"
        muted={false}
      />
    </>
  );
}
