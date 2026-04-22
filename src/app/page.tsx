import Image from "next/image";
import TopBar from "./components/TopBar";

export default function Home() {
    return (
        <div className="dark relative min-h-screen bg-background text-foreground">
            <TopBar />
            {/*<Footer /> */}
        </div>
    );
}
