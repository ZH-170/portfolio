"use client";

import { motion } from "motion/react";
import { ArrowRight, Dna, Cpu } from "lucide-react";
import { PROFILE } from "@/app/data/data";
import Section from "@/app/components/Section";

const Panel = ({ icon: Icon, label, title, lines, tone }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative p-2"
        >
            <div className="absolute w-full text-center text-xl cursor-default">
                <span className="bg-bgclr-d0 px-3 text-txtclr-d0">
                        {label}
                </span>
            </div>
            <div className="border-2 pb-5 px-10 rounded-sm mt-4 border-txtclr-d0" >
                <div className="pt-5 text-[25px] text-accent-d0 font-semibold">
                    {title}
                </div>
                <ul className="mt-3 space-y-1.5 text-[15px] text-muted-foreground">
                    {lines.map((l) => (
                        <li key={l} className="flex gap-2 font-light">
                            <span className="text-matrix">›</span>
                            <span>{l}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
}

export default function About() {
    return(
        <Section id="about" index="01" subtitle="background" title="From algorithms to Full-stack">
            <div className="flex gap-3 items-center m-3">
                <div className="flex-4">
                    <Panel
                        icon={Dna}
                        label="Input"
                        tone="input"
                        title={PROFILE.transition.input.title}
                        lines={PROFILE.transition.input.lines}
                    />
                </div>
                <div className="text-sm border rounded-xl text-accent-d1 flex px-3 py-1.5 justify-center items-center">
                        compile
                        <ArrowRight className="h-4.5 w-4.5" />
                </div>
                <div className="flex-4">
                    <Panel
                        icon={Cpu}
                        label="Output"
                        tone="output"
                        title={PROFILE.transition.output.title}
                        lines={PROFILE.transition.output.lines}
                    />
                </div>
            </div>
            <div className="flex gap-3">
                <div className="flex-6 border border-txtclr-d0/30 bg-txtclr-d0/5 rounded-sm py-8 px-6 m-3 font-thin">
                    <p className="text-[15px] p-2">
                        {PROFILE.bio}
                    </p>
                    <p className="text-[15px] p-2">
                        Proven under pressure:{" "}
                        <span className="text-accent-d2">1st prize in Hack Node Australia</span>{" "}
                        Now scaling that same velocity into industrial-grade full-stack development
                    </p>
                </div>

                <div className="flex-3 border rounded-sm py-8 px-6 mx-5 my-3">
                    <div className="text-[12px] uppercase opacity-60 mb-3">
                        {'//'} operating_principle
                    </div>
                    <div className="text-[20px] font-semibold text-accent-d0">
                        Logic first. Build. Scale.
                    </div>
                    <div className="mt-5 space-y-2 text-[12px] text-muted-foreground">
                        {["Algorithmic foundations → production code", "Rapid learning velocity", "Rigour under constraints"].map(t => (
                            <div key={t} className="flex items-start gap-2">
                                <span className="text-matrix">◆</span>
                                <span>{t}</span>
                            </div>
                        ))}
                    </div>

                </div>
            </div>


        </Section>
    );
}

