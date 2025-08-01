"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Wireframes() {
  return (
    <div className="space-y-12 p-8 bg-slate-50">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-slate-900">Wireframes - QAINEX Industrial</h1>
        <p className="text-slate-600">Estructura y layout de páginas clave</p>
      </div>

      {/* Homepage Wireframe */}
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Badge variant="outline">01</Badge>
            <span>Homepage - Página Principal</span>
          </CardTitle>
          <CardDescription>Estructura de la landing page principal</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="border-2 border-dashed border-slate-300 p-4 rounded-lg">
            <div className="text-sm font-medium text-slate-700 mb-2">Header</div>
            <div className="bg-slate-100 h-12 rounded flex items-center justify-between px-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-200 rounded"></div>
                <span className="text-xs">QAINEX Logo</span>
              </div>
              <div className="flex space-x-4 text-xs">
                <span>Servicios</span>
                <span>Verticales</span>
                <span>Casos</span>
                <span>Contacto</span>
              </div>
              <div className="flex space-x-2">
                <div className="bg-white px-3 py-1 rounded text-xs">Demo</div>
                <div className="bg-blue-500 text-white px-3 py-1 rounded text-xs">Cotizar</div>
              </div>
            </div>
          </div>

          <div className="border-2 border-dashed border-slate-300 p-4 rounded-lg">
            <div className="text-sm font-medium text-slate-700 mb-2">Hero Section</div>
            <div className="bg-gradient-to-r from-slate-100 to-slate-50 h-64 rounded flex flex-col items-center justify-center text-center space-y-4">
              <div className="bg-blue-100 px-3 py-1 rounded-full text-xs">Badge: Especialistas</div>
              <div className="text-lg font-bold">Título Principal</div>
              <div className="text-sm text-slate-600 max-w-md">Descripción de servicios industriales</div>
              <div className="flex space-x-2">
                <div className="bg-blue-500 text-white px-4 py-2 rounded text-xs">Demo Gratuito</div>
                <div className="border border-slate-300 px-4 py-2 rounded text-xs">Cotizar</div>
              </div>
              <div className="flex space-x-8 text-xs">
                <div>500M+ Datos</div>
                <div>99.8% Precisión</div>
                <div>200+ Proyectos</div>
                <div>ISO 27001</div>
              </div>
            </div>
          </div>

          <div className="border-2 border-dashed border-slate-300 p-4 rounded-lg">
            <div className="text-sm font-medium text-slate-700 mb-2">Servicios (3 columnas)</div>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-slate-100 h-32 rounded p-3">
                <div className="w-8 h-8 bg-blue-200 rounded mb-2"></div>
                <div className="text-xs font-medium">Data Labeling</div>
                <div className="text-xs text-slate-500 mt-1">Descripción</div>
              </div>
              <div className="bg-slate-100 h-32 rounded p-3">
                <div className="w-8 h-8 bg-green-200 rounded mb-2"></div>
                <div className="text-xs font-medium">Automatización</div>
                <div className="text-xs text-slate-500 mt-1">Descripción</div>
              </div>
              <div className="bg-slate-100 h-32 rounded p-3">
                <div className="w-8 h-8 bg-purple-200 rounded mb-2"></div>
                <div className="text-xs font-medium">Dashboards</div>
                <div className="text-xs text-slate-500 mt-1">Descripción</div>
              </div>
            </div>
          </div>

          <div className="border-2 border-dashed border-slate-300 p-4 rounded-lg">
            <div className="text-sm font-medium text-slate-700 mb-2">Verticales (4 columnas)</div>
            <div className="grid grid-cols-4 gap-3">
              {["Minería", "Agricultura", "Finanzas", "Industrial"].map((vertical, i) => (
                <div key={i} className="bg-slate-100 h-40 rounded p-3">
                  <div className="w-10 h-10 bg-orange-200 rounded-lg mb-2 mx-auto"></div>
                  <div className="text-xs font-medium text-center">{vertical}</div>
                  <div className="text-xs text-slate-500 mt-1 text-center">Casos de uso</div>
                  <div className="bg-green-50 rounded p-1 mt-2">
                    <div className="text-xs text-green-700">Resultados</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Verticales Page Wireframe */}
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Badge variant="outline">02</Badge>
            <span>Página de Verticales</span>
          </CardTitle>
          <CardDescription>Detalle de cada vertical industrial</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="border-2 border-dashed border-slate-300 p-4 rounded-lg">
            <div className="text-sm font-medium text-slate-700 mb-2">Header de Vertical</div>
            <div className="bg-gradient-to-r from-orange-100 to-orange-50 h-32 rounded flex items-center justify-center">
              <div className="text-center space-y-2">
                <div className="w-16 h-16 bg-orange-200 rounded-2xl mx-auto"></div>
                <div className="font-bold">Minería</div>
                <div className="text-sm text-slate-600">Descripción de la vertical</div>
              </div>
            </div>
          </div>

          <div className="border-2 border-dashed border-slate-300 p-4 rounded-lg">
            <div className="text-sm font-medium text-slate-700 mb-2">Casos de Uso y Beneficios</div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="bg-slate-100 h-24 rounded p-3">
                  <div className="text-xs font-medium">Casos de Uso</div>
                  <div className="text-xs text-slate-500 mt-1">• Detección satelital</div>
                  <div className="text-xs text-slate-500">• Monitoreo equipos</div>
                  <div className="text-xs text-slate-500">• Análisis seguridad</div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="bg-green-50 h-24 rounded p-3">
                  <div className="text-xs font-medium text-green-900">Resultados</div>
                  <div className="text-xs text-green-700 mt-1">• -35% costos</div>
                  <div className="text-xs text-green-700">• +50% seguridad</div>
                  <div className="text-xs text-green-700">• +25% productividad</div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-2 border-dashed border-slate-300 p-4 rounded-lg">
            <div className="text-sm font-medium text-slate-700 mb-2">Casos de Éxito Relacionados</div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-100 h-20 rounded p-3">
                <div className="text-xs font-medium">Minera del Pacífico</div>
                <div className="text-xs text-slate-500">ROI: +280%</div>
              </div>
              <div className="bg-slate-100 h-20 rounded p-3">
                <div className="text-xs font-medium">Copper Mining Co.</div>
                <div className="text-xs text-slate-500">ROI: +320%</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Services Page Wireframe */}
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Badge variant="outline">03</Badge>
            <span>Página de Servicios</span>
          </CardTitle>
          <CardDescription>Detalle técnico de cada servicio</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="border-2 border-dashed border-slate-300 p-4 rounded-lg">
            <div className="text-sm font-medium text-slate-700 mb-2">Servicio Principal</div>
            <div className="bg-blue-50 h-40 rounded p-4">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-200 rounded-xl"></div>
                <div className="flex-1">
                  <div className="font-medium text-sm">Data Labeling Especializado</div>
                  <div className="text-xs text-slate-600 mt-1">Descripción técnica detallada</div>
                  <div className="mt-3 space-y-1">
                    <div className="text-xs">✓ Imágenes satelitales</div>
                    <div className="text-xs">✓ Datos de sensores</div>
                    <div className="text-xs">✓ Video industrial</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-2 border-dashed border-slate-300 p-4 rounded-lg">
            <div className="text-sm font-medium text-slate-700 mb-2">Proceso y Metodología</div>
            <div className="grid grid-cols-4 gap-2">
              <div className="bg-slate-100 h-16 rounded p-2 text-center">
                <div className="text-xs font-medium">1. Análisis</div>
              </div>
              <div className="bg-slate-100 h-16 rounded p-2 text-center">
                <div className="text-xs font-medium">2. Labeling</div>
              </div>
              <div className="bg-slate-100 h-16 rounded p-2 text-center">
                <div className="text-xs font-medium">3. Validación</div>
              </div>
              <div className="bg-slate-100 h-16 rounded p-2 text-center">
                <div className="text-xs font-medium">4. Entrega</div>
              </div>
            </div>
          </div>

          <div className="border-2 border-dashed border-slate-300 p-4 rounded-lg">
            <div className="text-sm font-medium text-slate-700 mb-2">Tecnologías y Herramientas</div>
            <div className="bg-slate-100 h-20 rounded p-3">
              <div className="text-xs">Tecnologías utilizadas, APIs, frameworks, etc.</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contact Page Wireframe */}
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Badge variant="outline">04</Badge>
            <span>Página de Contacto</span>
          </CardTitle>
          <CardDescription>Formulario de cotización y contacto</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="border-2 border-dashed border-slate-300 p-4 rounded-lg">
            <div className="text-sm font-medium text-slate-700 mb-2">Formulario de Cotización</div>
            <div className="bg-white border rounded-lg p-4 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 h-8 rounded"></div>
                <div className="bg-slate-50 h-8 rounded"></div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 h-8 rounded"></div>
                <div className="bg-slate-50 h-8 rounded"></div>
              </div>
              <div className="bg-slate-50 h-8 rounded"></div>
              <div className="bg-slate-50 h-8 rounded"></div>
              <div className="bg-slate-50 h-20 rounded"></div>
              <div className="bg-blue-500 h-10 rounded text-white flex items-center justify-center text-xs">
                Enviar Solicitud de Cotización
              </div>
            </div>
          </div>

          <div className="border-2 border-dashed border-slate-300 p-4 rounded-lg">
            <div className="text-sm font-medium text-slate-700 mb-2">Información de Contacto</div>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-slate-100 h-16 rounded p-3 text-center">
                <div className="text-xs font-medium">Email</div>
                <div className="text-xs text-slate-500">contacto@qainex.com</div>
              </div>
              <div className="bg-slate-100 h-16 rounded p-3 text-center">
                <div className="text-xs font-medium">Teléfono</div>
                <div className="text-xs text-slate-500">+1 (555) 123-4567</div>
              </div>
              <div className="bg-slate-100 h-16 rounded p-3 text-center">
                <div className="text-xs font-medium">Ubicación</div>
                <div className="text-xs text-slate-500">México</div>
              </div>
            </div>
          </div>

          <div className="border-2 border-dashed border-slate-300 p-4 rounded-lg">
            <div className="text-sm font-medium text-slate-700 mb-2">Garantías y SLA</div>
            <div className="bg-green-50 rounded p-3">
              <div className="text-xs space-y-1">
                <div>✓ Respuesta en 24 horas</div>
                <div>✓ Demo personalizado</div>
                <div>✓ Confidencialidad garantizada</div>
                <div>✓ Consulta inicial gratuita</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
