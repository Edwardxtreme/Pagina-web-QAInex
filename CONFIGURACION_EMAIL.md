# 📧 Configuración del Sistema de Envío de Emails

## 🚀 Pasos para Configurar el Envío de Emails

### 1. **Crear Cuenta en Resend**
1. Ve a [resend.com](https://resend.com)
2. Crea una cuenta gratuita
3. Verifica tu email

### 2. **Obtener API Key**
1. En el dashboard de Resend, ve a **API Keys**
2. Crea una nueva API key
3. Copia la key (empieza con `re_`)

### 3. **Configurar Variables de Entorno**

#### **Desarrollo Local:**
Crea un archivo `.env.local` en la raíz del proyecto:
\`\`\`env
RESEND_API_KEY=re_tu_api_key_aqui
\`\`\`

#### **Producción en Vercel:**
1. Ve a tu proyecto en Vercel Dashboard
2. Settings → Environment Variables
3. Agrega:
   - **Name**: `RESEND_API_KEY`
   - **Value**: `re_tu_api_key_aqui`
   - **Environment**: Production, Preview, Development

### 4. **Configurar Dominio de Envío (Opcional pero Recomendado)**

#### **Para Emails Profesionales:**
1. En Resend Dashboard → **Domains**
2. Agrega tu dominio (ej: `qainex.com`)
3. Configura los registros DNS según las instrucciones
4. Verifica el dominio

#### **Registros DNS Típicos:**
\`\`\`
Tipo: TXT
Nombre: @
Valor: v=spf1 include:_spf.resend.com ~all

Tipo: CNAME
Nombre: resend._domainkey
Valor: resend._domainkey.resend.com

Tipo: CNAME
Nombre: _dmarc
Valor: v=DMARC1; p=quarantine; rua=mailto:dmarc@tudominio.com
\`\`\`

### 5. **Personalizar Email Template**

El template actual está en `app/api/contact/route.ts`. Puedes personalizarlo:

\`\`\`typescript
// Cambiar el remitente
from: "QAINEX Contact <contacto@tudominio.com>",

// Cambiar el destinatario
to: ["contacto@qainex.com", "ventas@qainex.com"],

// Personalizar el asunto
subject: `Nueva consulta de ${name} - ${company}`,
\`\`\`

### 6. **Probar el Sistema**

#### **Desarrollo:**
\`\`\`bash
npm run dev
# Abre http://localhost:3000
# Haz clic en "Contacto" y envía un mensaje de prueba
\`\`\`

#### **Verificar Logs:**
- En desarrollo: Revisa la consola del navegador y terminal
- En producción: Ve a Vercel Dashboard → Functions → Logs

### 7. **Configuración Avanzada (Opcional)**

#### **Rate Limiting:**
\`\`\`typescript
// En app/api/contact/route.ts
const rateLimiter = new Map()

export async function POST(request: NextRequest) {
  const ip = request.ip || 'anonymous'
  const now = Date.now()
  const windowMs = 15 * 60 * 1000 // 15 minutos
  const maxRequests = 5

  if (rateLimiter.has(ip)) {
    const { count, resetTime } = rateLimiter.get(ip)
    if (now < resetTime) {
      if (count >= maxRequests) {
        return NextResponse.json(
          { error: "Demasiadas solicitudes. Intenta en 15 minutos." },
          { status: 429 }
        )
      }
      rateLimiter.set(ip, { count: count + 1, resetTime })
    } else {
      rateLimiter.set(ip, { count: 1, resetTime: now + windowMs })
    }
  } else {
    rateLimiter.set(ip, { count: 1, resetTime: now + windowMs })
  }

  // ... resto del código
}
\`\`\`

#### **Notificaciones Slack (Opcional):**
\`\`\`typescript
// Agregar webhook de Slack
const slackWebhook = process.env.SLACK_WEBHOOK_URL

if (slackWebhook) {
  await fetch(slackWebhook, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      text: `Nueva consulta de ${name} (${company}) - ${email}`
    })
  })
}
\`\`\`

## 🔧 Troubleshooting

### **Error: "API key not found"**
- Verifica que `RESEND_API_KEY` esté configurada
- Asegúrate de que la key empiece con `re_`
- Redeploya en Vercel después de agregar variables

### **Error: "Domain not verified"**
- Usa el dominio por defecto de Resend inicialmente
- Configura tu dominio personalizado después

### **Emails no llegan:**
1. Revisa la carpeta de spam
2. Verifica que el email de destino sea correcto
3. Revisa los logs en Vercel Dashboard

### **Error 500 en producción:**
- Revisa los logs en Vercel
- Verifica que todas las variables de entorno estén configuradas
- Asegúrate de que el dominio esté verificado

## 📊 Monitoreo

### **Métricas en Resend:**
- Dashboard → Analytics
- Emails enviados, entregados, abiertos
- Tasas de rebote y spam

### **Logs en Vercel:**
- Dashboard → Functions → contact
- Errores y tiempos de respuesta
- Uso de recursos

## 🚀 Deploy en Vercel

### **Automático (Recomendado):**
1. Conecta tu repo de GitHub a Vercel
2. Configura las variables de entorno
3. Deploy automático en cada push

### **Manual:**
\`\`\`bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel

# Configurar variables
vercel env add RESEND_API_KEY
\`\`\`

## ✅ Checklist Final

- [ ] Cuenta de Resend creada
- [ ] API Key obtenida
- [ ] Variables de entorno configuradas
- [ ] Dominio verificado (opcional)
- [ ] Template personalizado
- [ ] Pruebas realizadas
- [ ] Deploy en Vercel completado
- [ ] Monitoreo configurado

¡Tu sistema de emails está listo! 🎉
