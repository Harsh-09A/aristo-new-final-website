export function formatIndianPrice(value: number): string {
  if (value >= 1000000000) {
    // 100 Cr+
    return `${(value / 10000000).toFixed(0)} Cr`;
  }

  if (value >= 10000000) {
    // 1 Cr+
    return `${(value / 10000000).toFixed(1).replace(/\.0$/, "")} Cr`;
  }

  if (value >= 100000) {
    // 1 Lakh+
    return `${(value / 100000).toFixed(1).replace(/\.0$/, "")} Lac`;
  }

  if (value >= 1000) {
    // 1 Thousand+
    return `${(value / 1000).toFixed(1).replace(/\.0$/, "")} K`;
  }

  return value.toString();
}