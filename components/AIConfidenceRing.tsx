"use client";

import { PieChart, Pie, Cell } from "recharts";

interface Props {
  score: number;
}

export default function AIConfidenceRing({ score }: Props) {

  const data = [
    { name: "confidence", value: score },
    { name: "remaining", value: 100 - score },
  ];

  const COLORS = ["#22d3ee", "#27272a"];

  return (
    <div className="mt-10 flex flex-col items-center">

      <h3 className="text-lg font-semibold mb-4">
        AI Confidence Level
      </h3>

      <div className="relative">

        <PieChart width={200} height={200}>
          <Pie
            data={data}
            innerRadius={70}
            outerRadius={90}
            startAngle={90}
            endAngle={-270}
            dataKey="value"
          >
            {data.map((_, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>
        </PieChart>

        <div className="absolute inset-0 flex items-center justify-center flex-col">

          <span className="text-2xl font-bold text-cyan-400">
            {score}%
          </span>

          <span className="text-xs text-zinc-400">
            Confidence
          </span>

        </div>

      </div>

    </div>
  );
}