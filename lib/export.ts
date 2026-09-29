import type { MissionDraft } from "./mission";

export function missionMarkdown(m: MissionDraft): string {
  const objectives = m.objectives.map((o, i) => [
    `### ${i + 1}. ${o.title} (${o.id})`,
    `- Type: ${o.kind}`,
    `- Experience: ${o.description}`,
    `- Entry: ${o.entry}`,
    `- Completion: ${o.completion}`,
    `- Failure: ${o.failure || "None specified"}`,
    `- Checkpoint: ${o.checkpoint ? "Yes" : "No"}`,
  ].join("\n")).join("\n\n");
  const scenes = m.scenes.map((s) => `### ${s.slug}\n${s.stage}\n\n${s.dialogue}`).join("\n\n");
  const choices = m.choices.map((c) => `### ${c.prompt}\n- A: ${c.optionA} — ${c.consequenceA}\n- B: ${c.optionB} — ${c.consequenceB}`).join("\n\n");
  return [
    `# ${m.title}`,
    `**ID:** ${m.code} | **Status:** ${m.status} | **District:** ${m.district} | **Playtime:** ${m.duration} min`,
    `## Hook\n${m.summary}`,
    `## Premise\n${m.premise}`,
    `## Objectives\n${objectives}`,
    `## Screenplay\n${scenes}`,
    `## Player choices\n${choices}`,
    `## QA\n${m.qa}`,
    `## Production notes\n${m.notes}`,
  ].join("\n\n") + "\n";
}

export function downloadMarkdown(m: MissionDraft): void {
  const blob = new Blob([missionMarkdown(m)], { type: "text/markdown;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${m.code.replace(/[^a-z0-9_-]/gi, "_")}.md`;
  link.click();
  URL.revokeObjectURL(url);
}
