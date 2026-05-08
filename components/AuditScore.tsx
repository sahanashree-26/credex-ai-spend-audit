interface AuditScoreProps {
  score: number;
}

export default function AuditScore(
  props: AuditScoreProps
) {
  return (
    <div className="mt-8">

      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-semibold">
          AI Efficiency Score
        </h3>

        <span className="text-cyan-400 font-bold">
          {props.score}/100
        </span>
      </div>

      <div className="w-full h-4 bg-zinc-800 rounded-full overflow-hidden">

        <div
          className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full transition-all duration-1000"
          style={{
            width: `${props.score}%`,
          }}
        />

      </div>

      <p className="text-zinc-400 text-sm mt-3">
        Higher score means your AI spending is optimized efficiently.
      </p>

    </div>
  );
}