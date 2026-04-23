// HORNO CASIMIRO — voz de abuelo, anecdótica. "Desde el 87 haciendo lo mismo".
// "Mi padre decía que el pan bueno no tiene prisa. Seguimos haciendo caso."
const dough = "#D9B684";
const oven = "#6E4325";
const ovenDark = "#3F2616";
const flour = "#FAF3E4";
const flourSoft = "rgba(250,243,228,.82)";
const coal = "#1B120A";

const serif = "'Fraunces', Georgia, serif";
const sans = "'Inter', system-ui, sans-serif";
const mono = "'JetBrains Mono', monospace";

// ---- Circular stamp logo ----
export function CasimiroStamp({ color = flour, size = 200 }) {
  const fontSize = {
    top: size * 0.062,
    mid: size * 0.2,
    bot: size * 0.052,
  };
  return (
    <div style={{
      width: size, height: size, borderRadius: "50%",
      border: `2px solid ${color}`,
      display: "flex", alignItems: "center", justifyContent: "center",
      color, position: "relative",
    }}>
      <div style={{
        position: "absolute", inset: size * 0.05,
        border: `1px solid ${color}`, borderRadius: "50%", opacity: .5,
      }} />
      <div style={{ textAlign: "center", lineHeight: 1, padding: size * 0.12 }}>
        <div style={{
          fontFamily: sans, fontSize: fontSize.top, fontWeight: 700,
          letterSpacing: ".32em", textTransform: "uppercase", opacity: .85,
          marginBottom: size * 0.04,
        }}>— Horno —</div>
        <div style={{
          fontFamily: serif, fontWeight: 700, fontStyle: "italic",
          fontSize: fontSize.mid, letterSpacing: "-0.025em",
          marginBottom: size * 0.04,
        }}>Casimiro</div>
        <div style={{
          fontFamily: sans, fontSize: fontSize.bot, fontWeight: 600,
          letterSpacing: ".32em", textTransform: "uppercase", opacity: .85,
        }}>· Desde 1987 ·</div>
      </div>
    </div>
  );
}

// ---- Post 1080x1350 — photo bg, rustic serif title, stamp bottom-right ----
function CasimiroPost() {
  return (
    <div style={{
      width: 1080, height: 1350,
      background: `linear-gradient(180deg, rgba(110,67,37,.12) 0%, rgba(110,67,37,.25) 40%, rgba(27,18,10,.85) 100%), url('https://images.pexels.com/photos/1756061/pexels-photo-1756061.jpeg?auto=compress&cs=tinysrgb&w=1400') center/cover`,
      color: flour, position: "relative",
      padding: "80px 80px 70px",
      display: "flex", flexDirection: "column", justifyContent: "space-between",
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div>
          <div style={{
            fontFamily: sans, fontSize: 12, fontWeight: 700,
            letterSpacing: ".3em", textTransform: "uppercase", color: dough,
            marginBottom: 10,
          }}>· Pa de barri ·</div>
          <div style={{
            fontFamily: serif, fontSize: 36, fontWeight: 700, fontStyle: "italic",
            color: flour, letterSpacing: "-0.02em",
          }}>Horno <span style={{ fontStyle: "italic" }}>Casimiro</span></div>
        </div>
        <div style={{
          fontFamily: sans, fontSize: 13, color: flourSoft, textAlign: "right",
          letterSpacing: ".22em", textTransform: "uppercase", lineHeight: 1.8,
        }}>Abrimos<br />a las 7</div>
      </div>

      <div>
        <h1 style={{
          fontFamily: serif, fontWeight: 700,
          fontSize: 124, lineHeight: .98, letterSpacing: "-0.035em",
          margin: 0, color: flour,
        }}>
          Pan que sale <em style={{ fontStyle: "italic", fontWeight: 500, color: dough }}>del horno</em><br />
          cuando tú vas<br />
          a desayunar.
        </h1>
        <p style={{
          fontFamily: sans, fontSize: 20, lineHeight: 1.5, fontWeight: 400,
          color: flourSoft, marginTop: 28, maxWidth: 640,
        }}>
          Masa madre, harina de aquí y un horno de piedra que se ha pasado cuarenta años diciendo lo mismo: despacio.
        </p>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        <div style={{
          fontFamily: sans, fontSize: 13, color: dough,
          letterSpacing: ".22em", textTransform: "uppercase", lineHeight: 1.8,
        }}>Gràcia · Providència 22<br /><span style={{ color: flourSoft }}>@horno.casimiro</span></div>
        <CasimiroStamp size={170} color={flour} />
      </div>
    </div>
  );
}

// ---- Story 1080x1920 — ticket/menu aesthetic ----
function CasimiroStory() {
  const items = [
    ["Hogaza de payés", "800 g", "4,20 €"],
    ["Integral con semillas", "750 g", "4,50 €"],
    ["Pan del día", "500 g", "2,80 €"],
    ["Coca de vidre", "unidad", "1,80 €"],
    ["Ensaimadas (6 uds)", "pack", "6,00 €"],
  ];
  return (
    <div style={{
      width: 1080, height: 1920,
      background: `linear-gradient(180deg, rgba(110,67,37,.25) 0%, rgba(110,67,37,.55) 40%, rgba(27,18,10,.92) 100%), url('https://images.pexels.com/photos/1387070/pexels-photo-1387070.jpeg?auto=compress&cs=tinysrgb&w=1400') center/cover`,
      color: flour,
      padding: "140px 70px 120px",
      display: "flex", flexDirection: "column", justifyContent: "space-between",
    }}>
      <div style={{ textAlign: "center" }}>
        <div style={{
          fontFamily: sans, fontSize: 14, fontWeight: 700,
          letterSpacing: ".34em", textTransform: "uppercase", color: dough,
          marginBottom: 14,
        }}>— Lista del día —</div>
        <h1 style={{
          fontFamily: serif, fontWeight: 700, fontStyle: "italic",
          fontSize: 86, lineHeight: 1, letterSpacing: "-0.025em",
          color: flour, margin: 0,
        }}>
          Lo que sale<br />hoy del horno.
        </h1>
      </div>

      {/* Ticket card */}
      <div style={{
        background: flour, color: ovenDark,
        padding: "36px 32px",
        borderRadius: 4, position: "relative",
        boxShadow: "0 20px 60px rgba(0,0,0,.6)",
      }}>
        {/* perforated top */}
        <div style={{
          position: "absolute", top: -12, left: 0, right: 0, height: 12,
          backgroundImage: `radial-gradient(circle at 8px 0, transparent 6px, ${flour} 6.5px)`,
          backgroundSize: "16px 12px", backgroundRepeat: "repeat-x",
        }} />
        <div style={{
          fontFamily: sans, fontSize: 10, fontWeight: 700,
          letterSpacing: ".4em", textTransform: "uppercase", color: oven,
          textAlign: "center", marginBottom: 18,
        }}>· Horno Casimiro · desde 1987 ·</div>
        {items.map(([name, unit, price], i) => (
          <div key={i} style={{
            display: "flex", justifyContent: "space-between", alignItems: "baseline",
            padding: "12px 0",
            borderBottom: i < items.length - 1 ? `1px dashed ${oven}` : "none",
            fontFamily: serif,
          }}>
            <div>
              <div style={{ fontSize: 22, fontWeight: 700, color: ovenDark }}>{name}</div>
              <div style={{ fontSize: 12, fontFamily: sans, color: oven, letterSpacing: ".2em", textTransform: "uppercase" }}>{unit}</div>
            </div>
            <span style={{ fontSize: 24, fontWeight: 700, color: oven }}>{price}</span>
          </div>
        ))}
      </div>

      <div style={{
        textAlign: "center",
        fontFamily: sans, fontSize: 15, color: dough,
        letterSpacing: ".22em", textTransform: "uppercase",
      }}>Si te lo guardamos, avísanos antes de las 12</div>
    </div>
  );
}

// ---- Reel overlay — warm, stamp prominent ----
function CasimiroReel() {
  return (
    <div style={{
      width: 1080, height: 1920,
      padding: "90px 80px 130px",
      display: "flex", flexDirection: "column", justifyContent: "space-between",
      color: flour,
      background: "linear-gradient(180deg, rgba(110,67,37,.6) 0%, rgba(110,67,37,.15) 25%, rgba(63,38,22,.25) 60%, rgba(27,18,10,.92) 100%)",
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div>
          <div style={{
            fontFamily: sans, fontSize: 11, fontWeight: 700,
            letterSpacing: ".34em", textTransform: "uppercase", color: dough,
          }}>Horno</div>
          <div style={{
            fontFamily: serif, fontWeight: 700, fontStyle: "italic",
            fontSize: 46, letterSpacing: "-0.02em", color: flour,
          }}>Casimiro</div>
        </div>
        <div style={{
          fontFamily: serif, fontStyle: "italic", fontSize: 22,
          color: dough, borderBottom: `1px solid ${dough}`, paddingBottom: 2,
        }}>cap. 3 · masa madre</div>
      </div>

      <div style={{ textAlign: "center" }}>
        <h1 style={{
          fontFamily: serif, fontWeight: 700,
          fontSize: 140, lineHeight: .94, letterSpacing: "-0.035em",
          margin: 0, color: flour,
        }}>
          <span style={{ fontStyle: "italic", fontWeight: 500, color: dough }}>72 horas</span><br />
          de fermentación<br />
          <em style={{ fontStyle: "italic", fontWeight: 700 }}>en 38 segundos.</em>
        </h1>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        <CasimiroStamp size={120} color={flour} />
        <div style={{
          fontFamily: sans, fontSize: 13, color: flourSoft, textAlign: "right",
          letterSpacing: ".3em", textTransform: "uppercase", lineHeight: 1.8,
        }}>Sube el volumen<br />suena bien</div>
      </div>
    </div>
  );
}

// ---- Branding piece ----
function CasimiroBranding() {
  return (
    <div style={{ width: 1080, height: 1350, background: flour, color: ovenDark,
      padding: "80px 90px", display: "flex", flexDirection: "column", justifyContent: "space-between",
      position: "relative", overflow: "hidden" }}>
      {/* dotted noise */}
      <div style={{ position: "absolute", inset: 0, opacity: .4,
        backgroundImage: "radial-gradient(rgba(110,67,37,.12) 1px, transparent 1px)", backgroundSize: "20px 20px", pointerEvents: "none" }} />

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", position: "relative" }}>
        <div style={{ fontFamily: mono, fontSize: 13, letterSpacing: ".34em", textTransform: "uppercase", color: oven, fontWeight: 700 }}>
          Brand · horno
        </div>
        <div style={{ fontFamily: serif, fontStyle: "italic", fontSize: 22, color: oven, fontWeight: 500 }}>
          · MCMLXXXVII
        </div>
      </div>

      <div style={{ textAlign: "center", position: "relative", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <CasimiroStamp size={380} color={ovenDark} />
        <div style={{ fontFamily: serif, fontStyle: "italic", fontSize: 28, color: oven, fontWeight: 500, marginTop: 40, maxWidth: 720, lineHeight: 1.4 }}>
          "El pan bueno no tiene prisa,<br />decía mi padre."
        </div>
      </div>

      <div style={{ position: "relative" }}>
        <div style={{ display: "flex", gap: 10, marginBottom: 24 }}>
          {[ovenDark, oven, dough, "#E8C896", flour].map((c, i) => (
            <div key={i} style={{ flex: 1, height: 52, background: c, border: `1px solid ${oven}25`, display: "flex", alignItems: "flex-end", padding: "6px 8px" }}>
              <span style={{ fontFamily: mono, fontSize: 9, color: i < 2 ? flour : ovenDark, fontWeight: 600 }}>{c}</span>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", borderTop: `1px solid ${oven}40`, paddingTop: 16 }}>
          <div style={{ display: "flex", gap: 28 }}>
            <div><span style={{ fontFamily: serif, fontStyle: "italic", fontSize: 34, color: ovenDark, fontWeight: 700 }}>Aa</span> <span style={{ fontFamily: mono, fontSize: 10, letterSpacing: ".24em", color: oven, textTransform: "uppercase" }}>Fraunces</span></div>
            <div><span style={{ fontFamily: sans, fontSize: 30, color: ovenDark, fontWeight: 500 }}>Aa</span> <span style={{ fontFamily: mono, fontSize: 10, letterSpacing: ".24em", color: oven, textTransform: "uppercase" }}>Inter</span></div>
          </div>
          <div style={{ fontFamily: mono, fontSize: 10, letterSpacing: ".36em", textTransform: "uppercase", color: oven, fontWeight: 700 }}>Identidad · v1</div>
        </div>
      </div>
    </div>
  );
}

const hornoCasimiro = {
  slug: "horno-casimiro",
  name: "HORNO CASIMIRO",
  kicker: "Panadería · Gràcia",
  tagline: "Pan de masa madre del horno de piedra, desde 1987.",
  accent: dough,
  cardBg: flour,
  cardText: ovenDark,
  videoSrc: "/showcase-assets/videos/horno-casimiro.mp4",
  Logo: CasimiroStamp,
  Branding: CasimiroBranding,
  Post: CasimiroPost,
  Story: CasimiroStory,
  ReelOverlay: CasimiroReel,
};

export default hornoCasimiro;
