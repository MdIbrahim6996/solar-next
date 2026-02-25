"use client";

import { useEffect, useState } from "react";

export function useUserCity(initialCity: string) {
    const [city, setCity] = useState(initialCity);
    const [loading, setLoading] = useState(!initialCity);
    useEffect(() => {
        if (!navigator.geolocation) {
            setLoading(false);
            return;
        }

        navigator.geolocation.getCurrentPosition(
            async (position) => {
                try {
                    const { latitude, longitude } = position.coords;

                    const res = await fetch(
                        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
                    );

                    const data = await res.json();
                    const detectedCity = data.city || data.locality;
                    console.log("Geolocation detected city:", detectedCity);
                    if (detectedCity) setCity(detectedCity);
                } catch {
                    // fail silently
                } finally {
                    setLoading(false);
                }
            },
            () => {
                setLoading(false);
            },
            { timeout: 5000 }
        );
    }, []);

    return { city, loading };
}
