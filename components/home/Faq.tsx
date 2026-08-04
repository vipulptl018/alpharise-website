"use client";

import { motion } from "framer-motion";

import { SectionTitle } from "@/components/common/SectionTitle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Container } from "@/components/layout/Container";
import { ds, fadeUp } from "@/lib/design-system";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What services do you provide?",
    answer:
      "We provide enterprise software development, website and mobile app development, AI solutions, cloud architecture, API development, UI/UX design, and ongoing maintenance and support.",
  },
  {
    question: "How long does development take?",
    answer:
      "Timelines depend on scope and complexity. Smaller websites may take a few weeks, while enterprise platforms typically range from several weeks to a few months. We share a clear roadmap after discovery.",
  },
  {
    question: "Do you develop mobile apps?",
    answer:
      "Yes. We build cross-platform Android and iOS applications using Flutter, with robust APIs and cloud infrastructure for production-ready delivery.",
  },
  {
    question: "Do you provide AI solutions?",
    answer:
      "Absolutely. We design and implement generative AI features, chatbots, automation workflows, and intelligent business systems using modern AI stacks.",
  },
  {
    question: "Do you build ERP systems?",
    answer:
      "Yes. We develop custom ERP solutions covering HR, finance, inventory, and operations — tailored to your processes and scalable for growth.",
  },
  {
    question: "Do you offer placement assistance?",
    answer:
      "Through TechRise Academy, we offer placement assistance including live projects, resume building, mock interviews, and career guidance for students.",
  },
  {
    question: "How can we contact you?",
    answer:
      "You can reach us via the contact form, email us at hello@alpharise.in, or book a free consultation. Our team typically responds within one business day.",
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
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          <SectionTitle
            titleId="faq-heading"
            title="Frequently Asked Questions"
            description="Answers to common questions about our services, process, and support."
          />
        </motion.div>

        <motion.div
          className="mt-14 rounded-2xl border border-slate-200/90 bg-white/80 p-2 shadow-[0_12px_40px_-28px_rgba(15,23,42,0.25)] backdrop-blur-xl sm:mt-16 sm:p-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
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
        </motion.div>
      </Container>
    </section>
  );
}
