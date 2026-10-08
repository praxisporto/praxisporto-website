// Counts conversion steps with the cookie-free analytics script; does nothing when it is not loaded.
export function track(name: string) {
  try { (window as unknown as { plausible?: (n: string) => void }).plausible?.(name); } catch { /* analytics is optional */ }
}
