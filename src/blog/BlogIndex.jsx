import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, ArrowLeft } from "lucide-react";
import { articles } from "./articles";

export default function BlogIndex() {
  useEffect(() => {
    document.title = "Blog de UGC y creación de contenido para marcas | Mochito Media";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Guías, estrategias y casos reales sobre creadores UGC, storytelling de marca, TikTok para empresas y contenido que convierte. El blog de Mochito Media.");
    window.scrollTo(0, 0);
  }, []);

  const sorted = [...articles].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div style={{ background: "#FDFAF2", minHeight: "100vh", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      {/* Header */}
      <header style={{
        background: "linear-gradient(160deg, #0B1220 0%, #0F172A 40%, #6B3DED 100%)",
        padding: "120px 24px 100px",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{ position: "absolute", top: "-20%", right: "-10%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(107,61,237,0.2) 0%, transparent 70%)" }} />
        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <Link to="/" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none", fontSize: 14, display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 32 }}>
            <ArrowLeft size={16} /> Volver a la web
          </Link>
          <span style={{ color: "#06B6D4", fontSize: 13, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", display: "block", marginBottom: 16 }}>Blog Mochito Media</span>
          <h1 style={{ fontSize: "clamp(36px, 6vw, 64px)", fontWeight: 800, color: "#fff", lineHeight: 1.1, margin: "0 0 20px", letterSpacing: "-1.5px", maxWidth: 800 }}>
            Creación de contenido, UGC y storytelling para marcas modernas.
          </h1>
          <p style={{ fontSize: 19, color: "rgba(255,255,255,0.75)", maxWidth: 680, lineHeight: 1.7, fontWeight: 300, margin: 0 }}>
            Guías prácticas, estrategias probadas y casos reales para que tu marca conecte de verdad con su audiencia en TikTok, Instagram y más allá.
          </p>
        </div>
      </header>

      {/* Articles grid */}
      <section style={{ padding: "80px 24px 120px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 32 }}>
            {sorted.map(article => (
              <Link
                key={article.slug}
                to={`/blog/${article.slug}`}
                style={{
                  textDecoration: "none",
                  background: "#fff",
                  borderRadius: 20,
                  padding: 32,
                  border: "1px solid rgba(11,18,32,0.08)",
                  transition: "all 0.3s ease",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "0 2px 12px rgba(11,18,32,0.04)",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 12px 40px rgba(11,18,32,0.12)";
                  e.currentTarget.style.borderColor = "rgba(107,61,237,0.25)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.boxShadow = "0 2px 12px rgba(11,18,32,0.04)";
                  e.currentTarget.style.borderColor = "rgba(11,18,32,0.08)";
                }}
              >
                <div style={{ display: "flex", gap: 12, marginBottom: 16, fontSize: 12, color: "#6B3DED", fontWeight: 600, textTransform: "uppercase", letterSpacing: 1 }}>
                  <span>{formatDate(article.date)}</span>
                  <span>·</span>
                  <span>{article.readTime} min</span>
                </div>
                <h2 style={{ fontSize: 22, fontWeight: 800, color: "#0F172A", lineHeight: 1.25, margin: "0 0 14px", letterSpacing: "-0.5px" }}>
                  {article.title}
                </h2>
                <p style={{ fontSize: 15, color: "#475569", lineHeight: 1.65, margin: "0 0 24px", flexGrow: 1 }}>
                  {article.excerpt}
                </p>
                <span style={{ fontSize: 14, color: "#06B6D4", fontWeight: 700, display: "inline-flex", alignItems: "center", gap: 6 }}>
                  Leer artículo <ChevronRight size={16} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#0B1220", padding: "80px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, color: "#fff", lineHeight: 1.2, margin: "0 0 20px", letterSpacing: "-1px" }}>
            ¿Quieres contenido UGC para tu marca?
          </h2>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.7)", lineHeight: 1.7, margin: "0 0 32px" }}>
            Producimos vídeos auténticos con storytelling para startups y marcas digitales que quieren conectar con su audiencia de verdad.
          </p>
          <Link to="/#contacto" style={{
            background: "linear-gradient(135deg, #06B6D4, #7C3AED)", color: "#fff", padding: "16px 36px",
            borderRadius: 50, fontSize: 16, fontWeight: 700, textDecoration: "none",
            boxShadow: "0 8px 30px rgba(107,61,237,0.4)",
            display: "inline-flex", alignItems: "center", gap: 8,
          }}>Hablemos de tu proyecto <ChevronRight size={18} /></Link>
        </div>
      </section>
    </div>
  );
}

function formatDate(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString("es-ES", { year: "numeric", month: "short", day: "numeric" });
}
