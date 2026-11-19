export const STUDY_PASSWORD = "ckportfolio-unlock";

function key(slug) {
  return `study-${slug}`;
}

export function isUnlocked(slug) {
  try {
    return sessionStorage.getItem(key(slug)) === "open";
  } catch {
    return false;
  }
}

export function unlock(slug) {
  try {
    sessionStorage.setItem(key(slug), "open");
  } catch {
    return;
  }
}
