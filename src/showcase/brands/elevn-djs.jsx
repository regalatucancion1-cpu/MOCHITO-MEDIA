// ELEVN DJ'S — marca real. DJ agency for weddings and events in Spain.
// "The right DJ for your wedding in Spain. No guesswork."
// Voz: internacional, pro, bilingüe, directa.
const dark = "#0E0E0E";
const darkMid = "#1A1A1A";
const darkSoft = "#2A2927";
const orange = "#C46A35";
const orangeLight = "#D47A42";
const cream = "#F0EDE8";
const creamSoft = "rgba(240,237,232,.76)";

const display = "'League Spartan', 'Inter', sans-serif";
const sans = "'Inter', system-ui, sans-serif";
const mono = "'Space Mono', 'JetBrains Mono', monospace";

const LOGO_WHITE = "/showcase-assets/elevn/elevn-logo-white.png";
const LOGO_BLACK = "/showcase-assets/elevn/elevn-logo-black.png";

// ---- Logo using real PNG ----
export function ElevnLogo({ color = cream, size = 1, inverted = false }) {
  const src = inverted ? LOGO_BLACK : LOGO_WHITE;
  // Logo is horizontal. Approx aspect ratio 3.5:1.
  const height = 46 * size;
  return (
    <img src={src} alt="ELEVN DJS" style={{
      height, width: "auto", display: "block",
      filter: color !== cream && color !== "#fff" && !inverted ? "none" : "none",
    }} />
  );
}

// ---- Branding piece ----
function ElevnBranding() {
  return (
    <div style={{ width: 1080, height: 1350, background: dark, color: cream,
      padding: "80px 80px", display: "flex", flexDirection: "column", justifyContent: "space-between",
      position: "relative", overflow: "hidden" }}>
      {/* diagonal accent */}
      <div style={{ position: "absolute", top: 0, right: 0, width: 420, height: 420,
        background: `radial-gradient(circle, rgba(196,106,53,.15) 0%, transparent 65%)`, pointerEvents: "none" }} />

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", position: "relative" }}>
        <div style={{ fontFamily: mono, fontSize: 13, letterSpacing: ".3em", textTransform: "uppercase", color: orange, fontWeight: 700 }}>
          Brand identity
        </div>
        <div style={{ fontFamily: mono, fontSize: 13, letterSpacing: ".3em", textTransform: "uppercase", color: creamSoft, fontWeight: 400 }}>
          /proj · elevn
        </div>
      </div>

      <div style={{ textAlign: "center", position: "relative" }}>
        <img src={LOGO_WHITE} alt="ELEVN" style={{ width: 620, height: "auto", display: "block", margin: "0 auto" }} />
        <div style={{ fontFamily: sans, fontSize: 18, fontWeight: 500, color: creamSoft,
          letterSpacing: ".32em", textTransform: "uppercase", marginTop: 38 }}>
          — DJ Agency · Spain —
        </div>
        <div style={{ fontFamily: display, fontSize: 42, fontWeight: 800,
          color: cream, marginTop: 28, letterSpacing: "-0.02em", textTransform: "uppercase" }}>
          No guesswork.
        </div>
      </div>

      <div style={{ position: "relative" }}>
        <div style={{ display: "flex", gap: 10, marginBottom: 24 }}>
          {[dark, darkMid, darkSoft, orange, orangeLight, cream].map((c, i) => (
            <div key={i} style={{ flex: 1, height: 52, background: c, border: `1px solid rgba(240,237,232,.08)`, display: "flex", alignItems: "flex-end", padding: "6px 8px" }}>
              <span style={{ fontFamily: mono, fontSize: 9, color: i < 4 ? cream : dark, fontWeight: 700 }}>{c}</span>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline",
          borderTop: `1px solid ${orange}55`, paddingTop: 16 }}>
          <div style={{ display: "flex", gap: 32 }}>
            <div><span style={{ fontFamily: display, fontSize: 34, color: cream, fontWeight: 900, textTransform: "uppercase" }}>Aa</span> <span style={{ fontFamily: mono, fontSize: 10, letterSpacing: ".24em", color: orangeLight, textTransform: "uppercase" }}>League Spartan</span></div>
            <div><span style={{ fontFamily: sans, fontSize: 30, color: cream, fontWeight: 500 }}>Aa</span> <span style={{ fontFamily: mono, fontSize: 10, letterSpacing: ".24em", color: orangeLight, textTransform: "uppercase" }}>Inter</span></div>
            <div><span style={{ fontFamily: mono, fontSize: 28, color: cream, fontWeight: 700 }}>Aa</span> <span style={{ fontFamily: mono, fontSize: 10, letterSpacing: ".24em", color: orangeLight, textTransform: "uppercase" }}>Space Mono</span></div>
          </div>
          <div style={{ fontFamily: mono, fontSize: 10, letterSpacing: ".36em", textTransform: "uppercase", color: orange, fontWeight: 700 }}>Live · cliente real</div>
        </div>
      </div>
    </div>
  );
}

// ---- Post — real photo, confident ----
function ElevnPost() {
  return (
    <div style={{ width: 1080, height: 1350, position: "relative", overflow: "hidden",
      background: `linear-gradient(180deg, rgba(14,14,14,.55) 0%, rgba(14,14,14,.35) 50%, rgba(14,14,14,.95) 100%), url('/showcase-assets/elevn/dj-mixing.jpg') center/cover`,
      color: cream, padding: "80px 80px",
      display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <ElevnLogo size={1.2} />
        <div style={{ fontFamily: mono, fontSize: 13, letterSpacing: ".28em", textTransform: "uppercase", color: orangeLight, fontWeight: 700, textAlign: "right", lineHeight: 1.6 }}>
          No.11 / 2026<br />
          <span style={{ color: creamSoft, fontWeight: 400 }}>dj matching</span>
        </div>
      </div>

      <div>
        <div style={{ fontFamily: mono, fontSize: 14, fontWeight: 700, letterSpacing: ".34em", textTransform: "uppercase", color: orange, marginBottom: 22 }}>
          For modern weddings —
        </div>
        <h1 style={{ fontFamily: display, fontWeight: 900,
          fontSize: 148, lineHeight: .88, letterSpacing: "-0.035em", textTransform: "uppercase",
          margin: 0, color: cream }}>
          The right DJ<br />
          <span style={{ color: orangeLight }}>for your<br />wedding</span><br />
          in Spain.
        </h1>
        <p style={{ fontFamily: sans, fontSize: 21, lineHeight: 1.5, fontWeight: 400,
          color: creamSoft, marginTop: 28, maxWidth: 720 }}>
          Tell us your taste, your crowd and your venue. We match you with the right DJ in 48h. You handle the party, we handle the music.
        </p>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end",
        fontFamily: mono, fontSize: 13, fontWeight: 700, letterSpacing: ".22em", textTransform: "uppercase", color: creamSoft }}>
        <span>@elevndjs</span>
        <span style={{ color: orangeLight }}>elevn.es</span>
      </div>
    </div>
  );
}

// ---- Story — bilingual feature ----
function ElevnStory() {
  return (
    <div style={{ width: 1080, height: 1920, position: "relative",
      background: `linear-gradient(180deg, rgba(14,14,14,.35) 0%, rgba(14,14,14,.7) 55%, rgba(14,14,14,.98) 100%), url('/showcase-assets/elevn/crowd.jpg') center/cover`,
      color: cream, padding: "150px 80px 130px",
      display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <ElevnLogo size={1.3} />
        <div style={{
          fontFamily: mono, fontSize: 14, fontWeight: 700,
          letterSpacing: ".3em", textTransform: "uppercase",
          color: cream, padding: "10px 18px",
          border: `1px solid ${orange}`, background: "rgba(14,14,14,.4)",
        }}>48H MATCH</div>
      </div>

      <div>
        <div style={{ fontFamily: mono, fontSize: 15, fontWeight: 700,
          letterSpacing: ".4em", textTransform: "uppercase", color: orange, marginBottom: 30 }}>
          How it works —
        </div>

        <h1 style={{ fontFamily: display, fontWeight: 900,
          fontSize: 144, lineHeight: .86, letterSpacing: "-0.03em", textTransform: "uppercase",
          margin: 0, color: cream }}>
          Three<br />
          <span style={{ color: orangeLight }}>questions.</span><br />
          One DJ.<br />
          Zero drama.
        </h1>

        <div style={{ marginTop: 60, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
          {[
            ["01", "Tu vibe", "Your taste"],
            ["02", "La fiesta", "Your crowd"],
            ["03", "El sitio", "Your venue"],
          ].map(([n, es, en], i) => (
            <div key={i} style={{ padding: "18px 14px", background: "rgba(196,106,53,.1)", border: `1px solid ${orange}44` }}>
              <div style={{ fontFamily: mono, fontSize: 18, fontWeight: 700, color: orange }}>{n}</div>
              <div style={{ fontFamily: display, fontSize: 24, fontWeight: 800, color: cream, textTransform: "uppercase", marginTop: 8 }}>{es}</div>
              <div style={{ fontFamily: sans, fontSize: 12, color: creamSoft, fontStyle: "italic", marginTop: 2 }}>{en}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        <div style={{
          background: orange, color: cream,
          fontFamily: display, fontWeight: 900, fontSize: 30,
          letterSpacing: ".02em", textTransform: "uppercase",
          padding: "22px 40px", boxShadow: "0 12px 28px rgba(0,0,0,.5)",
        }}>Start the match →</div>
        <div style={{ fontFamily: mono, fontSize: 11, color: creamSoft, letterSpacing: ".3em", textTransform: "uppercase", textAlign: "right", lineHeight: 1.6 }}>
          Link in bio<br /><span style={{ color: orangeLight }}>elevn.es</span>
        </div>
      </div>
    </div>
  );
}

// ---- Reel — confident statement ----
function ElevnReel() {
  return (
    <div style={{ width: 1080, height: 1920, padding: "90px 80px 130px",
      display: "flex", flexDirection: "column", justifyContent: "space-between", color: cream,
      background: "linear-gradient(180deg, rgba(14,14,14,.75) 0%, rgba(14,14,14,.2) 30%, rgba(14,14,14,.1) 55%, rgba(14,14,14,.95) 100%)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <ElevnLogo size={1.2} />
        <div style={{
          fontFamily: mono, fontSize: 13, fontWeight: 700,
          letterSpacing: ".3em", textTransform: "uppercase",
          color: cream, padding: "12px 18px",
          border: `1px solid ${orange}`, background: "rgba(14,14,14,.5)",
          display: "inline-flex", alignItems: "center", gap: 12,
        }}>
          <span style={{ width: 10, height: 10, borderRadius: "50%", background: orange }} />
          Behind the match
        </div>
      </div>

      <div />

      <div>
        <div style={{ fontFamily: mono, fontSize: 14, fontWeight: 700,
          letterSpacing: ".34em", textTransform: "uppercase", color: orange, marginBottom: 20 }}>
          Episode 03 —
        </div>
        <h1 style={{ fontFamily: display, fontWeight: 900,
          fontSize: 120, lineHeight: .88, letterSpacing: "-0.035em", textTransform: "uppercase",
          margin: 0, color: cream }}>
          From <span style={{ color: orangeLight }}>Manhattan</span><br />
          to Menorca.
        </h1>
        <p style={{
          fontFamily: sans, fontSize: 26, lineHeight: 1.4, fontWeight: 400,
          color: creamSoft, marginTop: 22, maxWidth: 760,
        }}>
          How we picked the DJ for a New Yorker bride getting married on the island. In 48 hours, three questions.
        </p>
        <div style={{
          marginTop: 28, borderTop: `1px solid ${orange}`, paddingTop: 16,
          display: "flex", justifyContent: "space-between", alignItems: "center",
          fontFamily: mono, fontSize: 12, fontWeight: 700, letterSpacing: ".3em", textTransform: "uppercase", color: creamSoft,
        }}>
          <span>Behind the match</span>
          <span style={{ color: orangeLight }}>elevn.es</span>
        </div>
      </div>
    </div>
  );
}

const elevnDjs = {
  slug: "elevn-djs",
  name: "ELEVN DJ'S",
  kicker: "DJ agency · España",
  tagline: "Matching modern couples with the right DJ for their wedding in Spain.",
  accent: orange,
  cardBg: dark,
  cardText: cream,
  videoSrc: "/showcase-assets/videos/elevn-djs.mp4",
  Logo: ElevnLogo,
  Branding: ElevnBranding,
  Post: ElevnPost,
  Story: ElevnStory,
  ReelOverlay: ElevnReel,
};

export default elevnDjs;
