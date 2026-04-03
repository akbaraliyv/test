import { systemPrompts } from "./prompts";

export async function mockAICompletion(prompt: string, mode: keyof typeof systemPrompts) {
  const response = {
    mode,
    prompt,
    output: `AI (${mode}): ${systemPrompts[mode]} | Context: ${prompt.slice(0, 160)}`,
  };

  return response;
}
