"use client";
import { IoSparklesSharp } from "react-icons/io5";
import { useNavigate } from "react-router";
export default function BorderMagicButton({ children = "AI agent", onClick }) {
  const Navigate = useNavigate()
  return (
    <button onClick={onClick} className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
      {/* Animated Gradient Border */}
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />

      {/* Inner Button Area */}
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-4 py-1 text-md font-medium text-white backdrop-blur-3xl">
        {children} <span><IoSparklesSharp className="ml-1 mb-1 text-sm" /></span>
      </span>
    </button>
  );
}
