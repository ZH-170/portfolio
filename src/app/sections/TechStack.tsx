"use client";

import { motion, useReducedMotion } from "framer-motion";
import { TECH_STACK } from "@/app/data/data";
import Section from "@/app/components/Section";

const StackColumn = ({ title, items, caption }: { title: string, items: { name: string, level: number }[], caption: string }) => {
  const reduce = useReducedMotion();

  return (
    <div className="rounded-sm border border-txtcolor-d0/20 bg-txtclr-d0/3 p-6">
      <div className="flex items-baseline justify-between">
        <div>
          <div
            className="text-[10px] uppercase tracking-[0.28em] text-accent-d1"
          >
            {caption}
          </div>
          <h3 className="mt-2 font-sans text-xl font-semibold text-accent-d0">
            {title}
          </h3>
        </div>
        <div className="text-[11px] text-txtclr-d0">
          {items.length} modules
        </div>
      </div>

      <ul className="mt-6 space-y-4">
        {items.map((t, i: number) => (
          <li key={t.name}>
            <div className="flex items-baseline justify-between text-[13px]">
              <span className="text-txtclr-d0">{t.name}</span>
              <span className="tabular-nums text-txtclr-d0">{t.level}</span>
            </div>
            <div className="mt-1.5 h-0.75 w-full overflow-hidden bg-border/60">
              <motion.div
                initial={reduce ? false : { width: 0 }}
                whileInView={reduce ? {} : { width: `${t.level}%` }}
                viewport={{ once: false }}
                transition={{ duration: 0.9, delay: 0.05 * i, ease: [0.16, 1, 0.3, 1] }}
                className="h-full bg-accent-d1 shadow-[0_0_12px_rgba(0,255,136,0.55)]"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function TechStack() {
  const professional = TECH_STACK.filter((t) => t.category === "Professional");
  const algorithmic = TECH_STACK.filter((t) => t.category === "Algorithmic");

  return (
    <Section id="stack" index="02" subtitle="tech stack" title="The toolkit">
      <div className="grid gap-6 md:grid-cols-2">
        <StackColumn
          caption="// Professional"
          title="Professional Stack"
          items={professional}
        />
        <StackColumn
          caption="// Algorithmic"
          title="Algorithmic Foundation"
          items={algorithmic}
        />
      </div>
    </Section>
  );
}

