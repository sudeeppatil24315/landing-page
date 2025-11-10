'use client'

import { useEffect, useState } from "react";

// Updated stats for new project launch
const stats = [
  { value: 3, suffix: "+", label: "Active Users", description: "Early adopters" },
  { value: 7, suffix: "+", label: "Interviews", description: "Completed successfully" },
  { value: 2, suffix: "+", label: "Projects", description: "In development" },
  { value: 1, suffix: "", label: "Platform", description: "AI-powered solution" }
];

function Counter({ value, decimals = 0 }: { value: number; decimals?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  return <span>{decimals > 0 ? count.toFixed(decimals) : Math.floor(count).toLocaleString()}</span>;
}

import { ScrollRevealStagger, ScrollRevealItem } from "@/components/ScrollReveal";

export function StatsSection() {
  return (
    <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <ScrollRevealStagger staggerDelay={0.15}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <ScrollRevealItem key={index} className="relative group"
              >
                {/* Card */}
                <div className="relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-cyan-500/0 group-hover:from-purple-500/10 group-hover:to-cyan-500/10 rounded-2xl transition-all duration-300" />

                  <div className="relative space-y-1 sm:space-y-2">
                    {/* Value */}
                    <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                      <Counter value={stat.value} decimals={stat.decimals} />
                      {stat.suffix}
                    </div>

                    {/* Label */}
                    <div className="text-sm sm:text-base lg:text-lg font-semibold text-white">
                      {stat.label}
                    </div>

                    {/* Description */}
                    <div className="text-xs sm:text-sm text-gray-400">
                      {stat.description}
                    </div>
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </ScrollRevealItem>
            ))}
          </div>
        </ScrollRevealStagger>
      </div>
    </section>
  );
}
