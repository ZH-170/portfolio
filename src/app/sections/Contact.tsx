import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Section from "@/app/components/Section";

export default function Contact() {
    return (
        <Section id="contact" index="06" subtitle="command line" title="Connection point">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
      
                {/*<ContactForm />*/}
                <div className="flex flex-col gap-5">
                    <div className="rounded-sm border border-txtclr-d0/30 bg-bgclr-d0 p-6">
                        <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                            {"//"} availability
                        </div>
                        <div className="mt-3 font-sans text-xl font-semibold leading-snug text-accent-d0">
                            Actively seeking a software developer internship.
                        </div>
                        <div className="mt-4 text-[13px] text-txtclr-d0 font-light">
                            CS student with a strong algorithmic foundation and a focus on practical software engineering. Primarily working with Next.js. Open to internship opportunities in production environments that value strong fundamentals and engineering rigor.
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-3">
                        {[
                            { icon: Mail, label: "email", value: "ryanlimzh61@gmail.com", url: "" },
                            { icon: FaGithub, label: "github", value: "ZH-170", url: "https://github.com/ZH-170" },
                            { icon: FaLinkedin, label: "linkedin", value: "Zi Heng Lim", url: "https://www.linkedin.com/in/zi-heng-lim-91978135a/" },
                        ].map(({ icon: Icon, label, value, url }) => (
                            <a
                                key={label}
                                href={url === "" ? undefined : url}
                                target="_blank"
                                className="group flex items-center justify-between rounded-sm border border-txtclr-d0/30 bg-bgclr-d0/40 px-4 py-3 transition hover:border-accent-d1/60"
                            >
                                <div className="flex items-center gap-3">
                                    <Icon className="h-4 w-4 text-accent-d1" />
                                        <span className="text-[11px] uppercase tracking-[0.22em] text-txtclr-d0">
                                            {label}
                                        </span>
                                </div>
                                <span className="font-mono text-[12px] text-foreground/80 transition group-hover:text-matrix">
                                    {value} →
                                </span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
}


