interface AIInsightProps {
  tool: string;
  savings: number;
  teamSize: number;
}

export default function AIInsight(
  props: AIInsightProps
) {

  let insight = "";

  if (props.savings > 50) {
    insight =
      "Your organization appears to be paying for AI capacity that is not fully utilized across teams.";
  } else if (props.teamSize <= 3) {
    insight =
      "Smaller teams usually benefit more from flexible AI subscriptions instead of enterprise plans.";
  } else {
    insight =
      "Your current AI spending pattern looks relatively healthy and optimized.";
  }

  return (
    <div className="mt-8 border border-cyan-500/20 bg-cyan-500/5 rounded-2xl p-6">

      <div className="flex items-center gap-3 mb-4">

        <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />

        <h3 className="text-cyan-300 font-semibold text-lg">
          AI Behavioral Insight
        </h3>

      </div>

      <p className="text-zinc-300 leading-relaxed">
        {insight}
      </p>

    </div>
  );
}