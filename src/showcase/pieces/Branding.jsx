export default function Branding({ scale = 0.28, children, style = {} }) {
  return (
    <div className="piece-thumb piece-thumb--branding" style={{
      width: 1080 * scale,
      height: 1350 * scale,
    }}>
      <div className="piece-slot" style={{
        width: 1080,
        height: 1350,
        transform: `scale(${scale})`,
        ...style,
      }}>
        {children}
      </div>
      <div className="piece-badge">Brand</div>
    </div>
  );
}
