// hooks/useUserLocation.ts
"use client";

import { useEffect, useState } from "react";

interface LocationData {
  city?: string;
  region?: string;
  country?: string;
  error?: string;
}

export function useUserLocation() {
  const [location, setLocation] = useState<LocationData>({});

  useEffect(() => {
    if (!navigator.geolocation) {
      setLocation({ error: "Geolocation not supported" });
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords;
        try {
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
          );
          const data = await res.json();

          setLocation({
            city:
              data.address.city || data.address.town || data.address.village,
            region: data.address.state,
            country: data.address.country_code?.toUpperCase(),
          });
        } catch {
          setLocation({ error: "Failed to fetch location" });
        }
      },
      () => setLocation({ error: "Permission denied" })
    );
  }, []);

  return location;
}
