#!/bin/bash

# 🚀 Script de deploy automático a GitHub

echo "🎬 Mochito Media — Deploy a GitHub"
echo "======================================"

# Color codes
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Paso 1: Instalar dependencias
echo -e "${BLUE}Paso 1: Instalando dependencias...${NC}"
npm install

# Paso 2: Configurar git
echo -e "${BLUE}Paso 2: Configurando git...${NC}"
git config user.name "Christian"
git config user.email "christian@mochitomedia.com"

# Paso 3: Añadir remote
echo -e "${BLUE}Paso 3: Añadiendo remote a GitHub...${NC}"
git remote add origin https://github.com/regalatucancion1-cpu/MOCHITO-MEDIA.git 2>/dev/null || git remote set-url origin https://github.com/regalatucancion1-cpu/MOCHITO-MEDIA.git

# Paso 4: Inicializar rama
echo -e "${BLUE}Paso 4: Preparando rama main...${NC}"
git branch -M main

# Paso 5: Staging
echo -e "${BLUE}Paso 5: Añadiendo archivos...${NC}"
git add .

# Paso 6: Commit
echo -e "${BLUE}Paso 6: Creando commit...${NC}"
git commit -m "🎨 feat: Mochito Media web - diseño joven y premium con colores vibrantes"

# Paso 7: Push
echo -e "${BLUE}Paso 7: Subiendo a GitHub (necesitarás autenticación)...${NC}"
git push -u origin main

echo -e "${GREEN}✅ ¡Listo! Tu código está en GitHub${NC}"
echo ""
echo "Próximos pasos:"
echo "1. Ve a https://vercel.com"
echo "2. Importa tu repo: https://github.com/regalatucancion1-cpu/MOCHITO-MEDIA.git"
echo "3. Vercel lo desplegará automáticamente"
echo "4. Apunta tu dominio de Hostinger a Vercel en los DNS"
echo ""
echo -e "${GREEN}¡Tu web estará live en minutos! 🚀${NC}"
