import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const { name, email, company, message } = await request.json()

    // Validate required fields
    if (!name || !email || !company || !message) {
      return NextResponse.json({ error: "Todos los campos son requeridos" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Formato de email inválido" }, { status: 400 })
    }

    // Send email using Resend - CONFIGURADO PARA QUE TE LLEGUE A TI
    const { data, error } = await resend.emails.send({
      from: "QAINEX Contact <onboarding@resend.dev>", // Email por defecto de Resend
      to: ["eduardoezequiel2@gmail.com"], // TU EMAIL PERSONAL - Cambia esto por tu email
      subject: `🚀 Nueva Consulta IA - ${name} (${company})`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 650px; margin: 0 auto; background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border-radius: 16px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.3);">
          
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #06b6d4 100%); padding: 40px 30px; text-align: center; position: relative;">
            <div style="background: rgba(255,255,255,0.1); width: 80px; height: 80px; border-radius: 20px; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center; backdrop-filter: blur(10px);">
              <div style="font-size: 36px;">🧠</div>
            </div>
            <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 700; text-shadow: 0 2px 4px rgba(0,0,0,0.3);">
              🚀 Nueva Consulta IA - QAINEX
            </h1>
            <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0; font-size: 16px; font-weight: 300;">
              Cliente Potencial Interesado
            </p>
          </div>
          
          <!-- Content -->
          <div style="padding: 40px 30px; background: white;">
            
            <!-- Priority Badge -->
            <div style="background: linear-gradient(135deg, #ef4444, #dc2626); color: white; padding: 8px 16px; border-radius: 20px; display: inline-block; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 30px;">
              🔥 RESPONDER URGENTE
            </div>
            
            <h2 style="color: #1e293b; margin: 0 0 25px; font-size: 22px; font-weight: 600;">
              Información del Cliente Potencial
            </h2>
            
            <!-- Contact Info Grid -->
            <div style="display: grid; gap: 20px; margin-bottom: 30px;">
              
              <div style="background: linear-gradient(135deg, #f8fafc, #f1f5f9); padding: 20px; border-radius: 12px; border-left: 4px solid #3b82f6;">
                <div style="display: flex; align-items: center; margin-bottom: 8px;">
                  <div style="background: #3b82f6; color: white; width: 24px; height: 24px; border-radius: 6px; display: flex; align-items: center; justify-content: center; margin-right: 12px; font-size: 12px;">👤</div>
                  <strong style="color: #374151; font-size: 14px;">Nombre Completo</strong>
                </div>
                <div style="color: #1f2937; font-size: 18px; font-weight: 600; margin-left: 36px;">${name}</div>
              </div>
              
              <div style="background: linear-gradient(135deg, #f0fdf4, #ecfdf5); padding: 20px; border-radius: 12px; border-left: 4px solid #10b981;">
                <div style="display: flex; align-items: center; margin-bottom: 8px;">
                  <div style="background: #10b981; color: white; width: 24px; height: 24px; border-radius: 6px; display: flex; align-items: center; justify-content: center; margin-right: 12px; font-size: 12px;">📧</div>
                  <strong style="color: #374151; font-size: 14px;">Email de Contacto</strong>
                </div>
                <div style="color: #1f2937; font-size: 16px; font-weight: 500; margin-left: 36px;">
                  <a href="mailto:${email}" style="color: #10b981; text-decoration: none; font-weight: 600;">${email}</a>
                </div>
              </div>
              
              <div style="background: linear-gradient(135deg, #fefce8, #fef3c7); padding: 20px; border-radius: 12px; border-left: 4px solid #f59e0b;">
                <div style="display: flex; align-items: center; margin-bottom: 8px;">
                  <div style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 6px; display: flex; align-items: center; justify-content: center; margin-right: 12px; font-size: 12px;">🏢</div>
                  <strong style="color: #374151; font-size: 14px;">Empresa</strong>
                </div>
                <div style="color: #1f2937; font-size: 16px; font-weight: 500; margin-left: 36px;">${company}</div>
              </div>
              
            </div>
            
            <!-- Message Section -->
            <div style="background: linear-gradient(135deg, #f0f9ff, #e0f2fe); padding: 25px; border-radius: 12px; border-left: 4px solid #0ea5e9; margin-bottom: 30px;">
              <div style="display: flex; align-items: center; margin-bottom: 15px;">
                <div style="background: #0ea5e9; color: white; width: 24px; height: 24px; border-radius: 6px; display: flex; align-items: center; justify-content: center; margin-right: 12px; font-size: 12px;">💬</div>
                <strong style="color: #374151; font-size: 16px;">Mensaje del Cliente</strong>
              </div>
              <div style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.05); margin-left: 36px;">
                <p style="color: #374151; line-height: 1.7; margin: 0; font-size: 15px; white-space: pre-wrap;">${message}</p>
              </div>
            </div>
            
            <!-- Metadata -->
            <div style="border-top: 2px solid #e5e7eb; padding-top: 25px; margin-top: 30px;">
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; font-size: 13px; color: #6b7280;">
                <div>
                  <strong style="color: #374151;">📅 Fecha de Consulta:</strong><br>
                  ${new Date().toLocaleString("es-CL", {
                    timeZone: "America/Santiago",
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })} (Chile)
                </div>
                <div>
                  <strong style="color: #374151;">⏰ Acción Requerida:</strong><br>
                  <span style="color: #ef4444; font-weight: 600;">Responder en 24 horas</span>
                </div>
              </div>
            </div>
            
            <!-- Action Buttons -->
            <div style="margin-top: 30px; text-align: center;">
              <a href="mailto:${email}?subject=Re: Consulta sobre servicios de IA - QAINEX&body=Hola ${name},%0D%0A%0D%0AGracias por contactarnos. Hemos recibido tu consulta sobre nuestros servicios de IA para ${company}.%0D%0A%0D%0AMe gustaría agendar una reunión para discutir cómo podemos ayudarte.%0D%0A%0D%0A¿Cuándo te viene bien esta semana?%0D%0A%0D%0ASaludos,%0D%0AEquipo QAINEX" style="background: linear-gradient(135deg, #3b82f6, #1d4ed8); color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; display: inline-block; margin-right: 15px; box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);">
                📧 Responder Ahora
              </a>
              <a href="https://wa.me/56912345678?text=Hola%20${name},%20gracias%20por%20contactar%20QAINEX.%20Recibimos%20tu%20consulta%20sobre%20IA%20para%20${company}.%20¿Podemos%20agendar%20una%20reunión?" style="background: linear-gradient(135deg, #10b981, #059669); color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; display: inline-block; box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);">
                📱 WhatsApp
              </a>
            </div>
            
          </div>
          
          <!-- Footer -->
          <div style="background: #f8fafc; padding: 25px 30px; text-align: center; border-top: 1px solid #e5e7eb;">
            <div style="margin-bottom: 15px;">
              <div style="background: linear-gradient(135deg, #3b82f6, #8b5cf6); width: 40px; height: 40px; border-radius: 10px; margin: 0 auto; display: flex; align-items: center; justify-content: center;">
                <span style="color: white; font-size: 18px; font-weight: bold;">Q</span>
              </div>
            </div>
            <p style="color: #6b7280; font-size: 12px; margin: 0; line-height: 1.5;">
              Este mensaje fue enviado desde el formulario de contacto de<br>
              <strong style="color: #374151;">QAINEX AI Solutions</strong><br>
              <em>Transformamos el futuro con IA de próxima generación</em>
            </p>
          </div>
          
        </div>
      `,
      text: `
        🚀 NUEVA CONSULTA IA - QAINEX AI Solutions
        
        👤 CLIENTE: ${name}
        📧 EMAIL: ${email}
        🏢 EMPRESA: ${company}
        
        💬 MENSAJE:
        ${message}
        
        📅 FECHA: ${new Date().toLocaleString("es-CL", { timeZone: "America/Santiago" })}
        ⏰ RESPONDER EN: 24 horas máximo
        
        ---
        QAINEX AI Solutions
        Transformamos el futuro con IA de próxima generación
      `,
    })

    if (error) {
      console.error("Error sending email:", error)
      return NextResponse.json({ error: "Error al enviar el mensaje" }, { status: 500 })
    }

    return NextResponse.json({ message: "Mensaje enviado exitosamente", id: data?.id }, { status: 200 })
  } catch (error) {
    console.error("Server error:", error)
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 })
  }
}
