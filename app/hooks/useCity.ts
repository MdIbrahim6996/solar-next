"use client";

import { useEffect, useState } from "react";

export default function useCity() {
    const [city, setCity] = useState<string | null>(null);

    useEffect(() => {
        async function getCity() {
            try {
                // First attempt (fastest + free)
                const res = await fetch("https://ipwho.is/");
                const data = await res.json();
                if (data.success !== false && data.city) {
                    setCity(data.city);
                    return;
                }
            } catch {}

            try {
                // Fallback
                const res2 = await fetch("https://api.ipapi.is/?q=myip");
                const data2 = await res2.json();
                setCity(data2.location?.city || null);
            } catch {
                setCity(null);
            }
        }

        getCity();
    }, []);

    return city;
}
