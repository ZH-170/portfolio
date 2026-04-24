"use client";

import { useRef, useEffect, useState } from "react";

export default function Scroll() {
    const [active, setActive] = useState("home");

    const sectionRefs = { 
        hero: useRef(null),
        about: useRef(null),
        tech_stack: useRef(null),
        projects: useRef(null),
        achievements: useRef(null),
        timeline: useRef(null),
        contact: useRef(null),
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                    }
                });
            },
            { threshold: 0.6 }
        );

        Object.values(sectionRefs).forEach((ref) => {
            if (ref.current) observer.unobserve(ref.current);
        });
    
        return () => {
            Object.values(sectionRefs).forEach((ref) => {
                if (ref.current) observer.unobserve(ref.current);
            });
        };
    }, []);

    console.log(active);

    return(
    <></>);
}

