import "./showcase.css";
import BrandChapter from "./BrandChapter";
import laMaceta from "./brands/la-maceta";
import { ChevronRight } from "lucide-react";

const brands = [
  laMaceta,
  // cafeOnze, ventura, shalaGracia, hornoCasimiro, tabernaLluis — pendiente
];

export default function ShowcaseSection() {
  return (
    <section id="estilo" className="showcase-section">
      <div className="showcase-bg-grid" aria-hidden="true" />
      <div className="showcase-wrap">
        <div className="showcase-header">
          <span className="showcase-eyebrow">Estudios de estilo</span>
          <h2 className="showcase-title">Cómo se vería <em>tu marca</em> aquí.</h2>
          <p className="showcase-lede">
            Seis marcas ficticias de sectores distintos. Mismo método, paleta y voz por marca.
            Cada una con post, story y reel real. Sirve para ver cómo tratamos un negocio que no se parece a otros.
          </p>
        </div>

        {brands.map(b => (
          <BrandChapter key={b.slug} brand={b} />
        ))}

        <div className="showcase-cta">
          <p>¿Tu sector no está entre los seis? Lo diseñamos en una semana.</p>
          <a href="#contacto">Hablemos <ChevronRight size={18} /></a>
        </div>
      </div>
    </section>
  );
}
