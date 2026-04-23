// BARBERÍA VENTURA — voz directa, sin adorno. Barbero de toda la vida.
// "Entra, te sentamos. Si no hay sitio, café gratis diez minutos."
const ink = "#0E0E10";
const inkSoft = "#1A1A1D";
const blood = "#8B1E1E";
const bloodLight = "#B63434";
const steel = "#C9C5BE";
const steelSoft = "#8F8B85";
const bone = "#E8E4DD";

const cond = "'Archivo Narrow', 'Inter', sans-serif";
const sans = "'Inter', system-ui, sans-serif";
const mono = "'JetBrains Mono', monospace";

// ---- Crest logo: badge with border frame ----
export function VenturaCrest({ color = bone, scale = 1 }) {
  return (
    <div style={{
      display: "inline-block", border: `1.5px solid ${color}`,
      padding: `${10 * scale}px ${18 * scale}px`, textAlign: "center",
      color, lineHeight: 1,
    }}>
      <div style={{
        fontFamily: sans, fontSize: 10 * scale, fontWeight: 700,
        letterSpacing: ".32em", textTransform: "uppercase",
        paddingBottom: 6 * scale, borderBottom: `1px solid ${color}`, opacity: .7,
      }}>Barbería</div>
      <div style={{
        fontFamily: cond, fontWeight: 700,
        fontSize: 36 * scale, letterSpacing: ".02em", textTransform: "uppercase",
        padding: `${6 * scale}px 0`,
      }}>Ventura</div>
      <div style={{
        fontFamily: sans, fontSize: 9 * scale, fontWeight: 700,
        letterSpacing: ".36em", textTransform: "uppercase",
        paddingTop: 5 * scale, borderTop: `1px solid ${color}`, opacity: .7,
      }}>Est · Barcelona · 2018</div>
    </div>
  );
}

// ---- Post 1080x1350 — horizontal split: left tariff, right photo ----
function VenturaPost() {
  const services = [
    ["Corte", "18"],
    ["Corte + barba", "25"],
    ["Afeitado a navaja", "22"],
    ["Niño hasta 12", "14"],
  ];
  return (
    <div style={{
      width: 1080, height: 1350,
      background: ink, color: bone, position: "relative",
      display: "grid", gridTemplateColumns: "1fr 1fr",
    }}>
      <div style={{
        padding: "76px 64px", display: "flex", flexDirection: "column", justifyContent: "space-between",
        borderRight: `1px solid ${blood}`,
      }}>
        <VenturaCrest color={bone} scale={1.1} />
        <div>
          <div style={{ fontFamily: sans, fontSize: 12, fontWeight: 700, letterSpacing: ".3em", textTransform: "uppercase", color: bloodLight, marginBottom: 18 }}>
            · Tarifa ·
          </div>
          <h1 style={{
            fontFamily: cond, fontWeight: 700,
            fontSize: 102, lineHeight: .92, letterSpacing: "-0.01em", textTransform: "uppercase",
            margin: 0, color: bone,
          }}>
            Corte en<br />
            <span style={{ color: bloodLight }}>25 min.</span><br />
            Barba si<br />quieres.
          </h1>
          <div style={{ marginTop: 48, borderTop: `1px solid ${inkSoft}` }}>
            {services.map(([name, price], i) => (
              <div key={i} style={{
                display: "flex", justifyContent: "space-between", alignItems: "baseline",
                padding: "16px 0", borderBottom: `1px solid ${inkSoft}`,
                fontFamily: cond, fontSize: 22, fontWeight: 500, letterSpacing: ".04em", textTransform: "uppercase",
              }}>
                <span style={{ color: bone }}>{name}</span>
                <span style={{ color: steel }}>{price} €</span>
              </div>
            ))}
          </div>
        </div>
        <div style={{ fontFamily: sans, fontSize: 13, color: steelSoft, letterSpacing: ".16em", textTransform: "uppercase" }}>
          Sin cita · c/ Sant Antoni 42
        </div>
      </div>
      <div style={{
        background: `linear-gradient(180deg, rgba(14,14,16,.2) 0%, rgba(14,14,16,.55) 100%), url('https://images.pexels.com/photos/1319461/pexels-photo-1319461.jpeg?auto=compress&cs=tinysrgb&w=1400') center/cover`,
      }} />
    </div>
  );
}

// ---- Story 1080x1920 — photo full + centered crest + CTA ----
function VenturaStory() {
  return (
    <div style={{
      width: 1080, height: 1920,
      background: `linear-gradient(180deg, rgba(14,14,16,.45) 0%, rgba(14,14,16,.65) 50%, rgba(14,14,16,.92) 100%), url('https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=1400') center/cover`,
      color: bone,
      padding: "150px 90px 130px",
      display: "flex", flexDirection: "column", justifyContent: "space-between",
      textAlign: "center", alignItems: "center",
    }}>
      <div style={{
        fontFamily: cond, fontSize: 19, fontWeight: 600,
        letterSpacing: ".4em", textTransform: "uppercase", color: steel,
      }}>Barbería · Ventura · Est 2018</div>

      <div>
        <div style={{
          display: "inline-block",
          fontFamily: sans, fontSize: 16, fontWeight: 700,
          letterSpacing: ".28em", textTransform: "uppercase",
          color: bone, padding: "12px 22px",
          border: `1.5px solid ${bloodLight}`, background: blood,
          marginBottom: 48,
        }}>Sin cita previa</div>
        <h1 style={{
          fontFamily: cond, fontWeight: 700,
          fontSize: 168, lineHeight: .88, letterSpacing: "-0.015em", textTransform: "uppercase",
          margin: 0, color: bone,
        }}>
          Entra,<br />
          <span style={{ color: bloodLight }}>te<br />sentamos.</span>
        </h1>
        <p style={{
          fontFamily: sans, fontSize: 26, lineHeight: 1.4, color: "rgba(232,228,221,.8)",
          marginTop: 40, maxWidth: 780, marginLeft: "auto", marginRight: "auto",
        }}>
          Si somos dos, esperas diez minutos con café gratis.<br />Si no hay nadie, en cinco estás fuera.
        </p>
      </div>

      <div>
        <div style={{
          fontFamily: cond, fontWeight: 700, fontSize: 28,
          letterSpacing: ".18em", textTransform: "uppercase",
          color: bone, padding: "22px 44px",
          background: blood, display: "inline-block",
          boxShadow: "0 10px 30px rgba(0,0,0,.5)",
        }}>Cómo llegar →</div>
        <div style={{ fontFamily: sans, fontSize: 14, color: steelSoft, marginTop: 14, letterSpacing: ".18em", textTransform: "uppercase" }}>
          Google Maps en bio
        </div>
      </div>
    </div>
  );
}

// ---- Reel overlay — minimal, red badge prominent ----
function VenturaReel() {
  return (
    <div style={{
      width: 1080, height: 1920,
      padding: "90px 90px 130px",
      display: "flex", flexDirection: "column", justifyContent: "space-between",
      color: bone,
      background: "linear-gradient(180deg, rgba(14,14,16,.7) 0%, rgba(14,14,16,.15) 35%, rgba(14,14,16,.1) 60%, rgba(14,14,16,.9) 100%)",
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <VenturaCrest color={bone} scale={0.95} />
        <div style={{
          fontFamily: cond, fontWeight: 700, fontSize: 30,
          letterSpacing: ".08em", textTransform: "uppercase",
          color: bone, padding: "14px 22px",
          background: blood, display: "inline-flex", alignItems: "center", gap: 12,
        }}>
          <span style={{ width: 14, height: 14, borderRadius: "50%", background: bone, animation: "pulse 2s infinite" }} />
          En directo
        </div>
      </div>
      <div />
      <div>
        <div style={{
          fontFamily: sans, fontSize: 14, fontWeight: 700, letterSpacing: ".32em", textTransform: "uppercase",
          color: steel, marginBottom: 22,
        }}>Mira cómo →</div>
        <h1 style={{
          fontFamily: cond, fontWeight: 700,
          fontSize: 180, lineHeight: .86, letterSpacing: "-0.02em", textTransform: "uppercase",
          margin: 0, color: bone,
        }}>
          23 minutos<br />
          <span style={{ color: bloodLight }}>de corte.</span><br />
          <span style={{ fontSize: 96, opacity: .7 }}>Ni uno más.</span>
        </h1>
      </div>
    </div>
  );
}

// ---- Branding piece ----
function VenturaBranding() {
  return (
    <div style={{ width: 1080, height: 1350, background: ink, color: bone,
      padding: "90px", display: "flex", flexDirection: "column", justifyContent: "space-between", position: "relative" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div style={{ fontFamily: mono, fontSize: 14, letterSpacing: ".3em", textTransform: "uppercase", color: bloodLight, fontWeight: 600 }}>
          Identidad · barbería
        </div>
        <div style={{ fontFamily: cond, fontSize: 16, fontWeight: 700, letterSpacing: ".3em", textTransform: "uppercase", color: steel }}>
          Est · MMXVIII
        </div>
      </div>

      <div style={{ textAlign: "center" }}>
        <VenturaCrest color={bone} scale={2.8} />
      </div>

      <div>
        <div style={{ display: "flex", gap: 10, marginBottom: 26 }}>
          {[ink, inkSoft, blood, bloodLight, steel, bone].map((c, i) => (
            <div key={i} style={{ flex: 1, height: 52, background: c, border: `1px solid rgba(232,228,221,.1)`, display: "flex", alignItems: "flex-end", padding: "6px 8px" }}>
              <span style={{ fontFamily: mono, fontSize: 9, color: i < 4 ? bone : ink, fontWeight: 600 }}>{c}</span>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", borderTop: `1px solid ${blood}`, paddingTop: 16 }}>
          <div style={{ display: "flex", gap: 32 }}>
            <div><span style={{ fontFamily: cond, fontSize: 32, color: bone, fontWeight: 700, textTransform: "uppercase" }}>AA</span> <span style={{ fontFamily: mono, fontSize: 10, letterSpacing: ".24em", color: steel, textTransform: "uppercase" }}>Archivo Narrow</span></div>
            <div><span style={{ fontFamily: sans, fontSize: 30, color: bone, fontWeight: 500 }}>Aa</span> <span style={{ fontFamily: mono, fontSize: 10, letterSpacing: ".24em", color: steel, textTransform: "uppercase" }}>Inter</span></div>
          </div>
          <div style={{ fontFamily: mono, fontSize: 10, letterSpacing: ".36em", textTransform: "uppercase", color: bloodLight, fontWeight: 600 }}>Brand · v1</div>
        </div>
      </div>
    </div>
  );
}

const ventura = {
  slug: "ventura",
  name: "BARBERÍA VENTURA",
  kicker: "Barbería · Sant Antoni",
  tagline: "Sin cita, sin charla, 23 minutos y a la calle.",
  accent: bloodLight,
  cardBg: ink,
  cardText: bone,
  videoSrc: "/showcase-assets/videos/ventura.mp4",
  Logo: VenturaCrest,
  Branding: VenturaBranding,
  Post: VenturaPost,
  Story: VenturaStory,
  ReelOverlay: VenturaReel,
};

export default ventura;
