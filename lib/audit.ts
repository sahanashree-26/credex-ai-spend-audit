export interface AuditResult {
  recommendation: string;
  savings: number;
  yearlySavings: number;
  reason: string;
}

export function generateAudit(
  tool: string,
  monthlySpend: number,
  teamSize: number
): AuditResult {

  let savings = 0;

  if (monthlySpend > 1000) {
    savings = Math.floor(monthlySpend * 0.35);
  } else if (monthlySpend > 500) {
    savings = Math.floor(monthlySpend * 0.2);
  } else if (monthlySpend > 200) {
    savings = Math.floor(monthlySpend * 0.12);
  } else {
    savings = Math.floor(monthlySpend * 0.05);
  }

  const yearlySavings = savings * 12;

  let recommendation = "";

  if (teamSize <= 3) {
    recommendation =
      "Switch to flexible AI creator plans";
  } else if (teamSize <= 10) {
    recommendation =
      "Optimize unused premium AI seats";
  } else {
    recommendation =
      "Move toward centralized enterprise AI management";
  }

  const reason = `
Your ${tool} usage pattern suggests there may be underutilized subscriptions, overlapping AI tools, or unnecessary premium seats across your team workflows.
`;

  return {
    recommendation,
    savings,
    yearlySavings,
    reason,
  };
}