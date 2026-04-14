import { useState, useEffect, useRef } from "react";
import { Play, ArrowDown, Users, Video, BarChart3, Upload, Sparkles, Target, Zap, Heart, Menu, X, Send, Instagram, Youtube, Linkedin, ChevronRight, Eye, Film, Clapperboard, MessageCircle } from "lucide-react";

// ─── Intersection Observer Hook ───
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

// ─── Animated Counter ───
function Counter({ end, suffix = "", duration = 2000 }) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView();
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end, duration]);
  return <span ref={ref}>{count}{suffix}</span>;
}

// ─── Logo (dango, inline SVG, inherits text color via currentColor) ───
export function Logo({ size = 40 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="currentColor"
      aria-label="Mochito Media"
      style={{ display: "block", flexShrink: 0 }}
    >
      <circle cx="14" cy="32" r="9" />
      <circle cx="32" cy="32" r="9" />
      <circle cx="50" cy="32" r="9" />
    </svg>
  );
}

// ─── Fade-in wrapper ───
function FadeIn({ children, delay = 0, direction = "up", className = "" }) {
  const [ref, inView] = useInView(0.1);
  const transforms = { up: "translateY(60px)", down: "translateY(-60px)", left: "translateX(60px)", right: "translateX(-60px)", none: "none" };
  return (
    <div ref={ref} className={className} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "none" : transforms[direction],
      transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
    }}>{children}</div>
  );
}

// ─── Navbar ───
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  const links = [
    { label: "Nosotros", href: "/#nosotros" },
    { label: "Servicios", href: "/#servicios" },
    { label: "Portfolio", href: "/#portfolio" },
    { label: "Método", href: "/#metodo" },
    { label: "Blog", href: "/blog" },
    { label: "Contacto", href: "/#contacto" },
  ];
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? "rgba(42,30,24,0.97)" : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      transition: "all 0.4s ease",
      borderBottom: scrolled ? "1px solid rgba(212,96,62,0.2)" : "none",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="#hero" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10, color: "#fff" }}>
          <Logo size={36} />
          <span style={{ color: "#fff", fontWeight: 800, fontSize: 20, letterSpacing: "-0.5px" }}>mochito</span>
          <span style={{ color: "#E5B24C", fontWeight: 300, fontSize: 20 }}>media</span>
        </a>
        {/* Desktop */}
        <div style={{ display: "flex", alignItems: "center", gap: 32 }} className="hidden-mobile">
          {links.map(l => (
            <a key={l.href} href={l.href} style={{ color: "rgba(255,255,255,0.8)", textDecoration: "none", fontSize: 14, fontWeight: 500, letterSpacing: "0.5px", transition: "color 0.3s" }}
              onMouseEnter={e => e.target.style.color = "#E5B24C"} onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.8)"}>{l.label}</a>
          ))}
          <a href="#contacto" style={{
            background: "#D4603E", color: "#fff", padding: "10px 24px",
            borderRadius: 50, fontSize: 14, fontWeight: 600, textDecoration: "none", transition: "transform 0.3s, box-shadow 0.3s",
            boxShadow: "0 4px 15px rgba(212,96,62,0.3)",
          }} onMouseEnter={e => { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = "0 6px 25px rgba(212,96,62,0.5)"; }}
            onMouseLeave={e => { e.target.style.transform = "none"; e.target.style.boxShadow = "0 4px 15px rgba(212,96,62,0.3)"; }}>Hablemos</a>
        </div>
        {/* Mobile toggle */}
        <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", color: "#fff", cursor: "pointer", display: "none" }} className="show-mobile">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ background: "rgba(42,30,24,0.98)", padding: "20px 24px", display: "flex", flexDirection: "column", gap: 16 }}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} style={{ color: "#fff", textDecoration: "none", fontSize: 18, fontWeight: 500 }}>{l.label}</a>
          ))}
        </div>
      )}
    </nav>
  );
}

// ─── Hero ───
function Hero() {
  const [textIdx, setTextIdx] = useState(0);
  const words = ["historia", "esencia", "visión", "voz"];
  useEffect(() => {
    const t = setInterval(() => setTextIdx(i => (i + 1) % words.length), 2500);
    return () => clearInterval(t);
  }, []);
  return (
    <section id="hero" style={{
      minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
      background: "#2A1E18",
      position: "relative", overflow: "hidden",
    }}>
      {/* Animated bg orbs */}
      <div style={{ position: "absolute", top: "-20%", right: "-10%", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(212,96,62,0.15) 0%, transparent 70%)", animation: "float 8s ease-in-out infinite" }} />
      <div style={{ position: "absolute", bottom: "-15%", left: "-5%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(45,106,79,0.2) 0%, transparent 70%)", animation: "float 10s ease-in-out infinite reverse" }} />
      {/* Grid pattern overlay */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(212,96,62,0.07) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

      <div style={{ position: "relative", zIndex: 2, textAlign: "center", maxWidth: 900, padding: "0 24px" }}>
        <FadeIn delay={0.1}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(229,178,76,0.15)", border: "1px solid rgba(229,178,76,0.35)", borderRadius: 50, padding: "8px 20px", marginBottom: 32 }}>
            <Sparkles size={14} color="#E5B24C" />
            <span style={{ color: "#E5B24C", fontSize: 13, fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase" }}>Creadores UGC, storytelling real</span>
          </div>
        </FadeIn>
        <FadeIn delay={0.3}>
          <h1 style={{ fontSize: "clamp(40px, 7vw, 80px)", fontWeight: 800, color: "#fff", lineHeight: 1.05, margin: "0 0 24px", letterSpacing: "-2px" }}>
            Tu marca tiene una<br />
            <span style={{ position: "relative", display: "inline-block" }}>
              <span style={{ color: "#E5B24C" }}>{words[textIdx]}</span>
              <span style={{ position: "absolute", bottom: -4, left: 0, right: 0, height: 4, background: "linear-gradient(90deg, #E5B24C, transparent)", borderRadius: 2 }} />
            </span>
            <br />que merece ser contada.
          </h1>
        </FadeIn>
        <FadeIn delay={0.5}>
          <p style={{ fontSize: "clamp(16px, 2.5vw, 21px)", color: "#F5EEDC", maxWidth: 680, margin: "0 auto 40px", lineHeight: 1.7, fontWeight: 400 }}>
            Somos una agencia de creadores UGC y creación de contenido para marcas. Producimos vídeos con storytelling para TikTok, Instagram y Reels que conectan de verdad con tu audiencia y generan ventas.
          </p>
        </FadeIn>
        <FadeIn delay={0.7}>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#contacto" style={{
              background: "#D4603E", color: "#fff", padding: "16px 36px",
              borderRadius: 50, fontSize: 16, fontWeight: 700, textDecoration: "none",
              boxShadow: "0 8px 30px rgba(212,96,62,0.4)", transition: "all 0.3s",
              display: "flex", alignItems: "center", gap: 8,
            }}>Hablemos de tu proyecto <ChevronRight size={18} /></a>
            <a href="#portfolio" style={{
              background: "rgba(255,255,255,0.08)", color: "#fff", padding: "16px 36px",
              borderRadius: 50, fontSize: 16, fontWeight: 500, textDecoration: "none",
              border: "1px solid rgba(255,255,255,0.15)", transition: "all 0.3s",
              display: "flex", alignItems: "center", gap: 8,
            }}><Play size={16} /> Ver portfolio</a>
          </div>
        </FadeIn>
        <FadeIn delay={1}>
          <div style={{ marginTop: 60 }}>
            <a href="#problema" style={{ color: "rgba(255,255,255,0.4)", animation: "bounce 2s infinite" }}>
              <ArrowDown size={24} />
            </a>
          </div>
        </FadeIn>
      </div>

      <style>{`
        @keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-30px); } }
        @keyframes bounce { 0%,100% { transform: translateY(0); } 50% { transform: translateY(10px); } }
      `}</style>
    </section>
  );
}

// ─── Problem Section ───
function ProblemSection() {
  const problems = [
    { icon: <Users size={28} />, title: "No tienes equipo de creación de contenido", desc: "Montar un equipo creativo interno es caro, lento y arriesgado. Necesitas creadores UGC que entiendan tu marca y produzcan vídeos desde el día uno, sin procesos eternos." },
    { icon: <Video size={28} />, title: "Nadie quiere dar la cara en cámara", desc: "Los formatos que más convierten en TikTok y Reels necesitan una persona real delante de la cámara. Pero en tu equipo nadie quiere, ni sabe, hacerlo con naturalidad." },
    { icon: <BarChart3 size={28} />, title: "Publicas contenido, pero no conecta", desc: "Sin storytelling de marca, el contenido se pierde en el feed. No basta con publicar por publicar: hay que contar historias que tu audiencia quiera ver hasta el final." },
  ];
  return (
    <section id="problema" style={{ padding: "120px 24px", background: "#F5EEDC" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <span style={{ color: "#D4603E", fontSize: 13, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", display: "block", marginBottom: 16 }}>El problema</span>
            <h2 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800, color: "#2A1E18", lineHeight: 1.1, margin: "0 0 20px", letterSpacing: "-1px" }}>
              Sabes que necesitas contenido UGC.<br />
              <span style={{ color: "#D4603E" }}>Pero no tienes quién lo produzca.</span>
            </h2>
            <p style={{ color: "#6B7280", fontSize: 18, maxWidth: 640, margin: "0 auto", lineHeight: 1.7 }}>
              El 90% de las startups y marcas digitales se chocan con el mismo muro. Tres barreras que frenan su estrategia de contenido para redes sociales antes siquiera de empezar.
            </p>
          </div>
        </FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
          {problems.map((p, i) => (
            <FadeIn key={i} delay={i * 0.15}>
              <div style={{
                background: "#fff", borderRadius: 20, padding: 40, border: "1px solid #E8DCC4",
                transition: "all 0.4s", cursor: "default", position: "relative", overflow: "hidden",
              }} onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-8px)"; e.currentTarget.style.boxShadow = "0 20px 60px rgba(42,30,24,0.1)"; e.currentTarget.style.borderColor = "#D4603E"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.borderColor = "#E8DCC4"; }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "#D4603E", opacity: 0, transition: "opacity 0.4s" }}
                  className="card-bar" />
                <div style={{ width: 56, height: 56, borderRadius: 16, background: "rgba(212,96,62,0.12)", display: "flex", alignItems: "center", justifyContent: "center", color: "#D4603E", marginBottom: 24 }}>
                  {p.icon}
                </div>
                <h3 style={{ fontSize: 22, fontWeight: 700, color: "#2A1E18", marginBottom: 12 }}>{p.title}</h3>
                <p style={{ color: "#6B7280", fontSize: 16, lineHeight: 1.7, margin: 0 }}>{p.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── About / Solution ───
function AboutSection() {
  return (
    <section id="nosotros" style={{ padding: "120px 24px", background: "#fff" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Top: Intro text */}
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <span style={{ color: "#D4603E", fontSize: 13, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", display: "block", marginBottom: 16 }}>Nosotros</span>
            <h2 style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 800, color: "#2A1E18", lineHeight: 1.1, margin: "0 0 24px", letterSpacing: "-1px" }}>
              Somos Mochito Media.<br />
              <span style={{ color: "#D4603E" }}>Tu agencia de creadores UGC.</span>
            </h2>
            <p style={{ color: "#6B7280", fontSize: 17, lineHeight: 1.8, maxWidth: 720, margin: "0 auto 0" }}>
              Nacimos para resolver un problema real que sufren miles de marcas: necesitan contenido fresco, auténtico y con storytelling, pero no tienen a nadie que lo produzca con constancia. Nosotros nos encargamos de todo, desde la estrategia de contenido hasta la grabación, edición y publicación en TikTok, Instagram y Reels, para que tú te centres solo en hacer crecer tu negocio.
            </p>
          </div>
        </FadeIn>

        {/* Team cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 32, marginBottom: 56 }}>
          {/* Angela */}
          <FadeIn delay={0.1}>
            <div style={{
              borderRadius: 24, overflow: "hidden", background: "#fff",
              border: "1px solid #E8DCC4", transition: "all 0.4s",
            }} onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-8px)"; e.currentTarget.style.boxShadow = "0 20px 60px rgba(42,30,24,0.1)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}>
              <div style={{
                aspectRatio: "4/3", position: "relative", overflow: "hidden",
              }}>
                <img src="/angela.jpg" alt="Angela" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 20%", display: "block" }} />
                {/* Role badge */}
                <div style={{
                  position: "absolute", top: 16, right: 16,
                  background: "rgba(212,96,62,0.9)", color: "#fff", fontSize: 11, fontWeight: 700,
                  padding: "6px 14px", borderRadius: 50, letterSpacing: "0.5px", textTransform: "uppercase",
                }}>La voz que conecta</div>
              </div>
              <div style={{ padding: "28px 32px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: "#D4603E", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Video size={18} color="#fff" />
                  </div>
                  <div>
                    <div style={{ fontWeight: 800, color: "#2A1E18", fontSize: 20 }}>Angela</div>
                    <div style={{ color: "#D4603E", fontSize: 13, fontWeight: 600 }}>Directora creativa y presentadora</div>
                  </div>
                </div>
                <p style={{ color: "#6B7280", fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                  La cara visible de Mochito Media. No es una influencer contratada: es parte del proyecto, y eso se nota. Su cercanía, naturalidad y capacidad de conectar con la cámara convierten cualquier producto en una historia que engancha.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Christian */}
          <FadeIn delay={0.25}>
            <div style={{
              borderRadius: 24, overflow: "hidden", background: "#fff",
              border: "1px solid #E8DCC4", transition: "all 0.4s",
            }} onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-8px)"; e.currentTarget.style.boxShadow = "0 20px 60px rgba(42,30,24,0.1)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}>
              <div style={{
                aspectRatio: "4/3", position: "relative", overflow: "hidden",
              }}>
                <img src="/christian.jpg" alt="Christian" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 25%", display: "block" }} />
                {/* Role badge */}
                <div style={{
                  position: "absolute", top: 16, right: 16,
                  background: "rgba(42,30,24,0.9)", color: "#fff", fontSize: 11, fontWeight: 700,
                  padding: "6px 14px", borderRadius: 50, letterSpacing: "0.5px", textTransform: "uppercase",
                }}>Productor</div>
              </div>
              <div style={{ padding: "28px 32px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: "#7A8B5C", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Clapperboard size={18} color="#fff" />
                  </div>
                  <div>
                    <div style={{ fontWeight: 800, color: "#2A1E18", fontSize: 20 }}>Christian</div>
                    <div style={{ color: "#D4603E", fontSize: 13, fontWeight: 600 }}>Productor y estrategia</div>
                  </div>
                </div>
                <p style={{ color: "#6B7280", fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                  La mente detrás de la producción. Se encarga de que cada pieza tenga la calidad, la narrativa y la estrategia que necesita. Del concepto al resultado final, Christian es quien hace que todo funcione.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Quote + Stats */}
        <FadeIn delay={0.3}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 32, alignItems: "center" }}>
            {/* Quote */}
            <div style={{ borderLeft: "3px solid #D4603E", paddingLeft: 24 }}>
              <p style={{ color: "#2A1E18", fontSize: 19, fontWeight: 600, fontStyle: "italic", lineHeight: 1.6, margin: 0 }}>
                "No hacemos contenido por hacer. Contamos historias que conectan, emocionan y venden. Porque el buen storytelling hace las tres cosas a la vez."
              </p>
            </div>
            {/* Stats */}
            <div style={{ display: "flex", gap: 32, justifyContent: "center", flexWrap: "wrap" }}>
              {[
                { n: 92, s: "%", l: "confían más en personas que en marcas" },
                { n: 3, s: "x", l: "más engagement con storytelling" },
                { n: 80, s: "%", l: "más recuerdo de marca" },
              ].map((s, i) => (
                <div key={i} style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 32, fontWeight: 800, color: "#E5B24C" }}><Counter end={s.n} />{s.s}</div>
                  <div style={{ fontSize: 12, color: "#6B7280", maxWidth: 100, lineHeight: 1.4, marginTop: 4 }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── Services ───
function ServicesSection() {
  const services = [
    { icon: <Target size={28} />, title: "Estrategia de contenido para marcas", desc: "Auditamos tu presencia digital, definimos la voz de marca y diseñamos un calendario editorial mensual orientado a resultados. Sabrás exactamente qué publicar, cuándo, en qué red y por qué.", tag: "Planificación" },
    { icon: <Video size={28} />, title: "Creadores UGC para TikTok e Instagram", desc: "Reels, TikToks y YouTube Shorts con creadores UGC delante de la cámara. Unboxings, reviews, demos, POVs y contenido educativo con storytelling real que convierte en ventas.", tag: "Producción UGC" },
    { icon: <Clapperboard size={28} />, title: "Producción audiovisual premium", desc: "Spots publicitarios, mini documentales y brand films. Piezas de alto nivel con storytelling cinematográfico para contar la historia de tu marca con calidad profesional.", tag: "Premium" },
    { icon: <Upload size={28} />, title: "Gestión y publicación en redes", desc: "Publicamos, optimizamos y medimos el rendimiento en TikTok, Instagram, YouTube y LinkedIn. Cada mes recibes un reporte claro con métricas y claves para seguir creciendo.", tag: "Full service" },
  ];
  return (
    <section id="servicios" style={{ padding: "120px 24px", background: "#F5EEDC" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <span style={{ color: "#D4603E", fontSize: 13, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", display: "block", marginBottom: 16 }}>Servicios</span>
            <h2 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800, color: "#2A1E18", lineHeight: 1.1, margin: "0 0 20px", letterSpacing: "-1px" }}>
              Todo lo que tu marca necesita.<br />
              <span style={{ color: "#D4603E" }}>Nada que tú tengas que gestionar.</span>
            </h2>
            <p style={{ color: "#6B7280", fontSize: 17, lineHeight: 1.8, maxWidth: 700, margin: "0 auto" }}>
              Creación de contenido para marcas, UGC profesional y estrategia en redes sociales. Un único equipo que entiende tu negocio y entrega vídeos listos para publicar.
            </p>
          </div>
        </FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 24 }}>
          {services.map((s, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div style={{
                background: "#fff", borderRadius: 20, padding: 36, border: "1px solid #E8DCC4",
                transition: "all 0.4s", cursor: "default", height: "100%",
                display: "flex", flexDirection: "column",
              }} onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 20px 60px rgba(42,30,24,0.08)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
                  <div style={{ width: 52, height: 52, borderRadius: 14, background: "#D4603E", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff" }}>
                    {s.icon}
                  </div>
                  <span style={{ background: "rgba(212,96,62,0.1)", color: "#E5B24C", fontSize: 11, fontWeight: 700, padding: "4px 12px", borderRadius: 50, letterSpacing: "0.5px", textTransform: "uppercase" }}>{s.tag}</span>
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 700, color: "#2A1E18", marginBottom: 12 }}>{s.title}</h3>
                <p style={{ color: "#6B7280", fontSize: 15, lineHeight: 1.7, margin: 0, flex: 1 }}>{s.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Portfolio ───
function PortfolioSection() {
  const projects = [
    {
      brand: "Pesca Salada Antonio",
      tag: "Gildas, producto",
      platform: "tiktok",
      url: "https://www.tiktok.com/@angelavelert/video/7599358190643334422",
      thumb: "/thumb-gildas.jpg",
    },
    {
      brand: "Champions Burgers",
      tag: "Alimentaria, Hostelco",
      platform: "tiktok",
      url: "https://www.tiktok.com/@angelavelert/video/7621260586264825110",
      thumb: "/thumb-champions-hostelco.jpg",
    },
    {
      brand: "Champions Burger Valencia",
      tag: "Evento foodie",
      platform: "tiktok",
      url: "https://www.tiktok.com/@angelavelert/video/7562968602526174486",
      thumb: "/thumb-champions-valencia.jpg",
    },
    {
      brand: "La Leggenda di Napoli",
      tag: "Pizzería, apertura",
      platform: "instagram",
      url: "https://www.instagram.com/p/DI9JeSEt2Dm/",
      thumb: "/thumb-leggenda.jpg",
    },
    {
      brand: "Promoción Cultural",
      tag: "Reel Instagram",
      platform: "instagram",
      url: "https://www.instagram.com/reel/DRo6gQyjO2o/",
      thumb: "/thumb-cultural.jpg",
    },
    {
      brand: "El Tribut",
      tag: "Apertura restaurante",
      platform: "instagram",
      url: "https://www.instagram.com/p/DDuycqINyfS/",
      thumb: "/thumb-tribut.jpg",
    },
  ];
  const platformLabel = (p) => p === "tiktok" ? "TikTok" : "Instagram";
  return (
    <section id="portfolio" style={{ padding: "120px 24px", background: "#fff" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span style={{ color: "#D4603E", fontSize: 13, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", display: "block", marginBottom: 16 }}>Portfolio</span>
            <h2 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800, color: "#2A1E18", lineHeight: 1.1, margin: "0 0 20px", letterSpacing: "-1px" }}>
              Historias que hemos contado.
            </h2>
            <p style={{ color: "#6B7280", fontSize: 16, lineHeight: 1.7, maxWidth: 560, margin: "0 auto" }}>
              Marcas reales, campañas reales. Cada pieza cuenta una historia pensada para conectar en el feed.
            </p>
          </div>
        </FadeIn>
        <div className="portfolio-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 24 }}>
          {projects.map((p, i) => (
            <FadeIn key={p.brand} delay={i * 0.08}>
              <a href={p.url} target="_blank" rel="noopener noreferrer" style={{
                display: "block", textDecoration: "none",
                aspectRatio: "9/16", maxHeight: 460, borderRadius: 20, overflow: "hidden",
                background: "#2A1E18",
                position: "relative", cursor: "pointer", transition: "transform 0.4s",
              }} onMouseEnter={e => e.currentTarget.style.transform = "scale(1.02)"}
                onMouseLeave={e => e.currentTarget.style.transform = "none"}>
                {/* Thumbnail */}
                <img src={p.thumb} alt={p.brand} loading="lazy" style={{
                  position: "absolute", inset: 0, width: "100%", height: "100%",
                  objectFit: "cover", display: "block",
                }} />
                {/* Dark gradient overlay */}
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0) 55%, rgba(0,0,0,0.85) 100%)",
                }} />
                {/* Platform badge */}
                <div style={{
                  position: "absolute", top: 16, left: 16,
                  background: "rgba(255,255,255,0.14)", backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,255,255,0.25)",
                  color: "#fff", fontSize: 11, fontWeight: 700, padding: "6px 12px",
                  borderRadius: 50, letterSpacing: "0.5px", textTransform: "uppercase",
                }}>{platformLabel(p.platform)}</div>
                {/* Play button */}
                <div style={{
                  position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <div style={{
                    width: 64, height: 64, borderRadius: "50%", background: "rgba(255,255,255,0.2)",
                    backdropFilter: "blur(10px)", display: "flex", alignItems: "center", justifyContent: "center",
                    border: "2px solid rgba(255,255,255,0.5)",
                  }}>
                    <Play size={24} color="#fff" fill="#fff" />
                  </div>
                </div>
                {/* Info */}
                <div style={{
                  position: "absolute", bottom: 0, left: 0, right: 0,
                  padding: "48px 22px 22px",
                }}>
                  <span style={{ color: "rgba(255,255,255,0.75)", fontSize: 11, fontWeight: 600, letterSpacing: "0.5px", textTransform: "uppercase" }}>{p.tag}</span>
                  <h3 style={{ color: "#fff", fontSize: 20, fontWeight: 800, margin: "6px 0 0", letterSpacing: "-0.3px" }}>{p.brand}</h3>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={0.3}>
          <div style={{ textAlign: "center", marginTop: 48 }}>
            <a href="#contacto" style={{
              display: "inline-flex", alignItems: "center", gap: 8, color: "#E5B24C",
              fontWeight: 700, fontSize: 16, textDecoration: "none", transition: "gap 0.3s",
            }} onMouseEnter={e => e.currentTarget.style.gap = "12px"}
              onMouseLeave={e => e.currentTarget.style.gap = "8px"}>
              ¿Quieres que contemos la historia de tu marca? <ChevronRight size={18} />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── Methodology ───
function MethodSection() {
  const steps = [
    { n: "01", icon: <Eye size={28} />, title: "Contexto", desc: "Situamos al espectador en un mundo que reconoce. En los primeros 3 segundos, tiene que pensar: esto va conmigo.", color: "#D4603E" },
    { n: "02", icon: <Zap size={28} />, title: "Tensión", desc: "Introducimos el conflicto. ¿Qué pasa si no se resuelve? La tensión genera atención y mantiene enganchado.", color: "#7A8B5C" },
    { n: "03", icon: <Sparkles size={28} />, title: "Transformación", desc: "El producto entra como catalizador del cambio. El héroe es el cliente; tu producto es la herramienta.", color: "#E5B24C" },
    { n: "04", icon: <Heart size={28} />, title: "Resonancia", desc: "El cierre no es un CTA frío. Es un momento que deja huella. El espectador tiene que sentir algo.", color: "#F5EEDC" },
  ];
  return (
    <section id="metodo" style={{ padding: "120px 24px", background: "#2A1E18", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(212,96,62,0.05) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 2 }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 72 }}>
            <span style={{ color: "#E5B24C", fontSize: 13, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", display: "block", marginBottom: 16 }}>Nuestra metodología</span>
            <h2 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800, color: "#fff", lineHeight: 1.1, margin: "0 0 20px", letterSpacing: "-1px" }}>
              No improvisamos.<br />
              <span style={{ color: "#E5B24C" }}>Tenemos un método.</span>
            </h2>
            <p style={{ color: "#F5EEDC", fontSize: 18, maxWidth: 600, margin: "0 auto", lineHeight: 1.7 }}>
              Cada pieza de contenido sigue nuestra metodología narrativa: <strong style={{ color: "#E5B24C" }}>El Arco Mochito</strong>.
            </p>
          </div>
        </FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24 }}>
          {steps.map((s, i) => (
            <FadeIn key={i} delay={i * 0.15}>
              <div style={{
                background: "rgba(255,255,255,0.05)", border: "1px solid rgba(212,96,62,0.15)",
                borderRadius: 20, padding: 36, transition: "all 0.4s", cursor: "default",
                backdropFilter: "blur(10px)",
              }} onMouseEnter={e => { e.currentTarget.style.background = "rgba(212,96,62,0.1)"; e.currentTarget.style.borderColor = "rgba(212,96,62,0.4)"; e.currentTarget.style.transform = "translateY(-6px)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.borderColor = "rgba(212,96,62,0.15)"; e.currentTarget.style.transform = "none"; }}>
                <div style={{ fontSize: 48, fontWeight: 900, color: "rgba(212,96,62,0.2)", marginBottom: 8, lineHeight: 1 }}>{s.n}</div>
                <div style={{ color: "#E5B24C", marginBottom: 16 }}>{s.icon}</div>
                <h3 style={{ color: "#fff", fontSize: 22, fontWeight: 700, marginBottom: 12 }}>{s.title}</h3>
                <p style={{ color: "#F5EEDC", fontSize: 15, lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Contact ───
function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "", source: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError("");
    try {
      const res = await fetch("https://formsubmit.co/ajax/mochitomedia@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: formData.message,
          source: formData.source,
          _subject: "Nuevo contacto desde mochitomedia.com",
          _template: "table",
          _captcha: "false",
        }),
      });
      if (!res.ok) throw new Error("Error al enviar");
      setSent(true);
    } catch (err) {
      setError("No se ha podido enviar. Prueba de nuevo o escríbenos directamente a mochitomedia@gmail.com");
    } finally {
      setSending(false);
    }
  };
  const inputStyle = {
    width: "100%", padding: "14px 18px", borderRadius: 12, border: "1px solid #E8DCC4",
    fontSize: 15, fontFamily: "inherit", background: "#F5EEDC", outline: "none",
    transition: "border-color 0.3s, box-shadow 0.3s", boxSizing: "border-box",
  };
  return (
    <section id="contacto" style={{ padding: "120px 24px", background: "#F5EEDC" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span style={{ color: "#D4603E", fontSize: 13, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", display: "block", marginBottom: 16 }}>Contacto</span>
            <h2 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800, color: "#2A1E18", lineHeight: 1.1, margin: "0 0 20px", letterSpacing: "-1px" }}>
              Tu historia empieza aquí.
            </h2>
            <p style={{ color: "#6B7280", fontSize: 18, maxWidth: 550, margin: "0 auto", lineHeight: 1.7 }}>
              Cuéntanos qué necesitas y te proponemos cómo contarlo. Sin compromiso, sin PowerPoints eternos.
            </p>
          </div>
        </FadeIn>
        <FadeIn delay={0.2}>
          {sent ? (
            <div style={{ textAlign: "center", padding: 60, background: "#fff", borderRadius: 24, border: "1px solid #E8DCC4" }}>
              <div style={{ width: 64, height: 64, borderRadius: "50%", background: "#D4603E", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                <Send size={28} color="#fff" />
              </div>
              <h3 style={{ fontSize: 24, fontWeight: 700, color: "#2A1E18", marginBottom: 8 }}>Mensaje enviado</h3>
              <p style={{ color: "#6B7280", fontSize: 16 }}>Te responderemos en menos de 24 horas.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ background: "#fff", borderRadius: 24, padding: "48px 40px", border: "1px solid #E8DCC4", boxShadow: "0 8px 40px rgba(42,30,24,0.05)" }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20, marginBottom: 20 }}>
                <div>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#2A1E18", marginBottom: 6 }}>Nombre</label>
                  <input style={inputStyle} placeholder="Tu nombre" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
                    onFocus={e => { e.target.style.borderColor = "#D4603E"; e.target.style.boxShadow = "0 0 0 3px rgba(212,96,62,0.1)"; }}
                    onBlur={e => { e.target.style.borderColor = "#E8DCC4"; e.target.style.boxShadow = "none"; }} />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#2A1E18", marginBottom: 6 }}>Email</label>
                  <input style={inputStyle} type="email" placeholder="tu@email.com" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
                    onFocus={e => { e.target.style.borderColor = "#D4603E"; e.target.style.boxShadow = "0 0 0 3px rgba(212,96,62,0.1)"; }}
                    onBlur={e => { e.target.style.borderColor = "#E8DCC4"; e.target.style.boxShadow = "none"; }} />
                </div>
              </div>
              <div style={{ marginBottom: 20 }}>
                <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#2A1E18", marginBottom: 6 }}>Empresa / Marca</label>
                <input style={inputStyle} placeholder="Nombre de tu marca o empresa" value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})}
                  onFocus={e => { e.target.style.borderColor = "#D4603E"; e.target.style.boxShadow = "0 0 0 3px rgba(212,96,62,0.1)"; }}
                  onBlur={e => { e.target.style.borderColor = "#E8DCC4"; e.target.style.boxShadow = "none"; }} />
              </div>
              <div style={{ marginBottom: 20 }}>
                <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#2A1E18", marginBottom: 6 }}>¿Qué necesitas?</label>
                <textarea style={{ ...inputStyle, minHeight: 120, resize: "vertical" }} placeholder="Cuéntanos sobre tu proyecto, qué buscas, qué te falta..." value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}
                  onFocus={e => { e.target.style.borderColor = "#D4603E"; e.target.style.boxShadow = "0 0 0 3px rgba(212,96,62,0.1)"; }}
                  onBlur={e => { e.target.style.borderColor = "#E8DCC4"; e.target.style.boxShadow = "none"; }} />
              </div>
              <div style={{ marginBottom: 32 }}>
                <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#2A1E18", marginBottom: 6 }}>¿Cómo nos has conocido?</label>
                <select style={{ ...inputStyle, cursor: "pointer" }} value={formData.source} onChange={e => setFormData({...formData, source: e.target.value})}>
                  <option value="">Selecciona una opción</option>
                  <option value="redes">Redes sociales</option>
                  <option value="recomendacion">Recomendación</option>
                  <option value="google">Google</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
              <button type="submit" disabled={sending} style={{
                width: "100%", padding: "16px", borderRadius: 14, border: "none", cursor: sending ? "not-allowed" : "pointer",
                background: "#D4603E", color: "#fff",
                fontSize: 16, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                boxShadow: "0 8px 30px rgba(212,96,62,0.3)", transition: "all 0.3s",
                opacity: sending ? 0.7 : 1,
              }} onMouseEnter={e => { if (!sending) { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(212,96,62,0.4)"; } }}
                onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 8px 30px rgba(212,96,62,0.3)"; }}>
                {sending ? "Enviando..." : <>Enviar mensaje <Send size={18} /></>}
              </button>
              {error && (
                <p style={{ textAlign: "center", color: "#C8493E", fontSize: 14, marginTop: 12 }}>{error}</p>
              )}
              <p style={{ textAlign: "center", color: "#6B7280", fontSize: 14, marginTop: 16 }}>
                También puedes escribirnos a <strong style={{ color: "#E5B24C" }}>mochitomedia@gmail.com</strong>.
              </p>
            </form>
          )}
        </FadeIn>
      </div>
    </section>
  );
}

// ─── Footer ───
function FooterSection() {
  return (
    <footer style={{ background: "#2A1E18", padding: "64px 24px 32px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 40, marginBottom: 48 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12, color: "#fff" }}>
              <Logo size={32} />
              <span style={{ color: "#fff", fontWeight: 800, fontSize: 18 }}>mochito</span>
              <span style={{ color: "#E5B24C", fontWeight: 300, fontSize: 18 }}>media</span>
            </div>
            <p style={{ color: "#F5EEDC", fontSize: 14, maxWidth: 280, lineHeight: 1.6 }}>Agencia de creadores UGC y creación de contenido con storytelling para marcas modernas.</p>
          </div>
          <div style={{ display: "flex", gap: 48, flexWrap: "wrap" }}>
            <div>
              <h4 style={{ color: "#E5B24C", fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>Navegación</h4>
              {[
                { label: "Nosotros", href: "/#nosotros" },
                { label: "Servicios", href: "/#servicios" },
                { label: "Portfolio", href: "/#portfolio" },
                { label: "Método", href: "/#metodo" },
                { label: "Blog", href: "/blog" },
                { label: "Contacto", href: "/#contacto" },
              ].map(l => (
                <a key={l.label} href={l.href} style={{ display: "block", color: "#F5EEDC", textDecoration: "none", fontSize: 14, marginBottom: 8, transition: "color 0.3s" }}
                  onMouseEnter={e => e.target.style.color = "#E5B24C"} onMouseLeave={e => e.target.style.color = "#F5EEDC"}>{l.label}</a>
              ))}
            </div>
            <div>
              <h4 style={{ color: "#E5B24C", fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>Contacto</h4>
              <p style={{ color: "#F5EEDC", fontSize: 14, marginBottom: 8 }}>mochitomedia@gmail.com</p>
              <div style={{ display: "flex", gap: 12, marginTop: 16 }}>
                {[Instagram, Youtube, Linkedin, MessageCircle].map((Icon, i) => (
                  <a key={i} href="#" style={{
                    width: 40, height: 40, borderRadius: 10, background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#F5EEDC", transition: "all 0.3s", textDecoration: "none",
                  }} onMouseEnter={e => { e.currentTarget.style.background = "rgba(229,178,76,0.2)"; e.currentTarget.style.borderColor = "#E5B24C"; e.currentTarget.style.color = "#E5B24C"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; e.currentTarget.style.color = "#F5EEDC"; }}>
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Bottom */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 24, textAlign: "center" }}>
          <p style={{ color: "rgba(245,238,220,0.7)", fontSize: 13, margin: 0 }}>© 2026 Mochito Media. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

// ─── CTA Banner before footer ───
function CTABanner() {
  return (
    <section style={{ padding: "100px 24px", background: "#fff", textAlign: "center" }}>
      <FadeIn>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(28px, 5vw, 48px)", fontWeight: 800, color: "#2A1E18", lineHeight: 1.15, margin: "0 0 20px", letterSpacing: "-1px" }}>
            Tu marca tiene algo que contar.<br />
            <span style={{ color: "#D4603E" }}>
              Déjanos ayudarte a que el mundo lo escuche.
            </span>
          </h2>
          <a href="#contacto" style={{
            display: "inline-flex", alignItems: "center", gap: 8, marginTop: 24,
            background: "#D4603E", color: "#fff", padding: "18px 40px",
            borderRadius: 50, fontSize: 17, fontWeight: 700, textDecoration: "none",
            boxShadow: "0 8px 30px rgba(212,96,62,0.35)", transition: "all 0.3s",
          }}>Empezar ahora <ChevronRight size={20} /></a>
        </div>
      </FadeIn>
    </section>
  );
}

// ─── Main App ───
export default function MochitoMediaWeb() {
  return (
    <div style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", margin: 0, padding: 0, overflowX: "hidden", background: "#fff" }}>
      <Navbar />
      <Hero />
      <ProblemSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <MethodSection />
      <ContactSection />
      <CTABanner />
      <FooterSection />
    </div>
  );
}
