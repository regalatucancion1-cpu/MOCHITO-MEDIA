// CAFÉ ONZE — voz seca, anti-hipster. Barista cansado, directo.
// "Pide un normal y te sale bien. Pide uno raro, también."
const coffee = "#3A241A";
const coffeeDark = "#221511";
const copper = "#C48555";
const copperLight = "#E0A878";
const cream = "#F2EBDD";
const creamSoft = "rgba(242,235,221,.78)";

const serif = "'Playfair Display', Georgia, serif";
const sans = "'Inter', system-ui, sans-serif";
const mono = "'JetBrains Mono', monospace";

// ---- Logo ----
export function OnzeLogo({ color = cream, size = 1 }) {
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 18 * size, color }}>
      <div style={{ fontFamily: serif, fontWeight: 400, fontStyle: "italic",
        fontSize: 58 * size, lineHeight: 1, letterSpacing: "-0.04em",
        display: "flex", alignItems: "baseline", gap: 4 * size }}>
        <span style={{ fontSize: 26 * size, fontStyle: "italic", marginRight: 2 }}>Nº</span>
        <span>11</span>
      </div>
      <div style={{ borderLeft: `1px solid ${color}`, paddingLeft: 14 * size,
        fontFamily: sans, fontSize: 11 * size, fontWeight: 600,
        letterSpacing: ".28em", textTransform: "uppercase", lineHeight: 1.3 }}>
        café<br />onze
      </div>
    </div>
  );
}

// ---- Branding piece ----
function OnzeBranding() {
  return (
    <div style={{
      width: 1080, height: 1350, background: coffeeDark, color: cream,
      padding: "80px 90px", display: "flex", flexDirection: "column", justifyContent: "space-between",
      position: "relative", overflow: "hidden",
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div style={{ fontFamily: mono, fontSize: 14, letterSpacing: ".3em", textTransform: "uppercase", color: copperLight, fontWeight: 600 }}>
          Identidad · café
        </div>
        <div style={{ fontFamily: serif, fontStyle: "italic", fontSize: 20, color: creamSoft }}>
          desde 2019 ·
        </div>
      </div>

      {/* Giant ligature */}
      <div style={{ textAlign: "center", margin: "20px 0" }}>
        <div style={{ fontFamily: serif, fontWeight: 400, fontStyle: "italic",
          fontSize: 360, lineHeight: 0.8, letterSpacing: "-0.06em", color: copperLight }}>
          <span style={{ fontSize: 120, fontStyle: "italic", verticalAlign: "super", marginRight: 8 }}>Nº</span>11
        </div>
        <div style={{ fontFamily: sans, fontSize: 22, fontWeight: 600,
          letterSpacing: ".42em", textTransform: "uppercase", color: cream, marginTop: 24 }}>
          · Café Onze ·
        </div>
      </div>

      {/* Palette + type */}
      <div>
        <div style={{ display: "flex", gap: 10, marginBottom: 24 }}>
          {[coffeeDark, coffee, copper, copperLight, cream].map((c, i) => (
            <div key={i} style={{ flex: 1, height: 52, background: c, display: "flex", alignItems: "flex-end", padding: "6px 8px",
              border: `1px solid ${c === coffeeDark ? copper + "55" : "transparent"}` }}>
              <span style={{ fontFamily: mono, fontSize: 10, color: i < 3 ? cream : coffeeDark, fontWeight: 600 }}>{c}</span>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline",
          borderTop: `1px solid ${copper}55`, paddingTop: 18 }}>
          <div style={{ display: "flex", gap: 32 }}>
            <div><span style={{ fontFamily: serif, fontStyle: "italic", fontSize: 34, color: cream, fontWeight: 700 }}>Aa</span> <span style={{ fontFamily: mono, fontSize: 10, letterSpacing: ".24em", color: copperLight, textTransform: "uppercase" }}>Playfair</span></div>
            <div><span style={{ fontFamily: sans, fontSize: 32, color: cream, fontWeight: 500 }}>Aa</span> <span style={{ fontFamily: mono, fontSize: 10, letterSpacing: ".24em", color: copperLight, textTransform: "uppercase" }}>Inter</span></div>
          </div>
          <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: ".34em", textTransform: "uppercase", color: copperLight, fontWeight: 600 }}>
            Brand book
          </div>
        </div>
      </div>
    </div>
  );
}

// ---- Post — dry ----
function CafeOnzePost() {
  return (
    <div style={{ width: 1080, height: 1350, background: coffeeDark, color: cream,
      display: "grid", gridTemplateColumns: "1fr 1fr" }}>
      <div style={{ padding: "80px 64px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <OnzeLogo color={cream} size={1} />
        <div>
          <div style={{ fontFamily: sans, fontSize: 15, fontWeight: 600, color: copperLight, letterSpacing: ".24em", textTransform: "uppercase", marginBottom: 22 }}>
            — Carta simple
          </div>
          <h1 style={{ fontFamily: serif, fontWeight: 500, fontStyle: "italic",
            fontSize: 116, lineHeight: .95, letterSpacing: "-0.035em", margin: 0, color: cream }}>
            Pide<br />
            <span style={{ fontStyle: "normal", fontWeight: 700 }}>un normal.</span><br />
            Te sale<br />bien.
          </h1>
          <p style={{ fontFamily: sans, fontSize: 19, lineHeight: 1.5, color: creamSoft, marginTop: 28, maxWidth: 430 }}>
            Lo tenemos. Si quieres uno raro, también. No vamos a preguntarte qué sabes de granos.
          </p>
        </div>
        <div style={{ fontFamily: mono, fontSize: 13, letterSpacing: ".2em", textTransform: "uppercase", color: "rgba(242,235,221,.5)" }}>
          Blai 24 · Poble Sec
        </div>
      </div>
      <div style={{ background: `linear-gradient(180deg, rgba(34,21,17,.15), rgba(34,21,17,.35)), url('https://images.pexels.com/photos/585753/pexels-photo-585753.jpeg?auto=compress&cs=tinysrgb&w=1400') center/cover`,
        borderLeft: `1px solid rgba(196,133,85,.35)` }} />
    </div>
  );
}

// ---- Story — menu sin floritura ----
function CafeOnzeStory() {
  const menu = [["Espresso", "2,20"], ["Cortado", "2,40"], ["Flat white", "3,20"], ["V60", "4,00"], ["Pastel", "3,50"]];
  return (
    <div style={{ width: 1080, height: 1920,
      background: `linear-gradient(180deg, rgba(34,21,17,.5), rgba(34,21,17,.82) 70%, rgba(17,10,8,.96)), url('https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1400') center 30%/cover`,
      color: cream, padding: "150px 90px 130px",
      display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <OnzeLogo color={cream} size={1.05} />
        <div style={{ fontFamily: sans, fontSize: 15, color: copperLight, letterSpacing: ".22em", textTransform: "uppercase", textAlign: "right", lineHeight: 1.6 }}>
          Todo<br />
          <span style={{ color: creamSoft, fontSize: 13 }}>lo que hay</span>
        </div>
      </div>
      <div>
        <h1 style={{ fontFamily: serif, fontWeight: 700,
          fontSize: 112, lineHeight: .98, letterSpacing: "-0.035em", margin: 0, color: cream }}>
          Cinco cosas.<br />
          <span style={{ fontStyle: "italic", fontWeight: 500, color: copperLight }}>Ni una más.</span>
        </h1>
        <div style={{ marginTop: 56, borderTop: `1px solid rgba(224,168,120,.3)` }}>
          {menu.map(([name, price], i) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline",
              padding: "22px 0", borderBottom: `1px solid rgba(224,168,120,.18)`,
              fontFamily: sans, fontSize: 28, fontWeight: 400 }}>
              <span style={{ color: cream }}>{name}</span>
              <span style={{ color: copperLight, fontFamily: serif, fontStyle: "italic", fontSize: 30 }}>{price} €</span>
            </div>
          ))}
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        <div style={{ fontFamily: sans, fontSize: 15, color: creamSoft, letterSpacing: ".16em", textTransform: "uppercase", lineHeight: 1.5 }}>
          Si no sabes cuál,<br />pide lo más básico.
        </div>
        <div style={{ fontFamily: serif, fontStyle: "italic", fontSize: 28, color: copperLight,
          borderBottom: `2px solid ${copperLight}`, paddingBottom: 4, fontWeight: 500 }}>
          @cafe.onze
        </div>
      </div>
    </div>
  );
}

// ---- Reel ----
function CafeOnzeReel() {
  return (
    <div style={{ width: 1080, height: 1920, padding: "80px 80px 120px",
      display: "flex", flexDirection: "column", justifyContent: "space-between", color: cream,
      background: "linear-gradient(180deg, rgba(34,21,17,.6), rgba(34,21,17,.2) 30%, rgba(34,21,17,.1) 55%, rgba(17,10,8,.92))" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <OnzeLogo color={cream} size={1} />
        <div style={{ fontFamily: sans, fontSize: 13, fontWeight: 700,
          letterSpacing: ".28em", textTransform: "uppercase", color: cream, padding: "10px 14px",
          border: `1px solid ${copperLight}`, borderRadius: 2, background: "rgba(34,21,17,.4)" }}>
          Serie 01 / 04
        </div>
      </div>
      <div>
        <div style={{ fontFamily: sans, fontSize: 15, fontWeight: 600, color: copperLight,
          letterSpacing: ".28em", textTransform: "uppercase", marginBottom: 26 }}>
          Reel del martes —
        </div>
        <h1 style={{ fontFamily: serif, fontWeight: 700,
          fontSize: 136, lineHeight: .92, letterSpacing: "-0.04em", margin: 0, color: cream }}>
          Dime cómo<br />
          te despertaste<br />
          <span style={{ fontStyle: "italic", fontWeight: 500 }}>y te digo</span><br />
          qué pedir.
        </h1>
        <div style={{ marginTop: 38, display: "flex", alignItems: "center", gap: 20,
          fontFamily: sans, fontSize: 17, color: creamSoft, letterSpacing: ".12em", textTransform: "uppercase" }}>
          <div style={{ width: 0, height: 0, borderLeft: `20px solid ${copperLight}`, borderTop: "13px solid transparent", borderBottom: "13px solid transparent" }} />
          Dura 38 segundos
        </div>
      </div>
    </div>
  );
}

const cafeOnze = {
  slug: "cafe-onze",
  name: "CAFÉ ONZE",
  kicker: "Cafetería · Poble Sec",
  tagline: "Café del bueno, carta corta, sin speech de barista.",
  accent: copper,
  cardBg: coffeeDark,
  cardText: cream,
  videoSrc: "/showcase-assets/videos/cafe-onze.mp4",
  Logo: OnzeLogo,
  Branding: OnzeBranding,
  Post: CafeOnzePost,
  Story: CafeOnzeStory,
  ReelOverlay: CafeOnzeReel,
};

export default cafeOnze;
