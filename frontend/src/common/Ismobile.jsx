import { useEffect, useState } from "react";

export default function useIsMobile(breakpoint = 768) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(`(max-width: ${breakpoint}px)`);

        setIsMobile(media.matches);

        const handler = (e) => setIsMobile(e.matches);
        media.addEventListener("change", handler);

        return () => media.removeEventListener("change", handler);
    }, [breakpoint]);

    return isMobile;
}
