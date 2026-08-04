"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

import { SectionTitle } from "@/components/common/SectionTitle";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Container } from "@/components/layout/Container";
import { ds, fadeUp, staggerItem, staggerList } from "@/lib/design-system";
import { cn } from "@/lib/utils";

type Testimonial = {
  name: string;
  company: string;
  initials: string;
  feedback: string;
  accent: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Ananya Sharma",
    company: "Nova Retail Pvt. Ltd.",
    initials: "AS",
    feedback:
      "Alpharise delivered a scalable ERP that streamlined our operations across finance and inventory. The team was professional, responsive, and deeply technical.",
    accent: "from-sky-500 to-cyan-400",
  },
  {
    name: "Rahul Mehta",
    company: "Orbit Fintech",
    initials: "RM",
    feedback:
      "Their AI automation reduced our manual workflows significantly. Communication was clear and delivery timelines were met without compromising quality.",
    accent: "from-slate-700 to-slate-500",
  },
  {
    name: "Priya Nair",
    company: "BrightPath Startups",
    initials: "PN",
    feedback:
      "We needed a modern Next.js website with strong SEO foundations. Alpharise exceeded expectations with clean UI and excellent performance.",
    accent: "from-emerald-500 to-teal-400",
  },
  {
    name: "Vikram Desai",
    company: "CloudNest Solutions",
    initials: "VD",
    feedback:
      "From architecture to deployment on AWS, everything was handled with enterprise-level care. Highly recommend for cloud-native builds.",
    accent: "from-amber-500 to-orange-400",
  },
  {
    name: "Sneha Patil",
    company: "TechRise Academy Graduate",
    initials: "SP",
    feedback:
      "The training was practical and industry-focused. Live projects and mock interviews helped me land my first full-stack developer role.",
    accent: "from-cyan-600 to-sky-400",
  },
  {
    name: "Arjun Kapoor",
    company: "Summit Logistics",
    initials: "AK",
    feedback:
      "Alpharise built our mobile and backend systems with reliability in mind. Ongoing support has been outstanding — a true technology partner.",
    accent: "from-sky-600 to-blue-400",
  },
];

function StarRating() {
  return (
    <div className="flex items-center gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className="size-3.5 fill-amber-400 text-amber-400"
          strokeWidth={0}
          aria-hidden
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className={cn(ds.section, ds.sectionWhite)}
    >
      <div aria-hidden className={ds.divider} />

      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          <SectionTitle
            titleId="testimonials-heading"
            title="What Our Clients Say"
            description="Trusted by startups, enterprises and students."
          />
        </motion.div>

        <motion.ul
          className={cn(ds.grid, "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3")}
          variants={staggerList}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {testimonials.map((item) => (
            <motion.li key={item.name} variants={staggerItem} className="h-full">
              <Card className={ds.card}>
                <CardHeader className={ds.cardHeader}>
                  <div className="flex items-center gap-3">
                    <Avatar
                      size="lg"
                      className="size-12 after:border-slate-200/80"
                    >
                      <AvatarFallback
                        className={cn(
                          "bg-gradient-to-br text-sm font-semibold text-white",
                          item.accent
                        )}
                      >
                        {item.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="min-w-0">
                      <p className="font-heading text-sm font-semibold text-slate-950">
                        {item.name}
                      </p>
                      <p className="truncate text-xs text-slate-500">
                        {item.company}
                      </p>
                    </div>
                  </div>
                  <StarRating />
                </CardHeader>
                <CardContent className={ds.cardContent}>
                  <CardDescription className={ds.cardDescription}>
                    &ldquo;{item.feedback}&rdquo;
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.li>
          ))}
        </motion.ul>
      </Container>
    </section>
  );
}
