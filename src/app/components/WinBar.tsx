/**
 * Linux/i3-style window title bar.
 *
 * Props:
 *   title  — window title string (e.g. "~/portfolio — zsh")
 *   pid    — optional process id badge
 *   accent — "matrix" | "quantum" | "default"
 */

import { useReducedMotion, motion } from "motion/react";
import { TERMINAL_BOOT } from "@/app/data/data";

export default function WinBar() {

    const reduce = useReducedMotion();
    return (
        <motion.div 
            initial={reduce ? false : { opacity: 0, x: 24 }}
            animate={reduce ? {} : { opacity: 1, x: 0 }}
            transition={{duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-130 h-1 p-2"
        >
            
            <div className="absolute w-full text-center text-xl cursor-default">
                <span className="bg-bgclr-d0 px-3 text-accent-d2">Results</span>
            </div>
            <div className="border-2 rounded-sm mt-4 border-accent-d2/60" >
                <div className="flex flex-col py-5 px-5">
                    {TERMINAL_BOOT.map((line, i) => (
                        <motion.div
                            key={i}
                            initial={reduce ? false : { opacity: 0, y:6 }}
                            animate={reduce ? {} : { opacity: 1, y: 0 }}
                            transition={{ duration: 0.35, delay: 0.7 + i * 0.18 }}
                            className="font-light"
                        >
                            {line.startsWith('$') ? (
                                <span className="text-accent-d1">{line}</span>
                            ) : (
                                <span className="flex gap-3">
                                    <span className="text-accent-d1">{line.slice(0, 4)}</span>
                                    {line.slice(4)}
                                </span>                                
                            )}
                        </motion.div>
                    ))}

                    <motion.div
                        initial={reduce ? false : { opacity: 0 }}
                        animate={reduce ? {} : { opacity: 1 }}
                        transition={{ delay: 1.9 }}
                        className="mt-4 flex items-center gap-2 font-light"
                    >
                        <span className="text-accent-d1">guest@portfolio</span>
                        <span>:~$</span>
                        <span>
                            ready
                            <motion.span 
                                animate={{ opacity: [1, 1, 0, 0] }}
                                transition={{
                                    duration: 1.2,
                                    times: [0, 0.5, 0.5, 1],
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                                className="w-0.5 h-5 bg-white">
                            .
                            </motion.span>
                        </span>

                    </motion.div>

                </div>
            </div>
            
        </motion.div>
    );
}
