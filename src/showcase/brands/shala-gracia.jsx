// SHALA GRÀCIA — voz calma, práctica, anti-spiritual bullshit.
// "No hace falta respirar raro. Solo venir."
const sage = "#8FA48B";
const sageDark = "#5F7459";
const clay = "#C88F7A";
const beige = "#F0E7D9";
const beigeSoft = "rgba(240,231,217,.82)";
const ink = "#2E352B";

const serif = "'Fraunces', Georgia, serif";
const sans = "'Inter', system-ui, sans-serif";
const mono = "'JetBrains Mono', monospace";

// ---- Thin serif wordmark with small tag ----
export function ShalaLogo({ color = ink, size = 1 }) {
  return (
    <div style={{ color, display: "inline-block", lineHeight: 1 }}>
      <div style={{
        fontFamily: serif, fontWeight: 500, fontStyle: "italic",
        fontSize: 52 * size, letterSpacing: "-0.01em",
      }}>shala</div>
      <div style={{
        fontFamily: sans, fontSize: 10 * size, fontWeight: 500,
        letterSpacing: ".4em", textTransform: "uppercase",
        marginTop: 6 * size, color: "currentColor", opacity: .65,
      }}>· Gràcia · Bcn</div>
    </div>
  );
}

// ---- Post 1080x1350 — mostly photo, small text ----
function ShalaPost() {
  return (
    <div style={{
      width: 1080, height: 1350,
      background: `linear-gradient(180deg, rgba(46,53,43,.1) 0%, rgba(46,53,43,.35) 70%, rgba(28,33,26,.65) 100%), url('https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=1400') center 30%/cover`,
      color: beige, position: "relative",
      display: "flex", flexDirection: "column", justifyContent: "space-between",
      padding: "72px 80px",
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <ShalaLogo color={beige} size={1} />
        <div style={{
          fontFamily: sans, fontSize: 11, fontWeight: 500,
          letterSpacing: ".36em", textTransform: "uppercase",
          color: beigeSoft, textAlign: "right", lineHeight: 1.8,
        }}>Yoga · pilates<br />mat · reformer</div>
      </div>
      <div style={{ textAlign: "center", maxWidth: 740, margin: "0 auto" }}>
        <h1 style={{
          fontFamily: serif, fontWeight: 500, fontStyle: "italic",
          fontSize: 104, lineHeight: 1.05, letterSpacing: "-0.02em",
          margin: 0, color: beige,
        }}>
          Clase para cuerpos<br />normales.
        </h1>
        <div style={{
          width: 40, height: 1, background: clay, margin: "36px auto",
        }} />
        <p style={{
          fontFamily: sans, fontSize: 17, lineHeight: 1.7, fontWeight: 400,
          color: beigeSoft, letterSpacing: ".02em", margin: 0,
        }}>
          No hace falta tocar el suelo con las manos.<br />No hace falta respirar raro. Solo venir.
        </p>
      </div>
      <div style={{
        display: "flex", justifyContent: "space-between", alignItems: "flex-end",
        fontFamily: sans, fontSize: 11, fontWeight: 500,
        letterSpacing: ".32em", textTransform: "uppercase", color: beigeSoft,
      }}>
        <span>c/ Verdi 87</span>
        <span>@shala.gracia</span>
      </div>
    </div>
  );
}

// ---- Story 1080x1920 — almost empty, single line ----
function ShalaStory() {
  return (
    <div style={{
      width: 1080, height: 1920,
      background: `linear-gradient(180deg, rgba(46,53,43,.4) 0%, rgba(46,53,43,.2) 22%, rgba(46,53,43,.75) 45%, rgba(46,53,43,.82) 72%, rgba(28,33,26,.95) 100%), url('https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=1400') center/cover`,
      color: beige,
      padding: "200px 80px 140px",
      display: "flex", flexDirection: "column", justifyContent: "space-between",
    }}>
      <div style={{ textAlign: "center" }}>
        <ShalaLogo color={beige} size={1.2} />
      </div>

      <div style={{ textAlign: "center" }}>
        <div style={{
          fontFamily: sans, fontSize: 13, fontWeight: 500,
          letterSpacing: ".44em", textTransform: "uppercase", color: clay,
          marginBottom: 40,
        }}>Horario — abril</div>

        <div style={{
          fontFamily: serif, fontWeight: 500, fontStyle: "italic",
          fontSize: 90, lineHeight: 1.15, letterSpacing: "-0.01em",
          color: beige, margin: 0,
        }}>
          Lunes a viernes,<br />
          de 7:30 a 21:00.<br />
          <span style={{ fontStyle: "italic", color: clay }}>
            Sábado<br />solo por la mañana.
          </span>
        </div>

        <div style={{
          marginTop: 56, width: 1, height: 64, background: beigeSoft, margin: "56px auto",
        }} />

        <div style={{
          fontFamily: sans, fontSize: 18, fontWeight: 400,
          letterSpacing: ".16em", textTransform: "uppercase", color: beige,
          lineHeight: 1.8,
        }}>
          Primera clase<br />
          <span style={{ fontFamily: serif, fontSize: 28, fontStyle: "italic", fontWeight: 400, textTransform: "none", letterSpacing: "-0.01em" }}>
            gratis
          </span>
        </div>
      </div>

      <div style={{
        textAlign: "center",
        fontFamily: sans, fontSize: 12, fontWeight: 500,
        letterSpacing: ".4em", textTransform: "uppercase", color: beigeSoft,
      }}>
        Reservas en link · shala.es
      </div>
    </div>
  );
}

// ---- Reel overlay — extremely minimal ----
function ShalaReel() {
  return (
    <div style={{
      width: 1080, height: 1920,
      padding: "90px 80px 130px",
      display: "flex", flexDirection: "column", justifyContent: "space-between",
      color: beige,
      background: "linear-gradient(180deg, rgba(46,53,43,.5) 0%, rgba(46,53,43,.0) 25%, rgba(46,53,43,.05) 70%, rgba(28,33,26,.7) 100%)",
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <ShalaLogo color={beige} size={0.9} />
        <div style={{
          fontFamily: sans, fontSize: 10, fontWeight: 500,
          letterSpacing: ".44em", textTransform: "uppercase", color: beigeSoft, textAlign: "right", lineHeight: 1.9,
        }}>Reel · serie<br />respiración</div>
      </div>

      <div style={{ textAlign: "center" }}>
        <div style={{
          width: 56, height: 56, borderRadius: "50%",
          border: `1.5px solid ${beige}`, margin: "0 auto 48px",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <div style={{
            width: 0, height: 0,
            borderLeft: `14px solid ${beige}`,
            borderTop: "9px solid transparent",
            borderBottom: "9px solid transparent",
            marginLeft: 4,
          }} />
        </div>
        <h1 style={{
          fontFamily: serif, fontWeight: 500, fontStyle: "italic",
          fontSize: 126, lineHeight: 1.02, letterSpacing: "-0.02em",
          color: beige, margin: 0,
        }}>
          Cuatro<br />
          respiraciones<br />
          <span style={{ color: clay }}>y ya te sientes<br />distinta.</span>
        </h1>
      </div>

      <div style={{
        textAlign: "center",
        fontFamily: sans, fontSize: 11, fontWeight: 500,
        letterSpacing: ".44em", textTransform: "uppercase", color: beigeSoft,
      }}>
        Respira · Suelta · Vuelve
      </div>
    </div>
  );
}

// ---- Branding piece ----
function ShalaBranding() {
  return (
    <div style={{ width: 1080, height: 1350, background: beige, color: ink,
      padding: "90px", display: "flex", flexDirection: "column", justifyContent: "space-between", position: "relative" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div style={{ fontFamily: mono, fontSize: 13, letterSpacing: ".36em", textTransform: "uppercase", color: sageDark, fontWeight: 500 }}>
          Brand · yoga studio
        </div>
        <div style={{ fontFamily: serif, fontStyle: "italic", fontSize: 22, color: clay, fontWeight: 400 }}>
          · Gràcia, BCN
        </div>
      </div>

      <div style={{ textAlign: "center" }}>
        <ShalaLogo color={ink} size={3} />
        <div style={{
          width: 40, height: 1, background: clay, margin: "48px auto",
        }} />
        <div style={{ fontFamily: serif, fontStyle: "italic", fontSize: 32, color: ink, fontWeight: 400, maxWidth: 720, margin: "0 auto", lineHeight: 1.4 }}>
          "Respirar ya es suficiente. Lo demás es opcional."
        </div>
      </div>

      <div>
        <div style={{ display: "flex", gap: 10, marginBottom: 24 }}>
          {[ink, sageDark, sage, clay, beige].map((c, i) => (
            <div key={i} style={{ flex: 1, height: 52, background: c, display: "flex", alignItems: "flex-end", padding: "6px 8px", border: `1px solid ${ink}15` }}>
              <span style={{ fontFamily: mono, fontSize: 9, color: i < 3 ? beige : ink, fontWeight: 500 }}>{c}</span>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", borderTop: `1px solid ${ink}30`, paddingTop: 16 }}>
          <div style={{ display: "flex", gap: 28 }}>
            <div><span style={{ fontFamily: serif, fontStyle: "italic", fontSize: 34, color: ink, fontWeight: 500 }}>Aa</span> <span style={{ fontFamily: mono, fontSize: 10, letterSpacing: ".24em", color: sageDark, textTransform: "uppercase" }}>Fraunces italic</span></div>
            <div><span style={{ fontFamily: sans, fontSize: 30, color: ink, fontWeight: 300 }}>Aa</span> <span style={{ fontFamily: mono, fontSize: 10, letterSpacing: ".24em", color: sageDark, textTransform: "uppercase" }}>Inter</span></div>
          </div>
          <div style={{ fontFamily: mono, fontSize: 10, letterSpacing: ".4em", textTransform: "uppercase", color: clay, fontWeight: 500 }}>Sistema · v1</div>
        </div>
      </div>
    </div>
  );
}

const shalaGracia = {
  slug: "shala-gracia",
  name: "SHALA GRÀCIA",
  kicker: "Yoga · Gràcia",
  tagline: "Yoga para cuerpos normales, sin espiritualidad forzada.",
  accent: sage,
  cardBg: beige,
  cardText: ink,
  videoSrc: "/showcase-assets/videos/shala-gracia.mp4",
  Logo: ShalaLogo,
  Branding: ShalaBranding,
  Post: ShalaPost,
  Story: ShalaStory,
  ReelOverlay: ShalaReel,
};

export default shalaGracia;
