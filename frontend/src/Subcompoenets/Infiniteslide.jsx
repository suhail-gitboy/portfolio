"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/Infinitemove";

export function InfiniteMovingCardsDemo() {
  return (
    <div
      className="h-[20rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05]  relative overflow-hidden">
      <InfiniteMovingCards items={appPhases} direction="right" speed="slow" />
    </div>
  );
}

const appPhases = [
  {
    quote:
      "Every great app begins with understanding the problem. Before a single line of code is written, we define the purpose, identify user pain points, analyze competitors, and clarify measurable goals that shape the direction of the entire product.",
    name: "Phase 1",
    title: "Ideation & Problem Definition",
  },
  {
    quote:
      "Once the vision is clear, we craft a blueprint of the user experience. This includes user flows, wireframes, feature mapping, and UI planning to ensure that the design feels intuitive, accessible, and delightful for real users.",
    name: "Phase 2",
    title: "Planning & UI/UX Design",
  },
  {
    quote:
      "This is where the app starts coming to life. We build the frontend, backend, database architecture, APIs, authentication, and integrations. Each feature gets implemented with a balance of performance, security, and scalability.",
    name: "Phase 3",
    title: "Development & Implementation",
  },
  {
    quote:
      "No app goes live without refining. We test every corner — functional testing, UI testing, performance benchmarking, bug fixing, and usability improvements — ensuring the app feels smooth, stable, and user-friendly.",
    name: "Phase 4",
    title: "Testing, Debugging & Optimization",
  },
  {
    quote:
      "With everything ready, the app is deployed and monitored in real time. We track analytics, gather user feedback, release updates, and continuously improve the product as it grows in the hands of real users.",
    name: "Phase 5",
    title: "Deployment & Continuous Improvement",
  },
];
