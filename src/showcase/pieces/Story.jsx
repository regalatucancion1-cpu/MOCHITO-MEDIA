export default function Story({ scale = 0.26, children, style = {} }) {
  return (
    <div className="piece-thumb piece-thumb--story" style={{
      width: 1080 * scale,
      height: 1920 * scale,
    }}>
      <div className="piece-slot" style={{
        width: 1080,
        height: 1920,
        transform: `scale(${scale})`,
        ...style,
      }}>
        {children}
      </div>
      <div className="piece-badge">Story</div>
    </div>
  );
}
