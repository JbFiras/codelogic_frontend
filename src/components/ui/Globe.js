"use client";

import dynamic from "next/dynamic";
import React from "react";
const World = dynamic(() => import("@/components/ui/GlobeLayout").then((mod) => mod.World), { ssr: false });

export default function Globe() {
    const globeConfig = {
        pointSize: 1,
        atmosphereColor: "#88ccee",
        showAtmosphere: true,
        atmosphereAltitude: 0.1,
        polygonColor: "rgba(50, 150, 200, 0.5)",
        globeColor: "#1d072e",
        emissive: "#000000",
        emissiveIntensity: 0.2,
        shininess: 0.8,
        arcTime: 3000,
        arcLength: 1.0,
        rings: 2,
        maxRings: 5,
        ambientLight: "#ffffff",
        directionalLeftLight: "#ffdddd",
        directionalTopLight: "#ddddff",
        pointLight: "#ffffff",
    };

    const arcsData = [
        {
            startLat: 40.7128, // New York
            startLng: -74.006,
            endLat: 34.0522, // Los Angeles
            endLng: -118.2437,
            color: "#38F1B9", // Updated color
            arcAlt: 0.3,
            order: 1,
        },
        {
            startLat: 48.8566, // Paris
            startLng: 2.3522,
            endLat: 35.6895, // Tokyo
            endLng: 139.6917,
            color: "#00ff00", // Green line
            arcAlt: 0.3,
            order: 2,
        },
        {
            startLat: 36.8065, // Tunis
            startLng: 10.1815,
            endLat: 40.73061, // New York
            endLng: -73.935242,
            color: "#00ff00", // Green line
            arcAlt: 0.3,
            order: 3,
        },
        {
            startLat: 51.5074, // London
            startLng: -0.1278,
            endLat: 36.8065, // Tunis
            endLng: 10.1815,
            color: "#38F1B9", // Updated color
            arcAlt: 0.4,
            order: 4,
        },
        {
            startLat: -33.8688, // Sydney
            startLng: 151.2093,
            endLat: 1.3521, // Singapore
            endLng: 103.8198,
            color: "#00ff00", // Green line
            arcAlt: 0.5,
            order: 5,
        },
        {
            startLat: 19.4326, // Mexico City
            startLng: -99.1332,
            endLat: -34.6037, // Buenos Aires
            endLng: -58.3816,
            color: "#38F1B9", // Updated color
            arcAlt: 0.4,
            order: 6,
        },
        {
            startLat: 39.9042, // Beijing
            startLng: 116.4074,
            endLat: 55.7558, // Moscow
            endLng: 37.6173,
            color: "#00ff00", // Green line
            arcAlt: 0.4,
            order: 7,
        },
        {
            startLat: -22.9068, // Rio de Janeiro
            startLng: -43.1729,
            endLat: -33.4489, // Santiago
            endLng: -70.6693,
            color: "#38F1B9", // Updated color
            arcAlt: 0.3,
            order: 8,
        },
        {
            startLat: 28.6139, // New Delhi
            startLng: 77.209,
            endLat: 35.6895, // Tokyo
            endLng: 139.6917,
            color: "#00ff00", // Green line
            arcAlt: 0.5,
            order: 9,
        },
        {
            startLat: 40.7128, // New York
            startLng: -74.006,
            endLat: 48.8566, // Paris
            endLng: 2.3522,
            color: "#38F1B9", // Updated color
            arcAlt: 0.5,
            order: 10,
        },
        {
            startLat: -26.2041, // Johannesburg
            startLng: 28.0473,
            endLat: -1.2921, // Nairobi
            endLng: 36.8219,
            color: "#00ff00", // Green line
            arcAlt: 0.4,
            order: 11,
        },
        {
            startLat: 31.2304, // Shanghai
            startLng: 121.4737,
            endLat: 37.7749, // San Francisco
            endLng: -122.4194,
            color: "#38F1B9", // Updated color
            arcAlt: 0.6,
            order: 12,
        },
        {
            startLat: 52.5200, // Berlin
            startLng: 13.4050,
            endLat: 60.1695, // Helsinki
            endLng: 24.9354,
            color: "#38F1B9", // Updated color
            arcAlt: 0.3,
            order: 13,
        },
        {
            startLat: -35.2820, // Canberra
            startLng: 149.1287,
            endLat: 55.7558, // Moscow
            endLng: 37.6173,
            color: "#38F1B9", // Updated color
            arcAlt: 0.7,
            order: 14,
        },
    ];


    return (
        <div style={{ width: "100vw", height: "100vh" }}>
            <World globeConfig={globeConfig} data={arcsData} />
        </div>
    );
}
