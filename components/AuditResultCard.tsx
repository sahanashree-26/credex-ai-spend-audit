import AIConfidenceRing from "./AIConfidenceRing";
import AIInsight from "./AIInsight";
import AuditScore from "./AuditScore";

interface AuditResultCardProps {
  recommendation: string;
  savings: number;
  yearlySavings: number;
  reason: string;
  teamSize: number;
}

export default function AuditResultCard(
  props: AuditResultCardProps
) {

  const score =
    props.savings > 50
      ? 85
      : props.savings > 0
      ? 70
      : 95;

  return (
    <div className="mt-10 bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-3xl p-8">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">

        <h2 className="text-3xl font-bold">
          Audit Result
        </h2>

        <div className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-semibold">
          Potential Savings Found
        </div>

      </div>

      {/* PREMIUM SAVINGS CARDS */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">

        <div className="group relative overflow-hidden bg-black/40 border border-zinc-800 rounded-2xl p-6 hover:border-green-400/40 transition duration-300">

          <div className="absolute inset-0 bg-green-400/5 opacity-0 group-hover:opacity-100 transition" />

          <p className="text-zinc-400 mb-2 relative z-10">
            Monthly Savings
          </p>

          <h3 className="text-5xl font-bold text-green-400 relative z-10">
            ${props.savings}
          </h3>

          <div className="mt-4 inline-flex items-center gap-2 bg-green-500/10 text-green-300 px-3 py-1 rounded-full text-sm relative z-10">
            +12% optimization
          </div>

        </div>

        <div className="group relative overflow-hidden bg-black/40 border border-zinc-800 rounded-2xl p-6 hover:border-cyan-400/40 transition duration-300">

          <div className="absolute inset-0 bg-cyan-400/5 opacity-0 group-hover:opacity-100 transition" />

          <p className="text-zinc-400 mb-2 relative z-10">
            Yearly Savings
          </p>

          <h3 className="text-5xl font-bold text-cyan-400 relative z-10">
            ${props.yearlySavings}
          </h3>

          <div className="mt-4 inline-flex items-center gap-2 bg-cyan-500/10 text-cyan-300 px-3 py-1 rounded-full text-sm relative z-10">
            AI optimized
          </div>

        </div>

      </div>

      {/* RECOMMENDATION */}
      <div className="bg-black/30 border border-zinc-800 rounded-2xl p-6 mb-6">

        <p className="text-zinc-400 mb-2">
          Recommended Action
        </p>

        <h3 className="text-2xl font-semibold">
          {props.recommendation}
        </h3>

      </div>

      {/* SCORE */}
      <AuditScore score={score} />
      <AIConfidenceRing score={score} />

      {/* AI INSIGHT */}
      <AIInsight
        tool={props.recommendation}
        savings={props.savings}
        teamSize={props.teamSize}
      />

      {/* REASON */}
      <div className="bg-black/30 border border-zinc-800 rounded-2xl p-6 mt-8">

        <p className="text-zinc-400 mb-2">
          Why We Suggested This
        </p>

        <p className="text-lg leading-relaxed text-zinc-200">
          {props.reason}
        </p>

      </div>

    </div>
  );
}