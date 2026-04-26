import Image from "next/image";
import TopBar from "./components/TopBar";
import Hero from "@/app/sections/Hero";
import About from "@/app/sections/About";
import TechStack from "@/app/sections/TechStack";
import Projects from "@/app/sections/Projects";
import Achievements from "@/app/sections/Achievements";
import Timeline from "@/app/sections/Timeline";
import Contact from "@/app/sections/Contact";

export default function Home() {
    return (
        <div className="dark relative min-h-screen bg-bgclr-d0 text-txtclr-d0">
            <TopBar />
            <main>
                <Hero />
                <About />
                <TechStack />
                <Projects />
                <Achievements />
                <Timeline />
                <Contact />
            </main>
            {/*<Footer /> */}
        </div>
    );
}
