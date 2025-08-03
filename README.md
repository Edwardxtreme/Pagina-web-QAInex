# QAINEX AI Solutions - Sitio Web Profesional

Un sitio web moderno y profesional para QAINEX, especializada en soluciones avanzadas de inteligencia artificial, con enfoque en inversiones y sectores industriales.

## 🚀 Características

### ✨ Funcionalidades Principales
- **Formulario de Contacto Funcional** con validación completa y envío por email
- **Animaciones 3D Avanzadas** con React Three Fiber (toros, esferas, superficies paramétricas)
- **Animaciones 2D Elegantes** con Framer Motion
- **Diseño Responsivo** optimizado para todos los dispositivos
- **Tema Oscuro Moderno** con gradientes y efectos visuales
- **Accesibilidad Completa** con soporte ARIA

### 🎨 Diseño y UX
- **Inspirado en Scale AI, OpenAI, Palantir**
- **Componentes Interactivos** con hover effects y transiciones suaves
- **Tipografía Moderna** y jerarquía visual clara
- **Paleta de Colores Profesional** con acentos tecnológicos

### 🔧 Stack Tecnológico
- **Next.js 14** con App Router
- **TypeScript** para type safety
- **Tailwind CSS** para estilos
- **Framer Motion** para animaciones 2D
- **React Three Fiber** para gráficos 3D
- **Resend** para envío de emails
- **Radix UI** para componentes accesibles

## 📧 Configuración del Formulario de Contacto

### 1. Configurar Resend
1. Crea una cuenta en [Resend](https://resend.com)
2. Obtén tu API key
3. Configura las variables de entorno

### 2. Variables de Entorno
Crea un archivo `.env.local`:

\`\`\`env
RESEND_API_KEY=tu_api_key_de_resend
\`\`\`

### 3. Configuración en Vercel
En el dashboard de Vercel, agrega la variable de entorno:
- **Key**: `RESEND_API_KEY`
- **Value**: Tu API key de Resend

## 🌐 Despliegue en Vercel

### Opción 1: Deploy Automático
1. Conecta tu repositorio de GitHub a Vercel
2. Configura las variables de entorno
3. Deploy automático en cada push

### Opción 2: Deploy Manual
\`\`\`bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel

# Configurar variables de entorno
vercel env add RESEND_API_KEY
\`\`\`

### Configuración de Dominio
1. En Vercel Dashboard → Settings → Domains
2. Agrega tu dominio personalizado
3. Configura los DNS según las instrucciones

## 🛠️ Desarrollo Local

### Instalación
\`\`\`bash
# Clonar el repositorio
git clone <tu-repositorio>
cd qainex-website

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env.local
# Edita .env.local con tus valores

# Ejecutar en desarrollo
npm run dev
\`\`\`

### Scripts Disponibles
\`\`\`bash
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción
npm run start    # Servidor de producción
npm run lint     # Linter
\`\`\`

## 🎯 Funcionalidades del Formulario

### Validación
- ✅ Campos requeridos (nombre, email, empresa, mensaje)
- ✅ Formato de email válido
- ✅ Longitud mínima del mensaje
- ✅ Validación en tiempo real

### Estados del Formulario
- **Loading**: Indicador visual durante el envío
- **Success**: Confirmación con animación
- **Error**: Manejo de errores con opción de reintento

### Email Template
- **HTML Responsivo** con diseño profesional
- **Información Completa** del contacto
- **Timestamp** con zona horaria de Chile
- **Branding Consistente** con QAINEX

## 🎨 Animaciones 3D

### Objetos Implementados
- **Torus Knots**: Formas matemáticas complejas rotantes
- **Esferas Wireframe**: Geometrías transparentes
- **Superficies Paramétricas**: Formas matemáticas avanzadas

### Interactividad
- **Mouse Tracking**: Los objetos responden al movimiento del mouse
- **Scroll Animations**: Efectos basados en el scroll
- **Performance Optimizada**: 60fps estables

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Optimizaciones
- **Imágenes Responsivas** con Next.js Image
- **Lazy Loading** para componentes 3D
- **Performance Budget** optimizado

## 🔒 Seguridad

### Validación
- **Server-side Validation** en la API
- **Rate Limiting** (configurar en producción)
- **Sanitización** de inputs

### Variables de Entorno
- **API Keys** nunca expuestas al cliente
- **Configuración Segura** en Vercel

## 📊 SEO y Performance

### Optimizaciones
- **Meta Tags** dinámicos
- **Structured Data** para mejor indexación
- **Core Web Vitals** optimizados
- **Lighthouse Score** > 90

### Monitoreo
- **Vercel Analytics** integrado
- **Error Tracking** con logs detallados

## 🚀 Próximos Pasos

### Funcionalidades Adicionales
- [ ] **CRM Integration** (HubSpot, Salesforce)
- [ ] **Analytics Avanzados** (Google Analytics 4)
- [ ] **A/B Testing** para optimización de conversión
- [ ] **Multi-idioma** (i18n)
- [ ] **Blog/Casos de Estudio** con CMS
- [ ] **Chat en Vivo** integrado

### Optimizaciones
- [ ] **CDN** para assets estáticos
- [ ] **Service Worker** para caching
- [ ] **Progressive Web App** features

## 📞 Soporte

Para soporte técnico o consultas sobre el desarrollo:
- **Email**: dev@qainex.com
- **Documentación**: Ver este README
- **Issues**: Usar GitHub Issues

---

**QAINEX AI Solutions** - Modelamos el futuro con Inteligencia Artificial de próxima generación.
