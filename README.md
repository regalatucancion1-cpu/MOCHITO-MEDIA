# 🎬 Mochito Media Web

Página web moderna y premium para Mochito Media. Contenido con storytelling para startups y marcas digitales.

## 🚀 Inicio rápido

### 1. Instalación local

```bash
# Instala las dependencias
npm install

# Inicia el servidor de desarrollo
npm run dev

# Tu web estará en http://localhost:3000
```

### 2. Build para producción

```bash
npm run build
```

Esto crea una carpeta `dist/` lista para desplegar.

## 📤 Desplegar en GitHub

Si es la primera vez:

```bash
# Inicializa git (si no lo has hecho)
git init

# Añade el remote
git remote add origin https://github.com/regalatucancion1-cpu/MOCHITO-MEDIA.git

# Configura tu usuario
git config user.name "Tu nombre"
git config user.email "tu@email.com"

# Añade todo
git add .

# Commit inicial
git commit -m "feat: Mochito Media web - diseño joven y premium"

# Sube a GitHub
git branch -M main
git push -u origin main
```

Si ya existe el repo:

```bash
git add .
git commit -m "tu mensaje aquí"
git push
```

## 🌐 Desplegar en Vercel (recomendado)

1. Ve a [vercel.com](https://vercel.com)
2. Haz login (puedes usar tu GitHub)
3. Click en "Import Project"
4. Pega: `https://github.com/regalatucancion1-cpu/MOCHITO-MEDIA.git`
5. Click en Import
6. **¡Listo!** Vercel se configura automáticamente

Tu web estará live en `mochito-media.vercel.app`

## 🔗 Conectar tu dominio de Hostinger

En cPanel de Hostinger:

1. DNS → DNS Zones
2. Apunta los nameservers a los de Vercel:
   - `ns1.vercel-dns.com`
   - `ns2.vercel-dns.com`

O en Vercel:
- Vete a tu proyecto
- Settings → Domains
- Añade tu dominio de Hostinger

## 🎨 Personalización

El código está en `src/App.jsx`. Puedes editar:
- **Textos**: búsqueda y reemplaza directo
- **Colores**: busca `#0F172A`, `#A855F7`, `#06B6D4`
- **Secciones**: cada sección es un componente

Después de cambiar:

```bash
git add .
git commit -m "fix: [tu cambio]"
git push
```

Vercel se redeploya automáticamente en segundos.

## 📊 Stack técnico

- **React 18** — UI interactiva
- **Vite** — Build tool rápido
- **Lucide React** — Iconos
- **CSS inline** — Sin compilación extra

## 📝 Estructura

```
mochito-web/
├── src/
│   ├── App.jsx          ← Tu componente principal
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

## 🆘 Solución de problemas

**Error: "npm: command not found"**
- Descarga Node.js desde [nodejs.org](https://nodejs.org)

**La web no se ve bien en móvil**
- Ya está respondiva, pero verifica con `npm run dev` y redimensiona el navegador

**Cambios no se reflejan en Vercel**
- Espera 30 segundos, el redeploy es automático
- Si no, verifica que el push llegó a GitHub correctamente

## 📧 Contacto

- Email: hola@mochitomedia.com
- GitHub: [regalatucancion1-cpu](https://github.com/regalatucancion1-cpu)

---

**Hecho con ❤️ por Christian & Angela**
