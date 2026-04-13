import { useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { articles, getArticleBySlug } from "./articles";

export default function BlogArticle() {
  const { slug } = useParams();
  const article = getArticleBySlug(slug);

  useEffect(() => {
    if (!article) return;
    document.title = `${article.title} | Mochito Media`;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", article.metaDescription);
    const kw = document.querySelector('meta[name="keywords"]');
    if (kw) kw.setAttribute("content", article.keywords.join(", "));
    window.scrollTo(0, 0);
  }, [article]);

  if (!article) return <Navigate to="/blog" replace />;

  const related = articles.filter(a => a.slug !== article.slug).slice(0, 3);

  return (
    <div style={{ background: "#FDFAF2", minHeight: "100vh", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      {/* Header */}
      <header style={{
        background: "linear-gradient(160deg, #0B1220 0%, #0F172A 60%, #6B3DED 120%)",
        padding: "120px 24px 80px",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{ position: "absolute", top: "-20%", right: "-10%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(107,61,237,0.2) 0%, transparent 70%)" }} />
        <div style={{ maxWidth: 800, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <Link to="/blog" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none", fontSize: 14, display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 32 }}>
            <ArrowLeft size={16} /> Volver al blog
          </Link>
          <div style={{ display: "flex", gap: 12, marginBottom: 20, fontSize: 13, color: "#06B6D4", fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.5 }}>
            <span>{formatDate(article.date)}</span>
            <span style={{ color: "rgba(255,255,255,0.4)" }}>·</span>
            <span>{article.readTime} min lectura</span>
          </div>
          <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800, color: "#fff", lineHeight: 1.15, margin: 0, letterSpacing: "-1.2px" }}>
            {article.title}
          </h1>
        </div>
      </header>

      {/* Content */}
      <article style={{ padding: "64px 24px 100px" }}>
        <div
          style={{
            maxWidth: 720,
            margin: "0 auto",
            fontSize: 18,
            lineHeight: 1.8,
            color: "#1E293B",
          }}
          className="article-content"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </article>

      <style>{`
        .article-content p { margin: 0 0 24px; }
        .article-content h2 { font-size: 30px; font-weight: 800; color: #0F172A; margin: 48px 0 20px; letter-spacing: -0.8px; line-height: 1.25; }
        .article-content h3 { font-size: 22px; font-weight: 700; color: #0F172A; margin: 36px 0 16px; letter-spacing: -0.4px; }
        .article-content ul, .article-content ol { margin: 0 0 24px; padding-left: 24px; }
        .article-content li { margin-bottom: 10px; }
        .article-content strong { color: #0F172A; font-weight: 700; }
        .article-content a { color: #6B3DED; font-weight: 600; text-decoration: underline; text-decoration-thickness: 2px; text-underline-offset: 3px; }
        .article-content a:hover { color: #06B6D4; }
        .article-content em { color: #475569; }
      `}</style>

      {/* Related */}
      <section style={{ background: "#fff", padding: "80px 24px", borderTop: "1px solid rgba(11,18,32,0.08)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, color: "#0F172A", margin: "0 0 40px", letterSpacing: "-0.8px" }}>Sigue leyendo</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 24 }}>
            {related.map(a => (
              <Link key={a.slug} to={`/blog/${a.slug}`} style={{
                textDecoration: "none", background: "#FDFAF2", padding: 24, borderRadius: 16,
                border: "1px solid rgba(11,18,32,0.08)", transition: "all 0.3s",
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(107,61,237,0.3)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(11,18,32,0.08)"; e.currentTarget.style.transform = "none"; }}
              >
                <h3 style={{ fontSize: 18, fontWeight: 700, color: "#0F172A", margin: "0 0 10px", lineHeight: 1.3 }}>{a.title}</h3>
                <p style={{ fontSize: 14, color: "#64748B", lineHeight: 1.5, margin: 0 }}>{a.excerpt.slice(0, 110)}...</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#0B1220", padding: "80px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, color: "#fff", lineHeight: 1.2, margin: "0 0 20px", letterSpacing: "-1px" }}>
            ¿Listo para producir contenido que convierta?
          </h2>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.7)", lineHeight: 1.7, margin: "0 0 32px" }}>
            En Mochito Media ayudamos a marcas como la tuya a conectar con su audiencia a través de storytelling real y contenido UGC profesional.
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
  return d.toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" });
}
