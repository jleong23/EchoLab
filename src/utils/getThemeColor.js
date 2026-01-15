export function getThemeColor(varName, alpha = 1) {
  const root = document.documentElement;
  const rgb = getComputedStyle(root).getPropertyValue(varName);
  return `rgba(${rgb}, ${alpha})`;
}
