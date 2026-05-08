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
      ? 45
      : props.savings > 0
      ? 72
      : 90;

  return (
    <div className="mt-10 bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-3xl p-8">

      <div className="flex items-center justify-between mb-6">

        <h2 className="text-3xl font-bold">
          Audit Result
        </h2>

        <div className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-semibold">
          Potential Savings Found
        </div>

      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">

        <div className="bg-black/40 border border-zinc-800 rounded-2xl p-6">

          <p className="text-zinc-400 mb-2">
            Monthly Savings
          </p>

          <h3 className="text-4xl font-bold text-green-400">
            ${props.savings}
          </h3>

        </div>

        <div className="bg-black/40 border border-zinc-800 rounded-2xl p-6">

          <p className="text-zinc-400 mb-2">
            Yearly Savings
          </p>

          <h3 className="text-4xl font-bold text-green-400">
            ${props.yearlySavings}
          </h3>

        </div>

      </div>

      <div className="bg-black/30 border border-zinc-800 rounded-2xl p-6 mb-6">

        <p className="text-zinc-400 mb-2">
          Recommended Action
        </p>

        <h3 className="text-2xl font-semibold">
          {props.recommendation}
        </h3>

      </div>

      <AuditScore score={score} />
      <AIInsight
        tool={props.recommendation}
        savings={props.savings}
        teamSize={props.teamSize}
      />

      <div className="bg-black/30 border border-zinc-800 rounded-2xl p-6">

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