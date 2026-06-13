// Generates N-pointed star polygon points for SVG
export function starPolygon(cx, cy, r1, r2, n = 8) {
  const pts = []
  for (let i = 0; i < n * 2; i++) {
    const a = (i * Math.PI) / n - Math.PI / 2
    const r = i % 2 === 0 ? r1 : r2
    pts.push(`${(cx + r * Math.cos(a)).toFixed(2)},${(cy + r * Math.sin(a)).toFixed(2)}`)
  }
  return pts.join(' ')
}

// Generates regular polygon (N sides) points for SVG
export function regPolygon(cx, cy, r, n, offsetDeg = 0) {
  const off = (offsetDeg * Math.PI) / 180 - Math.PI / 2
  const pts = []
  for (let i = 0; i < n; i++) {
    const a = (i * 2 * Math.PI) / n + off
    pts.push(`${(cx + r * Math.cos(a)).toFixed(2)},${(cy + r * Math.sin(a)).toFixed(2)}`)
  }
  return pts.join(' ')
}
