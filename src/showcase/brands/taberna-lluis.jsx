// TABERNA LLUÍS — voz literaria-amiga. Sommelier casero, no pretencioso.
// "Si no sabes cuál, pide el que bebamos nosotros."
const burgundy = "#5A1420";
const burgundyDark = "#2F0A10";
const burgundyDeep = "#1A0408";
const gold = "#B49462";
const goldLight = "#D8B67E";
const ivory = "#EDE2C9";
const ivorySoft = "rgba(237,226,201,.82)";

const didone = "'Playfair Display', Georgia, serif";
const sans = "'Inter', system-ui, sans-serif";
const mono = "'JetBrains Mono', monospace";

// ---- Logo: condensed all-caps with thin dividers ----
export function TabernaLogo({ color = ivory, size = 1 }) {
  return (
    <div style={{ color, textAlign: "center", lineHeight: 1 }}>
      <div style={{
        fontFamily: sans, fontSize: 11 * size, fontWeight: 600,
        letterSpacing: ".4em", textTransform: "uppercase", opacity: .75,
      }}>— Taberna —</div>
      <div style={{
        fontFamily: didone, fontWeight: 900,
        fontSize: 44 * size, letterSpacing: ".02em", textTransform: "uppercase",
        margin: `${2 * size}px 0`,
      }}>Lluís</div>
      <div style={{
        fontFamily: sans, fontSize: 9 * size, fontWeight: 600,
        letterSpacing: ".5em", textTransform: "uppercase", opacity: .65,
      }}>Barcelona · MMXIX</div>
    </div>
  );
}

// ---- Post 1080x1350 — single wine glass, editorial title ----
function LluisPost() {
  return (
    <div style={{
      width: 1080, height: 1350,
      background: `linear-gradient(180deg, rgba(26,4,8,.45) 0%, rgba(26,4,8,.6) 50%, rgba(26,4,8,.96) 100%), url('https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg?auto=compress&cs=tinysrgb&w=1400') center 40%/cover`,
      color: ivory, position: "relative",
      padding: "72px 80px",
      display: "flex", flexDirection: "column", justifyContent: "space-between",
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <TabernaLogo color={ivory} size={1} />
        <div style={{
          fontFamily: didone, fontStyle: "italic", fontSize: 28, fontWeight: 400,
          color: goldLight, textAlign: "right",
        }}>
          Carta · Nº 14
          <div style={{
            fontFamily: sans, fontSize: 11, fontWeight: 600,
            letterSpacing: ".38em", textTransform: "uppercase",
            color: ivorySoft, marginTop: 4,
          }}>Primavera 2026</div>
        </div>
      </div>

      <div>
        <div style={{
          fontFamily: sans, fontSize: 14, fontWeight: 600,
          letterSpacing: ".44em", textTransform: "uppercase", color: gold,
          marginBottom: 26, display: "inline-block",
          padding: "4px 0", borderTop: `1px solid ${gold}`, borderBottom: `1px solid ${gold}`,
        }}>— Vinos y tapas —</div>
        <h1 style={{
          fontFamily: didone, fontWeight: 900,
          fontSize: 164, lineHeight: .9, letterSpacing: "-0.035em",
          margin: 0, color: ivory,
        }}>
          Vino bueno,<br />
          <em style={{ fontStyle: "italic", fontWeight: 400, color: goldLight }}>copa pequeña,</em><br />
          mesa al lado<br />
          de la calle.
        </h1>
      </div>

      <div style={{
        display: "flex", justifyContent: "space-between", alignItems: "flex-end",
        fontFamily: sans, fontSize: 12, fontWeight: 500,
        letterSpacing: ".32em", textTransform: "uppercase", color: ivorySoft,
      }}>
        <span>c/ Robadors 11</span>
        <span style={{ color: gold }}>—</span>
        <span>Abierto de 18 a cierre</span>
      </div>
    </div>
  );
}

// ---- Story 1080x1920 — carta/menu with wine list ----
function LluisStory() {
  const wines = [
    ["Can Sumoi", "Penedès", "Copa 4,50"],
    ["Clos Lentiscus", "Garraf", "Copa 5,20"],
    ["Terroir al Límit", "Priorat", "Copa 7,80"],
    ["Partida Bellvisos", "Montsant", "Copa 4,90"],
  ];
  return (
    <div style={{
      width: 1080, height: 1920,
      background: `linear-gradient(180deg, rgba(26,4,8,.55) 0%, rgba(26,4,8,.85) 100%), url('https://images.pexels.com/photos/66636/pexels-photo-66636.jpeg?auto=compress&cs=tinysrgb&w=1400') center/cover`,
      color: ivory,
      padding: "160px 80px 130px",
      display: "flex", flexDirection: "column", justifyContent: "space-between",
    }}>
      <div style={{ textAlign: "center" }}>
        <TabernaLogo color={ivory} size={1.3} />
      </div>

      <div>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{
            fontFamily: sans, fontSize: 12, fontWeight: 600,
            letterSpacing: ".5em", textTransform: "uppercase", color: gold,
            marginBottom: 10,
          }}>— Vinos por copa —</div>
          <h2 style={{
            fontFamily: didone, fontWeight: 900, fontStyle: "italic",
            fontSize: 64, letterSpacing: "-0.02em", margin: 0, color: ivory,
          }}>Hoy descorchamos</h2>
        </div>

        {wines.map(([name, region, price], i) => (
          <div key={i} style={{
            display: "flex", justifyContent: "space-between", alignItems: "baseline",
            padding: "22px 0",
            borderBottom: `1px solid rgba(180,148,98,.22)`,
          }}>
            <div>
              <div style={{
                fontFamily: didone, fontSize: 34, fontWeight: 700,
                color: ivory, letterSpacing: "-0.01em",
              }}>{name}</div>
              <div style={{
                fontFamily: sans, fontSize: 13, fontWeight: 500,
                letterSpacing: ".3em", textTransform: "uppercase",
                color: ivorySoft, marginTop: 2,
              }}>{region}</div>
            </div>
            <span style={{
              fontFamily: sans, fontSize: 15, fontWeight: 600,
              color: goldLight, letterSpacing: ".2em", textTransform: "uppercase",
            }}>{price} €</span>
          </div>
        ))}
      </div>

      <div style={{ textAlign: "center" }}>
        <div style={{
          fontFamily: didone, fontStyle: "italic", fontSize: 28,
          color: goldLight, fontWeight: 400,
        }}>"Si no sabes cuál, pide el que bebamos nosotros."</div>
        <div style={{
          fontFamily: sans, fontSize: 11, fontWeight: 600,
          letterSpacing: ".44em", textTransform: "uppercase",
          color: ivorySoft, marginTop: 14,
        }}>— Lluís ·</div>
      </div>
    </div>
  );
}

// ---- Reel overlay — dark editorial, big vertical typography ----
function LluisReel() {
  return (
    <div style={{
      width: 1080, height: 1920,
      padding: "90px 80px 120px",
      display: "flex", flexDirection: "column", justifyContent: "space-between",
      color: ivory,
      background: "linear-gradient(180deg, rgba(26,4,8,.75) 0%, rgba(26,4,8,.25) 30%, rgba(26,4,8,.1) 55%, rgba(26,4,8,.9) 100%)",
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <TabernaLogo color={ivory} size={0.95} />
        <div style={{
          fontFamily: didone, fontWeight: 900, fontSize: 38,
          color: goldLight, textAlign: "right", lineHeight: 1,
        }}>
          02:14
          <div style={{
            fontFamily: sans, fontSize: 10, fontWeight: 600,
            letterSpacing: ".4em", textTransform: "uppercase",
            color: ivorySoft, marginTop: 4,
          }}>Martes · 22h</div>
        </div>
      </div>

      <div />

      <div>
        <div style={{
          fontFamily: sans, fontSize: 12, fontWeight: 600,
          letterSpacing: ".5em", textTransform: "uppercase", color: gold,
          marginBottom: 24,
        }}>— Micro documental —</div>
        <h1 style={{
          fontFamily: didone, fontWeight: 900,
          fontSize: 200, lineHeight: .86, letterSpacing: "-0.045em",
          margin: 0, color: ivory,
        }}>
          La última<br />
          <em style={{ fontStyle: "italic", fontWeight: 700, color: goldLight }}>mesa</em><br />
          del viernes.
        </h1>
        <div style={{
          marginTop: 32, borderTop: `1px solid ${gold}`, paddingTop: 18,
          display: "flex", justifyContent: "space-between", alignItems: "center",
          fontFamily: sans, fontSize: 12, fontWeight: 600,
          letterSpacing: ".36em", textTransform: "uppercase", color: ivorySoft,
        }}>
          <span>Dirigido por Lluís</span>
          <span>Episodio 04</span>
        </div>
      </div>
    </div>
  );
}

// ---- Branding piece ----
function LluisBranding() {
  return (
    <div style={{ width: 1080, height: 1350, background: burgundyDeep, color: ivory,
      padding: "80px 90px", display: "flex", flexDirection: "column", justifyContent: "space-between", position: "relative" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div style={{ fontFamily: mono, fontSize: 13, letterSpacing: ".36em", textTransform: "uppercase", color: goldLight, fontWeight: 600 }}>
          Brand · vinos
        </div>
        <div style={{ fontFamily: didone, fontStyle: "italic", fontSize: 22, color: ivorySoft, fontWeight: 400 }}>
          MMXIX —
        </div>
      </div>

      <div style={{ textAlign: "center" }}>
        <TabernaLogo color={ivory} size={3.6} />
        <div style={{ width: 60, height: 1, background: gold, margin: "52px auto" }} />
        <div style={{ fontFamily: didone, fontStyle: "italic", fontSize: 32, color: goldLight, fontWeight: 400, maxWidth: 760, margin: "0 auto", lineHeight: 1.4 }}>
          "Carta corta, copa pequeña,<br />mesa junto a la puerta."
        </div>
      </div>

      <div>
        <div style={{ display: "flex", gap: 10, marginBottom: 24 }}>
          {[burgundyDeep, burgundyDark, burgundy, gold, goldLight, ivory].map((c, i) => (
            <div key={i} style={{ flex: 1, height: 52, background: c, border: `1px solid ${gold}30`, display: "flex", alignItems: "flex-end", padding: "6px 8px" }}>
              <span style={{ fontFamily: mono, fontSize: 9, color: i < 4 ? ivory : burgundyDeep, fontWeight: 600 }}>{c}</span>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", borderTop: `1px solid ${gold}`, paddingTop: 16 }}>
          <div style={{ display: "flex", gap: 28 }}>
            <div><span style={{ fontFamily: didone, fontSize: 34, color: ivory, fontWeight: 900 }}>Aa</span> <span style={{ fontFamily: mono, fontSize: 10, letterSpacing: ".24em", color: goldLight, textTransform: "uppercase" }}>Playfair 900</span></div>
            <div><span style={{ fontFamily: sans, fontSize: 30, color: ivory, fontWeight: 500 }}>Aa</span> <span style={{ fontFamily: mono, fontSize: 10, letterSpacing: ".24em", color: goldLight, textTransform: "uppercase" }}>Inter</span></div>
          </div>
          <div style={{ fontFamily: mono, fontSize: 10, letterSpacing: ".4em", textTransform: "uppercase", color: goldLight, fontWeight: 600 }}>Sistema ·</div>
        </div>
      </div>
    </div>
  );
}

const tabernaLluis = {
  slug: "taberna-lluis",
  name: "TABERNA LLUÍS",
  kicker: "Bar de vinos · Raval",
  tagline: "Carta corta, copa pequeña, música baja y mesa junto a la puerta.",
  accent: gold,
  cardBg: burgundyDeep,
  cardText: ivory,
  videoSrc: "/showcase-assets/videos/taberna-lluis.mp4",
  Logo: TabernaLogo,
  Branding: LluisBranding,
  Post: LluisPost,
  Story: LluisStory,
  ReelOverlay: LluisReel,
};

export default tabernaLluis;
