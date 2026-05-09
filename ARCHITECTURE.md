# ARCHITECTURE

## Overview

Credex AI Spend Audit is a frontend-focused SaaS optimization dashboard built using Next.js and React. The application helps teams estimate potential savings from AI tool subscriptions by analyzing monthly spend and team size.

The project is designed as a modular component-based application where each UI section is separated into reusable React components.

---

# Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Vercel Deployment

---

# Application Flow

1. User selects an AI tool
2. User enters:
   - monthly spend
   - team size
3. Frontend sends values into the audit engine
4. Audit engine calculates:
   - estimated savings
   - yearly savings
   - optimization recommendation
5. Results are rendered dynamically in the dashboard UI

---

# Folder Structure

```text
app/
  page.tsx

components/
  AuditResultCard.tsx
  AuditScore.tsx
  AIConfidenceRing.tsx
  AIInsight.tsx
  DownloadReportButton.tsx
  FloatingParticles.tsx
  BackgroundGlow.tsx

lib/
  audit.ts
```
