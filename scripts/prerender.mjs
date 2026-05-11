import { readFile, writeFile, mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { articles } from "../src/blog/articles.js";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const DIST = resolve(ROOT, "dist");
const SITE = "https://mochitomedia.com";

const escape = (s) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

const setMeta = (html, attrPrefix, value) => {
  const re = new RegExp(
    `(<meta\\s+${attrPrefix}\\s+content=")[^"]*(")`,
    "i"
  );
  if (!re.test(html)) return html;
  return html.replace(re, `$1${escape(value)}$2`);
};

const setCanonical = (html, href) =>
  html.replace(
    /(<link\s+rel="canonical"\s+href=")[^"]*(")/i,
    `$1${escape(href)}$2`
  );

const setTitle = (html, title) =>
  html.replace(/<title>[^<]*<\/title>/i, `<title>${escape(title)}</title>`);

const replaceJsonLd = (html, jsonLd) => {
  const re = /<script type="application\/ld\+json">[\s\S]*?<\/script>/i;
  return html.replace(
    re,
    `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`
  );
};

const stripExtraHreflang = (html) => {
  // Keep only es / es-ES alternates (single Spanish blog, no multi-region)
  return html
    .replace(
      /\s*<link rel="alternate" hreflang="es-MX"[^>]*>\n?/i,
      "\n"
    )
    .replace(
      /\s*<link rel="alternate" hreflang="es-AR"[^>]*>\n?/i,
      "\n"
    );
};

const applyMeta = (html, m) => {
  let out = html;
  out = setTitle(out, m.title);
  out = setMeta(out, 'name="description"', m.description);
  if (m.keywords) {
    out = setMeta(out, 'name="keywords"', m.keywords);
  }
  out = setCanonical(out, m.url);
  out = setMeta(out, 'property="og:title"', m.title);
  out = setMeta(out, 'property="og:description"', m.description);
  out = setMeta(out, 'property="og:url"', m.url);
  out = setMeta(out, 'property="og:type"', m.ogType || "website");
  if (m.image) {
    out = setMeta(out, 'property="og:image"', m.image);
    out = setMeta(out, 'name="twitter:image"', m.image);
  }
  out = setMeta(out, 'name="twitter:title"', m.title);
  out = setMeta(out, 'name="twitter:description"', m.description);
  out = out.replace(
    /(<link rel="alternate" hreflang="es" href=")[^"]*(")/i,
    `$1${escape(m.url)}$2`
  );
  out = out.replace(
    /(<link rel="alternate" hreflang="es-ES" href=")[^"]*(")/i,
    `$1${escape(m.url)}$2`
  );
  if (m.jsonLd) out = replaceJsonLd(out, m.jsonLd);
  return out;
};

const writePage = async (relPath, html) => {
  const file = resolve(DIST, relPath);
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, html, "utf8");
  console.log("✓ wrote", relPath);
};

const buildArticleJsonLd = (a) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: a.title,
  description: a.metaDescription,
  datePublished: a.date,
  dateModified: a.date,
  author: { "@type": "Organization", name: "Mochito Media" },
  publisher: {
    "@type": "Organization",
    name: "Mochito Media",
    logo: { "@type": "ImageObject", url: `${SITE}/logo-mochi.svg` },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE}/blog/${a.slug}` },
  url: `${SITE}/blog/${a.slug}`,
  image: `${SITE}/logo-mochi.svg`,
  inLanguage: "es",
});

async function main() {
  const baseHtml = stripExtraHreflang(
    await readFile(resolve(DIST, "index.html"), "utf8")
  );

  // /blog (index)
  await writePage(
    "blog.html",
    applyMeta(baseHtml, {
      title: "Blog de UGC y creación de contenido para marcas | Mochito Media",
      description:
        "Guías, estrategias y casos reales sobre creadores UGC, storytelling de marca, TikTok para empresas y contenido que convierte. El blog de Mochito Media.",
      keywords:
        "blog UGC, blog creadores de contenido, guías UGC, storytelling marcas, TikTok empresas, Reels marcas, Mochito Media blog",
      url: `${SITE}/blog`,
      image: `${SITE}/logo-mochi.svg`,
      ogType: "website",
    })
  );

  // /blog/:slug
  for (const a of articles) {
    await writePage(
      `blog/${a.slug}.html`,
      applyMeta(baseHtml, {
        title: `${a.title} | Mochito Media`,
        description: a.metaDescription,
        keywords: a.keywords.join(", "),
        url: `${SITE}/blog/${a.slug}`,
        image: `${SITE}/logo-mochi.svg`,
        ogType: "article",
        jsonLd: buildArticleJsonLd(a),
      })
    );
  }

  // /showcase
  await writePage(
    "showcase.html",
    applyMeta(baseHtml, {
      title: "Showcase de marcas | Mochito Media",
      description:
        "Así puede lucir tu marca con Mochito Media. Ocho estudios de estilo: dos marcas reales y seis ficticias con post, story y reel reales por cada una.",
      keywords:
        "showcase agencia UGC, casos de marca, ejemplos contenido marcas, portfolio Mochito Media",
      url: `${SITE}/showcase`,
      image: `${SITE}/logo-mochi.svg`,
      ogType: "website",
    })
  );

  console.log(`\nPrerender complete: ${articles.length + 2} routes`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
