import React from 'react';
import { useRouter } from 'next/router';

export function Logo({ className = "text-2xl" }) {
    const router = useRouter();

    return (
        <button onClick={() => router.push('/')}>
      <span className={`font-display font-bold ${className}`}>
        <span className="text-white">CODE</span>
        <span className="text-[#38F1B9]">LOGIC</span>
      </span>
        </button>
    );
}