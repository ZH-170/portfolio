"use client";

import { useState } from "react";
import { jetbrains_mono } from "@/app/ui/fonts";

const WORKSPACES = [
  { n: 0, href: "#top",         label: "~" },
  { n: 1, href: "#about",       label: "about" },
  { n: 2, href: "#stack",       label: "stack" },
  { n: 3, href: "#projects",    label: "projects" },
  { n: 4, href: "#credentials", label: "creds" },
  { n: 5, href: "#timeline",    label: "timeline" },
  { n: 6, href: "#contact",     label: "contact" },
];

export default function TopBar() {
    
    const [active, setActive] = useState<number>(0);

    return (
        <header className="sticky top-0 z-40 border-b border-matrix/30 bg-obsidian">
            <div className={`${jetbrains_mono.className} flex items-row`}>
        
                <div className="flex items-center gap-0 px-4 text-[18px]">
                    <span className="text-matrix">[ryan:portfolio]</span>
                </div>
                
                <nav className="flex items-stretch">
                    {WORKSPACES.map((ws) => (
                        <a
                            key={ws.n}
                            href={ws.href}
                            onClick={() => {setActive(ws.n)}}
                            className="flex items-center gap-1.5 px-3 py-0 text-[11px]"
                        >
                            {active === ws.n && (
                                <span className="text-[18px]">{ws.n}:{ws.label}*</span>
                            )}
                            {active !== ws.n && (
                                <span className="text-[18px] opacity-60">{ws.n}:{ws.label}</span>
                            )}
                        </a>

                    ))}
                </nav>

            </div>
        </header>
    );
}

//               className={`flex items-center gap-1.5 border-r border-border/50 px-3 py-0 text-[11px] transition
//                 ${active === ws.n
//                   ? "bg-matrix text-ink font-semibold"
//                   : "text-muted-foreground hover:bg-matrix/10 hover:text-matrix"
//                 }`}





// export default function TopBar() {
//   const [time, setTime] = useState("");
//   const [active, setActive] = useState("1");
//
//   useEffect(() => {
//     const tick = () => {
//       const d = new Date();
//       setTime(
//         d.toLocaleTimeString("en-AU", {
//           hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false,
//         })
//       );
//     };
//     tick();
//     const id = setInterval(tick, 1000);
//     return () => clearInterval(id);
//   }, []);
//
//   return (
//     /* i3bar / polybar style — full-width, no max-w, no blur, hard border */
//     <header className="sticky top-0 z-40 border-b border-matrix/30 bg-obsidian">
//       <div className="flex items-stretch justify-between divide-x divide-border/60">
//
//         {/* Left: hostname */}
//         <div className="flex items-center gap-0 px-4 text-[11px]">
//           <span className="text-matrix">arch</span>
//           <span className="text-muted-foreground">@</span>
//           <span className="text-foreground">portfolio</span>
//           <span className="ml-2 text-muted-foreground">|</span>
//           <span className="ml-2 text-[10px] text-muted-foreground uppercase tracking-widest">i3wm</span>
//         </div>
//
//         {/* Centre: workspace tags */}
//         <nav className="flex items-stretch" aria-label="workspaces">
//           {WORKSPACES.map((ws) => (
//             <a
//               key={ws.n}
//               href={ws.href}
//               onClick={() => setActive(ws.n)}
//               className={`flex items-center gap-1.5 border-r border-border/50 px-3 py-0 text-[11px] transition
//                 ${active === ws.n
//                   ? "bg-matrix text-ink font-semibold"
//                   : "text-muted-foreground hover:bg-matrix/10 hover:text-matrix"
//                 }`}
//             >
//               <span className="text-[10px] opacity-60">{ws.n}</span>
//               <span>{ws.label}</span>
//             </a>
//           ))}
//         </nav>
//
//         {/* Right: status modules — polybar style */}
//         <div className="ml-auto flex items-stretch divide-x divide-border/60 text-[11px]">
//           <div className="flex items-center gap-1.5 px-3 text-muted-foreground">
//             <span className="text-matrix">◆</span>
//             <span>SYD</span>
//           </div>
//           <div className="flex items-center px-3 tabular-nums text-foreground">
//             {time}
//           </div>
//         </div>
//
//       </div>
//     </header>
//   );
// }
//
