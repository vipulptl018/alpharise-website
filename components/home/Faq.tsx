import { FadeIn } from "@/components/common/motion";
import { SectionTitle } from "@/components/common/SectionTitle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Container } from "@/components/layout/Container";
import { ds } from "@/lib/design-system";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What services do you provide?",
    answer:
      "We provide software development, website development, Android mobile application development (Flutter + Node.js), AI solutions, cloud solutions, enterprise software, TechRise Academy training, and a Social Voice Communication Platform for Android that is preparing for public release.",
  },
  {
    question: "How long does development take?",
    answer:
      "Timelines depend on scope and complexity. Smaller websites may take a few weeks, while enterprise platforms typically range from several weeks to a few months. We share a clear roadmap after discovery.",
  },
  {
    question: "Do you develop mobile apps?",
    answer:
      "Yes. We develop Android applications using Flutter with a Node.js backend for secure APIs and production-ready delivery.",
  },
  {
    question: "Do you provide AI solutions?",
    answer:
      "Yes. We design and implement generative AI features, chatbots, automation workflows, and intelligent business systems using modern AI stacks.",
  },
  {
    question: "Do you build custom business software?",
    answer:
      "Yes. We develop custom software covering operations, finance workflows, inventory, and related business processes — tailored to your requirements and scalable for growth.",
  },
  {
    question: "Do you offer placement assistance?",
    answer:
      "Through TechRise Academy, we offer placement assistance including live projects, resume building, mock interviews, and career guidance. Placement assistance does not guarantee employment.",
  },
  {
    question: "Where can I read Social Voice platform documentation?",
    answer:
      "Complete feature documentation for the Social Voice Communication Platform Android app—including registration, OTP, wallets, coins, gifting, host/creator programs, withdrawals, and safety tools—is published at /social-voice. The Android app is preparing for public release; availability will be announced on this website and Instagram.",
  },
  {
    question: "How can we contact you?",
    answer:
      "You can reach us via the contact form, email us at admin@alphariseinnovation.com, or call +91 9168020295. Our team typically responds within one business day during Monday–Saturday, 10:00 AM – 7:00 PM (IST).",
  },
  {
    question: "Do you provide maintenance?",
    answer:
      "Yes. We offer continuous monitoring, updates, performance optimization, security patches, and technical support to keep your systems reliable.",
  },
  {
    question: "Can you develop custom software?",
    answer:
      "Yes. Custom software is our core strength. We engineer solutions around your business requirements with secure architecture and modern tech stacks.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We work with React, Next.js, TypeScript, Tailwind CSS, Python, FastAPI, Django, Node.js, PostgreSQL, MySQL, MongoDB, AWS, Docker, and AI platforms like OpenAI and LangChain.",
  },
] as const;

export default function Faq() {
  return (
    <section
      aria-labelledby="faq-heading"
      className={cn(ds.section, ds.sectionMuted)}
    >
      <div aria-hidden className={ds.divider} />

      <Container size="md">
        <FadeIn>
          <SectionTitle
            titleId="faq-heading"
            title="Frequently Asked Questions"
            description="Answers to common questions about our services, process, and support."
          />
        </FadeIn>

        <FadeIn
          className={cn("mt-12", ds.accordionShell)}
          amount={0.2}
        >
          <Accordion className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`item-${index}`}
                className="border-slate-200/80 px-3 sm:px-4"
              >
                <AccordionTrigger className="py-4 text-[0.9375rem] font-semibold text-slate-900 hover:no-underline sm:text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-sm leading-7 text-slate-600 sm:text-[0.9375rem]">
                  <p>{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </Container>
    </section>
  );
}
