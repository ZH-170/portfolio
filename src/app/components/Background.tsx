export default function Background() {
    return(
        <div className="
            absolute inset-0 
            -z-10 
            bg-radial-[at_50%_20%] from-bgclr-d1 from-10% to-bgclr-d0 to-30%
        ">
            <div 
                className="
                    absolute inset-0
                    bg-[linear-gradient(to_right,#191b18_1px,transparent_1px),linear-gradient(to_bottom,#191b18_1px,transparent_1px)]
                    bg-size-[48px_48px]
                "
            />
        </div>
    );
}

// bgclr-d0 = #191b18

// dotted
                    // bg-[radial-gradient(#ffffff15_1px,transparent_1px)]
// grid
                    // bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)]
