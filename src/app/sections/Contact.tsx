import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Section from "@/app/components/Section";

export default function Contact() {
    return (
        <Section id="contact" index="06" subtitle="command line" title="Let's Connect!">
            <div className="grid gap-8 w-203">
      
                {/*<ContactForm />*/}
                <div className="flex flex-row gap-5">
                    <div className="rounded-sm border border-txtclr-d0/30 bg-bgclr-d0 p-6">
                        <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                            {"//"} availability
                        </div>
                        <div className="mt-3 font-sans text-2xl font-semibold leading-snug text-accent-d0">
                            Actively seeking technology opportunities.
                        </div>
                        <div className="mt-4 text-[15px] text-txtclr-d0 font-normal text-justify">
                            My interests span a wide range of technical fields, so I'm open to opportunities across software engineering, AI, systems programming, cybersecurity, and other areas of technology. I'm also excited by interdisciplinary work that combines computer science with biology or chemistry. If you think I'd be a good fit for your team or project, I'd love to connect and have a chat!
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
                                className="group flex items-center justify-between rounded-sm border border-txtclr-d0/30 bg-bgclr-d0/40 px-4 py-3 transition hover:border-accent-d1/60 w-120"
                            >
                                <div className="flex items-center gap-3">
                                    <Icon className="h-6 w-6 text-accent-d1" />
                                        <span className="text-[15px] uppercase tracking-[0.22em] text-txtclr-d0">
                                            {label}
                                        </span>
                                </div>
                                <span className="font-mono text-[18px] text-foreground/80 transition group-hover:text-matrix">
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


