"use client";

import { useState } from "react";
import { Brain, DollarSign, Zap } from "lucide-react";

const tools = [
  "ChatGPT",
  "Claude",
  "GitHub Copilot",
  "Cursor",
  "Gemini",
];

export default function Home() {
  const [selectedTool, setSelectedTool] = useState("");
  const [monthlySpend, setMonthlySpend] = useState("");
  const [teamSize, setTeamSize] = useState("");

  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <div className="inline-flex items-center gap-2 bg-zinc-900 px-4 py-2 rounded-full border border-zinc-800 mb-6">
          <Zap size={16} />
          <span className="text-sm text-zinc-300">
            AI Cost Optimization Platform
          </span>
        </div>

        <h1 className="text-6xl font-bold leading-tight max-w-4xl mx-auto">
          Stop Overspending
          <br />
          On AI Tools
        </h1>

        <p className="text-zinc-400 text-xl mt-6 max-w-2xl mx-auto">
          Discover hidden savings opportunities across ChatGPT,
          Claude, Cursor, Copilot, and more.
        </p>
      </section>

      {/* FEATURES */}
      <section className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-6 mb-20">
        <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
          <DollarSign className="mb-4" />
          <h3 className="text-xl font-semibold mb-2">
            Reduce AI Costs
          </h3>
          <p className="text-zinc-400">
            Find cheaper plans and avoid unnecessary AI spending.
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
          <Brain className="mb-4" />
          <h3 className="text-xl font-semibold mb-2">
            Smart Recommendations
          </h3>
          <p className="text-zinc-400">
            Get AI-powered suggestions tailored to your team.
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
          <Zap className="mb-4" />
          <h3 className="text-xl font-semibold mb-2">
            Instant Audit
          </h3>
          <p className="text-zinc-400">
            See monthly and annual savings instantly.
          </p>
        </div>
      </section>

      {/* AUDIT FORM */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
          <h2 className="text-3xl font-bold mb-8">
            Start Your Free Audit
          </h2>

          {/* Tool Selection */}
          <div className="mb-6">
            <label className="block mb-2 text-zinc-300">
              Select AI Tool
            </label>

            <select
              value={selectedTool}
              onChange={(e) => setSelectedTool(e.target.value)}
              className="w-full bg-black border border-zinc-700 rounded-xl p-4 text-white"
            >
              <option value="">Choose a tool</option>

              {tools.map((tool) => (
                <option key={tool} value={tool}>
                  {tool}
                </option>
              ))}
            </select>
          </div>

          {/* Monthly Spend */}
          <div className="mb-6">
            <label className="block mb-2 text-zinc-300">
              Monthly Spend ($)
            </label>

            <input
              type="number"
              placeholder="500"
              value={monthlySpend}
              onChange={(e) => setMonthlySpend(e.target.value)}
              className="w-full bg-black border border-zinc-700 rounded-xl p-4 text-white"
            />
          </div>

          {/* Team Size */}
          <div className="mb-8">
            <label className="block mb-2 text-zinc-300">
              Team Size
            </label>

            <input
              type="number"
              placeholder="10"
              value={teamSize}
              onChange={(e) => setTeamSize(e.target.value)}
              className="w-full bg-black border border-zinc-700 rounded-xl p-4 text-white"
            />
          </div>

          <button className="w-full bg-white text-black py-4 rounded-xl font-semibold hover:bg-zinc-200 transition">
            Generate Audit
          </button>
        </div>
      </section>
    </main>
  );
}