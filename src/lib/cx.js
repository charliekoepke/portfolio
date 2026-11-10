export function cx(...parts) {
  return parts.filter(Boolean).join(" ");
}

export function stateClass(state) {
  return state && state !== "disabled" ? `is-${state}` : null;
}
