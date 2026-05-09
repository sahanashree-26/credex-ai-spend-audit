"use client";

import FloatingParticles from "@/components/FloatingParticles";
import BackgroundGlow from "@/components/BackgroundGlow";

import { useState } from "react";
import { Brain, DollarSign, Zap } from "lucide-react";

import AuditResultCard from "@/components/AuditResultCard";
import { generateAudit, AuditResult } from "@/lib/audit";

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

  const [auditResult, setAuditResult] =
    useState<AuditResult | null>(null);

  const [loading, setLoading] = useState(false);

  const handleGenerateAudit = async () => {

    setLoading(true);

    await new Promise((resolve) =>
      setTimeout(resolve, 2500)
    );

    const result = generateAudit(
      selectedTool,
      Number(monthlySpend),
      Number(teamSize)
    );

    setAuditResult(result);

    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden relative">

      <FloatingParticles />

      <BackgroundGlow />

      {/* HERO SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">

        {/* TOP BADGE */}
        <div className="inline-flex items-center gap-2 bg-zinc-900 px-4 py-2 rounded-full border border-zinc-800 mb-6">

          <Zap size={16} />

          <span className="text-sm text-zinc-300">
            AI Cost Optimization Platform
          </span>

        </div>

        {/* LIVE STATUS */}
        <div className="flex justify-center mt-4 mb-8">

          <div className="flex items-center gap-3 bg-cyan-500/10 border border-cyan-400/20 px-5 py-3 rounded-full">

            <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />

            <span className="text-cyan-300 text-sm">
              AI Optimization Engine Active
            </span>

          </div>

        </div>

        {/* TITLE */}
        <h1 className="text-6xl font-bold leading-tight max-w-4xl mx-auto">

          Stop Overspending

          <br />

          On AI Tools

        </h1>

        {/* SUBTITLE */}
        <p className="text-zinc-400 text-xl mt-6 max-w-2xl mx-auto">

          Discover hidden savings opportunities across ChatGPT,
          Claude, Cursor, Copilot, and more.

        </p>

      </section>

      {/* FEATURES */}
      <section className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-6 mb-20">

        <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 hover:border-green-400/30 transition">

          <DollarSign className="mb-4 text-green-400" />

          <h3 className="text-xl font-semibold mb-2">
            Reduce AI Costs
          </h3>

          <p className="text-zinc-400">
            Find cheaper plans and avoid unnecessary AI spending.
          </p>

        </div>

        <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 hover:border-cyan-400/30 transition">

          <Brain className="mb-4 text-cyan-400" />

          <h3 className="text-xl font-semibold mb-2">
            Smart Recommendations
          </h3>

          <p className="text-zinc-400">
            Get AI-powered suggestions tailored to your team.
          </p>

        </div>

        <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 hover:border-purple-400/30 transition">

          <Zap className="mb-4 text-purple-400" />

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

        <div className="bg-zinc-900/90 backdrop-blur-xl border border-zinc-800 rounded-3xl p-8 shadow-2xl">

          <h2 className="text-3xl font-bold mb-8">
            Start Your Free Audit
          </h2>

          {/* TOOL SELECT */}
          <div className="mb-6">

            <label className="block mb-2 text-zinc-300">
              Select AI Tool
            </label>

            <select
              value={selectedTool}
              onChange={(e) =>
                setSelectedTool(e.target.value)
              }
              className="w-full bg-black border border-zinc-700 rounded-xl p-4 text-white focus:outline-none focus:border-cyan-400"
            >

              <option value="">
                Choose a tool
              </option>

              {tools.map((tool) => (
                <option
                  key={tool}
                  value={tool}
                >
                  {tool}
                </option>
              ))}

            </select>

          </div>

          {/* MONTHLY SPEND */}
          <div className="mb-6">

            <label className="block mb-2 text-zinc-300">
              Monthly Spend ($)
            </label>

            <input
              type="number"
              placeholder="500"
              value={monthlySpend}
              onChange={(e) =>
                setMonthlySpend(e.target.value)
              }
              className="w-full bg-black border border-zinc-700 rounded-xl p-4 text-white focus:outline-none focus:border-cyan-400"
            />

          </div>

          {/* TEAM SIZE */}
          <div className="mb-8">

            <label className="block mb-2 text-zinc-300">
              Team Size
            </label>

            <input
              type="number"
              placeholder="10"
              value={teamSize}
              onChange={(e) =>
                setTeamSize(e.target.value)
              }
              className="w-full bg-black border border-zinc-700 rounded-xl p-4 text-white focus:outline-none focus:border-cyan-400"
            />

          </div>

          {/* BUTTON */}
          <button
            onClick={handleGenerateAudit}
            disabled={loading}
            className="w-full bg-gradient-to-r from-cyan-400 to-purple-500 text-black py-4 rounded-xl font-semibold hover:opacity-90 transition disabled:opacity-50"
          >

            {loading
              ? "AI Analyzing Spend Data..."
              : "Generate Audit"}

          </button>

          {/* RESULT */}
          {auditResult && (
            <AuditResultCard
              recommendation={auditResult.recommendation}
              savings={auditResult.savings}
              yearlySavings={auditResult.yearlySavings}
              reason={auditResult.reason}
              teamSize={Number(teamSize)}
            />
          )}

        </div>

      </section>

    </main>
  );
}