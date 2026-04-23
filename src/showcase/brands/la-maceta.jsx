// LA MACETA — voz cálida, autodepreciante, de barrio.
// "Si se te han muerto todas, tranquilo, a todos nos pasa."
import Post from "../pieces/Post";
import Story from "../pieces/Story";
import Reel from "../pieces/Reel";

const cream = "#EFE7D6";
const creamSoft = "rgba(239,231,214,.82)";
const accent = "#D6C28E";
const earthLight = "#B89474";
const mossDark = "#2A3526";
const mossDeep = "#1A1E14";

const serif = "'Fraunces', Georgia, serif";
const sans = "'Inter', system-ui, sans-serif";
const mono = "'JetBrains Mono', monospace";

// ---- Logo (pot icon + lockup) ----
export function MacetaLogo({ color = cream, size = 1 }) {
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 16 * size, color, lineHeight: 1 }}>
      <svg width={44 * size} height={44 * size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <path d="M10 16h20l-2 18a2 2 0 0 1-2 2H14a2 2 0 0 1-2-2L10 16Z" stroke={color} strokeWidth="1.6" />
        <path d="M8 14h24" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
        <path d="M18 12c0-4 2-6 4-6M18 12c0-3-2-4-4-5" stroke={earthLight} strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="18" cy="6" r="1.2" fill={earthLight} />
      </svg>
      <div>
        <div style={{ fontFamily: serif, fontSize: 30 * size, fontWeight: 600, fontStyle: "italic", letterSpacing: "-0.015em" }}>la maceta</div>
        <div style={{ fontFamily: mono, fontSize: 9 * size, fontWeight: 500, letterSpacing: ".36em", textTransform: "uppercase", marginTop: 2, opacity: .7 }}>Plantas · Barcelona</div>
      </div>
    </div>
  );
}

// ---- Branding piece 1080x1350 — logo hero + palette + type ----
function MacetaBranding() {
  return (
    <div style={{
      width: 1080, height: 1350, background: cream, color: mossDeep,
      padding: "80px 90px", display: "flex", flexDirection: "column", justifyContent: "space-between",
      position: "relative", overflow: "hidden",
    }}>
      {/* subtle grain */}
      <div style={{ position: "absolute", inset: 0, opacity: .5,
        backgroundImage: "radial-gradient(rgba(42,53,38,.08) 1px, transparent 1px)", backgroundSize: "18px 18px", pointerEvents: "none" }} />
      <div style={{ position: "relative", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div style={{ fontFamily: mono, fontSize: 14, letterSpacing: ".3em", textTransform: "uppercase", color: mossDark, fontWeight: 600 }}>Brand system · v1</div>
        <div style={{ fontFamily: mono, fontSize: 14, letterSpacing: ".3em", textTransform: "uppercase", color: earthLight, fontWeight: 600 }}>BCN / 2026</div>
      </div>

      <div style={{ position: "relative", textAlign: "center" }}>
        <MacetaLogo color={mossDark} size={3} />
        <div style={{ fontFamily: serif, fontStyle: "italic", fontSize: 32, color: mossDark, marginTop: 48, maxWidth: 760, marginLeft: "auto", marginRight: "auto", lineHeight: 1.35 }}>
          "Plantas que no se te mueren aunque las olvides."
        </div>
      </div>

      <div style={{ position: "relative" }}>
        <div style={{ display: "flex", gap: 10, marginBottom: 28 }}>
          {[mossDark, earthLight, cream, accent, "#3B4A36"].map((c, i) => (
            <div key={i} style={{ flex: 1, height: 56, background: c, border: `1px solid ${mossDark}20`, display: "flex", alignItems: "flex-end", padding: "6px 8px" }}>
              <span style={{ fontFamily: mono, fontSize: 10, color: i < 2 ? cream : mossDark, fontWeight: 600, letterSpacing: ".1em" }}>{c}</span>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", borderTop: `1px solid ${mossDark}30`, paddingTop: 16 }}>
          <div style={{ display: "flex", gap: 28 }}>
            <div><span style={{ fontFamily: serif, fontStyle: "italic", fontSize: 32, color: mossDark, fontWeight: 600 }}>Aa</span> <span style={{ fontFamily: mono, fontSize: 10, letterSpacing: ".24em", color: mossDark, textTransform: "uppercase" }}>Fraunces</span></div>
            <div><span style={{ fontFamily: sans, fontSize: 30, color: mossDark, fontWeight: 500 }}>Aa</span> <span style={{ fontFamily: mono, fontSize: 10, letterSpacing: ".24em", color: mossDark, textTransform: "uppercase" }}>Inter</span></div>
            <div><span style={{ fontFamily: mono, fontSize: 28, color: mossDark, fontWeight: 500 }}>Aa</span> <span style={{ fontFamily: mono, fontSize: 10, letterSpacing: ".24em", color: mossDark, textTransform: "uppercase" }}>Mono</span></div>
          </div>
          <div style={{ fontFamily: mono, fontSize: 10, letterSpacing: ".3em", textTransform: "uppercase", color: earthLight, fontWeight: 600 }}>— Identidad ·</div>
        </div>
      </div>
    </div>
  );
}

// ---- Post — autodepreciante cálido ----
function MacetaPost() {
  return (
    <div style={{
      width: 1080, height: 1350,
      background: `linear-gradient(180deg, rgba(26,30,20,.25) 0%, rgba(26,30,20,.55) 50%, rgba(10,14,8,.96) 100%), url('https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=1400') center 45%/cover`,
      color: cream, padding: "90px 90px 80px",
      display: "flex", flexDirection: "column", justifyContent: "space-between",
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <MacetaLogo color={cream} size={1} />
        <span style={{ fontFamily: mono, fontSize: 15, letterSpacing: ".14em", textTransform: "uppercase", color: creamSoft }}>
          Jueves a domingo · 10 a 20
        </span>
      </div>
      <div>
        <h1 style={{ fontFamily: serif, fontWeight: 500, fontSize: 108, lineHeight: 1.02, letterSpacing: "-0.03em", color: cream, margin: 0 }}>
          Si se te mueren<br />todas, tranqui.<br />
          <em style={{ fontStyle: "italic", fontWeight: 500, color: accent }}>A todos nos pasa.</em>
        </h1>
        <p style={{ fontFamily: sans, fontSize: 22, lineHeight: 1.5, color: creamSoft, maxWidth: 720, marginTop: 30 }}>
          Te vamos a dar una que no se entera si te vas de vacaciones. Tres instrucciones en un post-it, te la llevas a casa, y si algo pasa, te la cambiamos.
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end",
        fontFamily: mono, fontSize: 14, letterSpacing: ".1em", textTransform: "uppercase", color: "rgba(239,231,214,.55)" }}>
        <span>@lamaceta.bcn</span>
        <span style={{ color: earthLight, fontWeight: 600 }}>Verdi 43 · Gràcia</span>
      </div>
    </div>
  );
}

// ---- Story — mismo tono, formato vertical ----
function MacetaStory() {
  return (
    <div style={{
      width: 1080, height: 1920,
      background: `linear-gradient(180deg, rgba(26,30,20,.35) 0%, rgba(26,30,20,.65) 38%, rgba(26,30,20,.8) 58%, rgba(10,14,8,.96) 100%), url('https://images.pexels.com/photos/4505447/pexels-photo-4505447.jpeg?auto=compress&cs=tinysrgb&w=1400') center 40%/cover`,
      color: cream, padding: "200px 90px 140px",
      display: "flex", flexDirection: "column", justifyContent: "space-between",
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <MacetaLogo color={cream} size={1.1} />
        <span style={{ fontFamily: mono, fontSize: 16, letterSpacing: ".16em", textTransform: "uppercase", color: creamSoft }}>
          Domingo · 11h
        </span>
      </div>
      <div>
        <span style={{ display: "inline-block", fontFamily: mono, fontSize: 20, fontWeight: 500, color: cream,
          letterSpacing: ".24em", textTransform: "uppercase", padding: "10px 18px", borderRadius: 60,
          background: "rgba(42,53,38,.55)", border: "1px solid rgba(239,231,214,.2)", marginBottom: 26 }}>Quedan 4 plazas</span>
        <h1 style={{ fontFamily: serif, fontWeight: 500, fontStyle: "italic",
          fontSize: 120, lineHeight: 1.0, letterSpacing: "-0.025em", color: cream, margin: 0 }}>
          Ven y te enseñamos<br />a trasplantar.<br />
          <span style={{ color: accent }}>Prometemos<br />no reírnos.</span>
        </h1>
        <p style={{ fontFamily: sans, fontSize: 26, lineHeight: 1.4, color: creamSoft, maxWidth: 820, marginTop: 34 }}>
          Dos horas, tres plantas y un café decente. Si nunca has cogido una pala, mejor. Así no tienes que desaprender nada. 18€ con todo.
        </p>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
        <div style={{ background: cream, color: mossDark, fontFamily: sans, fontWeight: 700, fontSize: 26,
          letterSpacing: ".06em", textTransform: "uppercase", padding: "24px 40px", borderRadius: 60,
          boxShadow: "0 12px 28px rgba(0,0,0,.3)" }}>Guardar plaza</div>
        <span style={{ fontFamily: mono, fontSize: 16, color: "rgba(239,231,214,.75)", letterSpacing: ".1em", textTransform: "uppercase" }}>Link en bio</span>
      </div>
    </div>
  );
}

// ---- Reel — self-deprecating kicker ----
function MacetaReel() {
  return (
    <div style={{
      width: 1080, height: 1920, padding: "90px 90px 110px",
      display: "flex", flexDirection: "column", justifyContent: "space-between", color: cream,
      background: "linear-gradient(180deg, rgba(26,30,20,.45) 0%, rgba(26,30,20,.25) 40%, rgba(26,30,20,.25) 60%, rgba(10,14,8,.85) 100%)",
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <MacetaLogo color={cream} size={1.1} />
        <span style={{ display: "inline-flex", alignItems: "center", gap: 10, fontFamily: sans, fontWeight: 700,
          fontSize: 15, letterSpacing: ".22em", textTransform: "uppercase", padding: "10px 16px", borderRadius: 50,
          background: "rgba(239,231,214,.14)", backdropFilter: "blur(10px)", border: "1px solid rgba(239,231,214,.3)", color: cream }}>
          <span style={{ width: 0, height: 0, borderLeft: "9px solid currentColor", borderTop: "6px solid transparent", borderBottom: "6px solid transparent" }} />
          Reel
        </span>
      </div>
      <div style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 50 }}>
        <span style={{ display: "inline-block", fontFamily: mono, fontSize: 19, fontWeight: 500, color: cream,
          letterSpacing: ".26em", textTransform: "uppercase", padding: "10px 20px", borderRadius: 60,
          background: "rgba(26,30,20,.55)", border: "1px solid rgba(239,231,214,.22)" }}>Para gente que se va a Menorca</span>
        <h1 style={{ fontFamily: serif, fontWeight: 500, fontSize: 132, lineHeight: 1.0, letterSpacing: "-0.03em",
          color: cream, margin: 0, maxWidth: 940 }}>
          Tres plantas que<br />
          <em style={{ fontStyle: "italic", color: accent, fontWeight: 500 }}>aguantan<br />tus 15 días</em><br />
          sin verte.
        </h1>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end",
        fontFamily: mono, fontSize: 16, letterSpacing: ".1em", textTransform: "uppercase", color: "rgba(239,231,214,.6)" }}>
        <span style={{ fontFamily: serif, fontStyle: "italic", fontSize: 30, color: cream, letterSpacing: 0 }}>Dale al play</span>
        <span>0:42</span>
      </div>
    </div>
  );
}

const laMaceta = {
  slug: "la-maceta",
  name: "LA MACETA",
  kicker: "Jardinería · Barcelona",
  tagline: "Para gente que se le mueren las plantas pero no se rinde.",
  accent: earthLight,
  cardBg: mossDark,
  cardText: cream,
  videoSrc: "/showcase-assets/videos/la-maceta.mp4",
  Logo: MacetaLogo,
  Branding: MacetaBranding,
  Post: MacetaPost,
  Story: MacetaStory,
  ReelOverlay: MacetaReel,
};

export default laMaceta;
