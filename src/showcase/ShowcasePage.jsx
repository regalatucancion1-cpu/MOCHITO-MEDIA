import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ChevronRight } from "lucide-react";
import "./showcase.css";
import BrandChapter from "./BrandChapter";
import laMaceta from "./brands/la-maceta";
import cafeOnze from "./brands/cafe-onze";
import ventura from "./brands/ventura";
import shalaGracia from "./brands/shala-gracia";
import hornoCasimiro from "./brands/horno-casimiro";
import tabernaLluis from "./brands/taberna-lluis";
import elevnDjs from "./brands/elevn-djs";
import savageParty from "./brands/savage-party";

// Real projects first (positioned as heroes), then fictional studies.
const realBrands = [savageParty, elevnDjs];
const fictionalBrands = [laMaceta, cafeOnze, ventura, shalaGracia, hornoCasimiro, tabernaLluis];

export default function ShowcasePage() {
  useEffect(() => {
    document.title = "Showcase de marcas | Mochito Media";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Así puede lucir tu marca con Mochito Media. Seis estudios de estilo sobre marcas ficticias de sectores distintos: post, story y reel real por cada una.");
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ background: "#2A1E18", minHeight: "100vh", overflowX: "hidden" }}>
      {/* Page hero */}
      <header className="showcase-page-hero">
        <div className="showcase-bg-grid" aria-hidden="true" />
        <div className="showcase-wrap">
          <Link to="/" className="showcase-back">
            <ArrowLeft size={16} /> Volver a la web
          </Link>
          <span className="showcase-eyebrow">Showcase · Mochito Media</span>
          <h1 className="showcase-page-title">
            Una marca<br />entera es<br /><em>mucho más</em><br />que un reel.
          </h1>
          <p className="showcase-page-lede">
            Branding, identidad, fotografía, copy y vídeo. El sistema completo para cada marca, con su propia voz, su propio ritmo y su propio acabado.
          </p>
        </div>
      </header>

      {/* Real projects */}
      <section className="showcase-section showcase-section--page">
        <div className="showcase-wrap">
          <div className="showcase-section-header">
            <span className="showcase-section-tag">Clientes y proyectos propios</span>
            <h2 className="showcase-section-title">Casos reales.</h2>
            <p className="showcase-section-sub">Marcas activas donde hemos diseñado identidad, fotografía, redes sociales y contenido audiovisual.</p>
          </div>
          {realBrands.map(b => (
            <BrandChapter key={b.slug} brand={b} />
          ))}
        </div>
      </section>

      {/* Fictional studies */}
      <section className="showcase-section showcase-section--page showcase-section--fictional">
        <div className="showcase-wrap">
          <div className="showcase-section-header">
            <span className="showcase-section-tag">Estudios de estilo</span>
            <h2 className="showcase-section-title">Marcas ficticias.</h2>
            <p className="showcase-section-sub">Ejercicios sobre sectores donde aún no hemos trabajado. Mismo nivel de acabado que damos a un cliente real.</p>
          </div>
          {fictionalBrands.map(b => (
            <BrandChapter key={b.slug} brand={b} />
          ))}

          <div className="showcase-cta">
            <p>¿Tu sector no está entre estos? Lo diseñamos en una semana.</p>
            <Link to="/#contacto">Hablemos <ChevronRight size={18} /></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
