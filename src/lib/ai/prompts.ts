export const crmPrompts = {
  summarizeClient: (context: string) => `Summarize this client history for an account executive:\n${context}`,
  nextBestAction: (context: string) => `Given CRM activity, suggest next best action:\n${context}`,
  followUpEmail: (context: string) => `Write a concise, polite follow-up email:\n${context}`,
  prioritizeLeads: (context: string) => `Rank leads by conversion likelihood and justify:\n${context}`
};
