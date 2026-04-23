import { useEffect, useRef, useState } from "react";

export default function Reel({ scale = 0.26, videoSrc, poster, children, videoStyle = {} }) {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          io.disconnect();
        }
      },
      { rootMargin: "300px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (shouldLoad && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, [shouldLoad]);

  return (
    <div ref={containerRef} className="piece-thumb piece-thumb--reel" style={{
      width: 1080 * scale,
      height: 1920 * scale,
    }}>
      <div className="piece-slot" style={{
        width: 1080,
        height: 1920,
        transform: `scale(${scale})`,
      }}>
        {shouldLoad && (
          <video
            ref={videoRef}
            src={videoSrc}
            poster={poster}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: 1080,
              height: 1920,
              objectFit: "cover",
              zIndex: 0,
              ...videoStyle,
            }}
          />
        )}
        {!shouldLoad && poster && (
          <img src={poster} alt="" style={{
            position: "absolute", top: 0, left: 0,
            width: 1080, height: 1920, objectFit: "cover", zIndex: 0,
          }} />
        )}
        <div style={{ position: "absolute", inset: 0, zIndex: 1 }}>
          {children}
        </div>
      </div>
      <div className="piece-badge" style={{ background: "rgba(220, 38, 38, .8)" }}>
        <span style={{ display: "inline-block", width: 0, height: 0, borderLeft: "6px solid #fff", borderTop: "4px solid transparent", borderBottom: "4px solid transparent", marginRight: 6, verticalAlign: "middle" }} />
        Reel
      </div>
    </div>
  );
}
