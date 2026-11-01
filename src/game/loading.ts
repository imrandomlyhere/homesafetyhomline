export const FILE_LOAD_MS = 4000;
export const CALL_LOAD_MS = 6000;
export const QUESTION_LOAD_MS = 1500;

export function textProgress(progress: number) {
  const filled = Math.min(10, Math.max(0, Math.floor(progress / 10)));
  return "[".repeat(filled) + "-".repeat(10 - filled);
}