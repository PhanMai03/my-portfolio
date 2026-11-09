/**
 * Utility functions for pointy-top hexagon SVG math
 */
export function getPointyHexPoints(cx: number, cy: number, radius: number): string {
  const points: string[] = [];
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI / 180) * (30 + i * 60);
    const px = cx + radius * Math.cos(angle);
    const py = cy + radius * Math.sin(angle);
    points.push(`${px.toFixed(2)},${py.toFixed(2)}`);
  }
  return points.join(" ");
}

