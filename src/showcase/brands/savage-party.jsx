// SAVAGE PARTY — marca real del usuario. DJ + Live band para bodas destino.
// Assets reales: logo, fotos de press kit, vídeo. Paleta: rojo + amarillo + negro.
const red = "#E7180F";
const redDark = "#A8120A";
const yellow = "#FFD400";
const yellowSoft = "#FFEB6B";
const void_ = "#0A0A0A";
const smoke = "#1D1D1D";
const silver = "#D8D6D1";
const bone = "#FFFFFF";
const boneSoft = "rgba(255,255,255,.72)";

const sans = "'Inter', system-ui, sans-serif";
const display = "'Unbounded', 'Inter', sans-serif";
const mono = "'Space Mono', 'JetBrains Mono', monospace";

const LOGO = "/showcase-assets/savage/savage-logo.png";
const PHOTO_BAND = "/showcase-assets/savage/sp1.jpg";
const PHOTO_INSTRUMENTS = "/showcase-assets/savage/sp6.jpg";
const PHOTO_GUITAR = "/showcase-assets/savage/sp3.jpg";

// ---- Logo usando PNG real ----
export function SavageLogo({ size = 1, variant = "default" }) {
  const height = variant === "small" ? 60 * size : 120 * size;
  return (
    <img src={LOGO} alt="Savage Party" style={{
      height, width: "auto", display: "block",
      filter: "drop-shadow(0 0 0 transparent)",
    }} />
  );
}

// ---- Branding piece: logo monumental + paleta real ----
function SavageBranding() {
  return (
    <div style={{ width: 1080, height: 1350, background: red, color: bone,
      padding: "60px 70px", display: "flex", flexDirection: "column", justifyContent: "space-between",
      position: "relative", overflow: "hidden" }}>

      {/* yellow accent corner */}
      <div style={{ position: "absolute", top: 0, right: 0, width: 220, height: 220, background: yellow }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, width: 200, height: 14, background: void_ }} />

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", position: "relative", zIndex: 2 }}>
        <div style={{ fontFamily: mono, fontSize: 14, letterSpacing: ".3em", textTransform: "uppercase", color: bone, fontWeight: 700 }}>
          [ Brand · 001 ]
        </div>
        <div style={{ fontFamily: mono, fontSize: 14, letterSpacing: ".3em", textTransform: "uppercase", color: void_, fontWeight: 700 }}>
          BCN · /live
        </div>
      </div>

      {/* Logo real centered */}
      <div style={{ textAlign: "center", position: "relative", zIndex: 2 }}>
        <img src={LOGO} alt="Savage Party" style={{ width: 780, height: "auto", display: "block", margin: "0 auto" }} />
        <div style={{
          display: "inline-block", marginTop: 32,
          fontFamily: mono, fontSize: 15, fontWeight: 700,
          letterSpacing: ".44em", textTransform: "uppercase",
          color: red, background: bone, padding: "10px 18px",
        }}>DJ + SAX + GUITAR + DRUMS</div>
      </div>

      {/* Palette + type */}
      <div style={{ position: "relative", zIndex: 2 }}>
        <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
          {[void_, smoke, red, redDark, yellow, yellowSoft, bone].map((c, i) => (
            <div key={i} style={{ flex: 1, height: 46, background: c, border: c === bone ? `1px solid ${void_}22` : "none", display: "flex", alignItems: "flex-end", padding: "4px 6px" }}>
              <span style={{ fontFamily: mono, fontSize: 8, color: [void_, smoke, red, redDark].includes(c) ? bone : void_, fontWeight: 700 }}>{c}</span>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", borderTop: `2px solid ${yellow}`, paddingTop: 14 }}>
          <div style={{ display: "flex", gap: 24 }}>
            <div><span style={{ fontFamily: display, fontSize: 30, color: yellow, fontWeight: 900, textTransform: "uppercase" }}>Aa</span> <span style={{ fontFamily: mono, fontSize: 10, letterSpacing: ".24em", color: bone, textTransform: "uppercase" }}>Custom lettering</span></div>
            <div><span style={{ fontFamily: sans, fontSize: 28, color: bone, fontWeight: 600 }}>Aa</span> <span style={{ fontFamily: mono, fontSize: 10, letterSpacing: ".24em", color: bone, textTransform: "uppercase" }}>Inter</span></div>
          </div>
          <div style={{ fontFamily: mono, fontSize: 10, letterSpacing: ".3em", textTransform: "uppercase", color: void_, background: yellow, padding: "4px 8px", fontWeight: 700 }}>Proyecto propio</div>
        </div>
      </div>
    </div>
  );
}

// ---- Post: foto banda con instrumentos ----
function SavagePost() {
  return (
    <div style={{ width: 1080, height: 1350, position: "relative", overflow: "hidden",
      background: `linear-gradient(180deg, rgba(10,10,10,.25) 0%, rgba(10,10,10,.15) 45%, rgba(10,10,10,.85) 100%), url('${PHOTO_INSTRUMENTS}') center 20%/cover`,
      color: bone, padding: "60px 60px 70px",
      display: "flex", flexDirection: "column", justifyContent: "space-between" }}>

      {/* yellow slash top */}
      <div style={{ position: "absolute", top: 0, right: 0, width: 180, height: 22, background: yellow }} />

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <SavageLogo size={0.45} />
        <div style={{ fontFamily: mono, fontSize: 13, fontWeight: 700,
          letterSpacing: ".3em", textTransform: "uppercase", color: void_,
          background: yellow, padding: "8px 12px" }}>
          LIVE · set
        </div>
      </div>

      <div />

      <div>
        <div style={{ fontFamily: mono, fontSize: 14, fontWeight: 700, letterSpacing: ".3em", textTransform: "uppercase", color: yellow, marginBottom: 18 }}>
          — El formato —
        </div>
        <h1 style={{ fontFamily: display, fontWeight: 900,
          fontSize: 96, lineHeight: .9, letterSpacing: "-0.035em", textTransform: "uppercase",
          margin: 0, color: bone }}>
          Un DJ no basta.<br />
          <span style={{ background: red, color: bone, padding: "0 12px", display: "inline-block" }}>Saxo,</span>
          <span style={{ background: yellow, color: void_, padding: "0 12px", display: "inline-block", marginLeft: 6 }}>guitarra,</span><br />
          batería y todos<br />
          a la pista.
        </h1>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end",
        fontFamily: mono, fontSize: 13, fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase", color: boneSoft }}>
        <span>@lasavageparty</span>
        <span style={{ background: yellow, color: void_, padding: "4px 8px", fontWeight: 700 }}>savageparty.es</span>
      </div>
    </div>
  );
}

// ---- Story: foto banda sola con logo amarillo sobre rojo ----
function SavageStory() {
  return (
    <div style={{ width: 1080, height: 1920, position: "relative", overflow: "hidden",
      background: `linear-gradient(180deg, rgba(10,10,10,.15) 0%, rgba(10,10,10,.4) 60%, rgba(10,10,10,.92) 100%), url('${PHOTO_BAND}') center 30%/cover`,
      color: bone,
      padding: "150px 70px 130px",
      display: "flex", flexDirection: "column", justifyContent: "space-between" }}>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <SavageLogo size={0.5} />
        <div style={{ fontFamily: mono, fontSize: 14, fontWeight: 700,
          letterSpacing: ".3em", textTransform: "uppercase", color: bone, padding: "10px 16px",
          background: red }}>
          Next · 16.05
        </div>
      </div>

      <div />

      <div>
        <div style={{ fontFamily: mono, fontSize: 14, fontWeight: 700,
          letterSpacing: ".36em", textTransform: "uppercase", color: yellow, marginBottom: 22 }}>
          Poster · 012 —
        </div>
        <h1 style={{ fontFamily: display, fontWeight: 900,
          fontSize: 152, lineHeight: .85, letterSpacing: "-0.05em", textTransform: "uppercase",
          margin: 0, color: bone }}>
          We don't do<br />
          <span style={{ color: yellow }}>weddings.</span><br />
          We do<br />
          <span style={{ background: red, color: bone, padding: "0 14px", display: "inline-block" }}>parties.</span>
        </h1>

        <div style={{ marginTop: 32, display: "inline-flex", alignItems: "center", gap: 16,
          fontFamily: mono, fontSize: 14, fontWeight: 700,
          letterSpacing: ".36em", textTransform: "uppercase", color: void_,
          padding: "12px 22px", background: yellow }}>
          DJ · Sax · Guitar · Drums
        </div>
      </div>
    </div>
  );
}

// ---- Reel: foto guitar + overlay ----
function SavageReel() {
  return (
    <div style={{ width: 1080, height: 1920, padding: "90px 70px 130px",
      display: "flex", flexDirection: "column", justifyContent: "space-between", color: bone,
      background: "linear-gradient(180deg, rgba(10,10,10,.75) 0%, rgba(10,10,10,.15) 25%, rgba(10,10,10,.1) 55%, rgba(10,10,10,.92) 100%)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <SavageLogo size={0.5} />
        <div style={{
          fontFamily: mono, fontSize: 14, fontWeight: 700,
          letterSpacing: ".3em", textTransform: "uppercase", color: void_,
          background: yellow, padding: "12px 16px",
          display: "inline-flex", alignItems: "center", gap: 10,
        }}>
          <span style={{ width: 10, height: 10, borderRadius: "50%", background: red }} />
          Live cut
        </div>
      </div>

      <div />

      <div>
        <div style={{ fontFamily: mono, fontSize: 14, fontWeight: 700,
          letterSpacing: ".36em", textTransform: "uppercase", color: yellow, marginBottom: 20 }}>
          Boiler Room · boda 14.06 —
        </div>
        <h1 style={{ fontFamily: display, fontWeight: 900,
          fontSize: 128, lineHeight: .88, letterSpacing: "-0.04em", textTransform: "uppercase",
          margin: 0, color: bone }}>
          When the<br />
          <span style={{ color: yellow }}>sax</span> got off<br />
          the stage.
        </h1>
        <p style={{ fontFamily: sans, fontSize: 22, lineHeight: 1.45, fontWeight: 400,
          color: boneSoft, marginTop: 22, maxWidth: 740 }}>
          Set grabado en directo en La Paloma. Boiler Room para boda destino. Sube el volumen.
        </p>
        <div style={{
          marginTop: 24, borderTop: `2px solid ${yellow}`, paddingTop: 16,
          display: "flex", justifyContent: "space-between", alignItems: "center",
          fontFamily: mono, fontSize: 12, fontWeight: 700, letterSpacing: ".28em", textTransform: "uppercase", color: boneSoft,
        }}>
          <span>0:42 · Sound on ↑</span>
          <span style={{ color: yellow }}>savageparty.es</span>
        </div>
      </div>
    </div>
  );
}

const savageParty = {
  slug: "savage-party",
  name: "SAVAGE PARTY",
  kicker: "DJ + banda en directo",
  tagline: "Set con banda en directo. Boiler Room para bodas destino.",
  accent: yellow,
  cardBg: red,
  cardText: bone,
  videoSrc: "/showcase-assets/videos/savage-party.mp4",
  Logo: SavageLogo,
  Branding: SavageBranding,
  Post: SavagePost,
  Story: SavageStory,
  ReelOverlay: SavageReel,
};

export default savageParty;
