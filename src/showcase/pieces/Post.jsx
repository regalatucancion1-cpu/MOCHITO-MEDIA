export default function Post({ scale = 0.26, children, style = {} }) {
  return (
    <div className="piece-thumb piece-thumb--post" style={{
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
      <div className="piece-badge">Post</div>
    </div>
  );
}
