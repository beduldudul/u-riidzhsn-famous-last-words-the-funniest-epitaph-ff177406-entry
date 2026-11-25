import { mkdirSync, writeFileSync } from "node:fs";

// Famous Last Words: The Funniest Epitaph
// One line of dying speech, carved in stone: a medical directive
// whose reason is pure 2026 dread. 47 characters, inside the 150 cap,
// short enough to win the smaller-text tie-break.
const line =
  "Do not resuscitate. I have seen the group chat.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
