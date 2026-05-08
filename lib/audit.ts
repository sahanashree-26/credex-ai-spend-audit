export type AuditResult = {
  recommendation: string;
  savings: number;
  yearlySavings: number;
  reason: string;
};

export function generateAudit(
  tool: string,
  spend: number,
  teamSize: number
): AuditResult {
  if (tool === "ChatGPT") {
    if (teamSize <= 2 && spend > 50) {
      return {
        recommendation: "Switch to ChatGPT Plus",
        savings: 20,
        yearlySavings: 240,
        reason:
          "Small teams usually don't need expensive enterprise plans.",
      };
    }

    return {
      recommendation: "Current plan is optimized",
      savings: 0,
      yearlySavings: 0,
      reason:
        "Your current ChatGPT spending looks reasonable.",
    };
  }

  if (tool === "Claude") {
    if (spend > 200) {
      return {
        recommendation: "Move to Claude Team Plan",
        savings: 60,
        yearlySavings: 720,
        reason:
          "Claude Team provides better collaboration pricing.",
      };
    }

    return {
      recommendation: "Current Claude usage is fine",
      savings: 0,
      yearlySavings: 0,
      reason:
        "No major optimization opportunities detected.",
    };
  }

  if (tool === "Cursor") {
    if (teamSize < 5 && spend > 100) {
      return {
        recommendation: "Downgrade to Cursor Pro",
        savings: 40,
        yearlySavings: 480,
        reason:
          "Smaller teams can reduce costs using Pro plans.",
      };
    }

    return {
      recommendation: "Cursor plan looks efficient",
      savings: 0,
      yearlySavings: 0,
      reason:
        "Your current Cursor setup is cost effective.",
    };
  }

  return {
    recommendation: "No audit available",
    savings: 0,
    yearlySavings: 0,
    reason:
      "We could not analyze this AI tool yet.",
  };
}