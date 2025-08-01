"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function DesignSystem() {
  return (
    <div className="space-y-12 p-8 bg-white">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-slate-900">Sistema de Diseño - QAINEX Industrial</h1>
        <p className="text-slate-600">Paleta de colores, tipografía y componentes</p>
      </div>

      {/* Color Palette */}
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle>Paleta de Colores</CardTitle>
          <CardDescription>Colores corporativos para sectores industriales</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-900">Colores Primarios</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <div className="w-full h-20 bg-blue-600 rounded-lg"></div>
                <div className="text-sm">
                  <div className="font-medium">Blue 600</div>
                  <div className="text-slate-500">#2563eb</div>
                  <div className="text-xs text-slate-400">Principal / CTAs</div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="w-full h-20 bg-slate-900 rounded-lg"></div>
                <div className="text-sm">
                  <div className="font-medium">Slate 900</div>
                  <div className="text-slate-500">#0f172a</div>
                  <div className="text-xs text-slate-400">Textos principales</div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="w-full h-20 bg-slate-600 rounded-lg"></div>
                <div className="text-sm">
                  <div className="font-medium">Slate 600</div>
                  <div className="text-slate-500">#475569</div>
                  <div className="text-xs text-slate-400">Textos secundarios</div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="w-full h-20 bg-slate-200 rounded-lg"></div>
                <div className="text-sm">
                  <div className="font-medium">Slate 200</div>
                  <div className="text-slate-500">#e2e8f0</div>
                  <div className="text-xs text-slate-400">Bordes / Divisores</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-900">Colores por Vertical</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <div className="w-full h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg"></div>
                <div className="text-sm">
                  <div className="font-medium">Minería</div>
                  <div className="text-slate-500">Orange-Red</div>
                  <div className="text-xs text-slate-400">Tierra / Extracción</div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="w-full h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg"></div>
                <div className="text-sm">
                  <div className="font-medium">Agricultura</div>
                  <div className="text-slate-500">Green-Emerald</div>
                  <div className="text-xs text-slate-400">Naturaleza / Crecimiento</div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="w-full h-20 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg"></div>
                <div className="text-sm">
                  <div className="font-medium">Finanzas</div>
                  <div className="text-slate-500">Blue-Indigo</div>
                  <div className="text-xs text-slate-400">Confianza / Estabilidad</div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="w-full h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg"></div>
                <div className="text-sm">
                  <div className="font-medium">Industrial</div>
                  <div className="text-slate-500">Purple-Pink</div>
                  <div className="text-xs text-slate-400">Innovación / Tecnología</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-900">Colores de Estado</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <div className="w-full h-20 bg-green-500 rounded-lg"></div>
                <div className="text-sm">
                  <div className="font-medium">Success</div>
                  <div className="text-slate-500">#22c55e</div>
                  <div className="text-xs text-slate-400">Éxito / Completado</div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="w-full h-20 bg-yellow-500 rounded-lg"></div>
                <div className="text-sm">
                  <div className="font-medium">Warning</div>
                  <div className="text-slate-500">#eab308</div>
                  <div className="text-xs text-slate-400">Advertencia / Pendiente</div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="w-full h-20 bg-red-500 rounded-lg"></div>
                <div className="text-sm">
                  <div className="font-medium">Error</div>
                  <div className="text-slate-500">#ef4444</div>
                  <div className="text-xs text-slate-400">Error / Crítico</div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="w-full h-20 bg-cyan-500 rounded-lg"></div>
                <div className="text-sm">
                  <div className="font-medium">Info</div>
                  <div className="text-slate-500">#06b6d4</div>
                  <div className="text-xs text-slate-400">Información / Neutral</div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Typography */}
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle>Tipografía</CardTitle>
          <CardDescription>Jerarquía tipográfica para comunicación industrial</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold text-slate-900">Heading 1 - 4xl Bold</h1>
              <p className="text-sm text-slate-500">Títulos principales de página</p>
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-slate-900">Heading 2 - 3xl Bold</h2>
              <p className="text-sm text-slate-500">Títulos de sección</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-slate-900">Heading 3 - xl Semibold</h3>
              <p className="text-sm text-slate-500">Subtítulos y cards</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-lg font-medium text-slate-900">Heading 4 - lg Medium</h4>
              <p className="text-sm text-slate-500">Títulos menores</p>
            </div>
            <div className="space-y-2">
              <p className="text-base text-slate-700">Body Text - base Regular</p>
              <p className="text-sm text-slate-500">Texto principal de contenido</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-slate-600">Small Text - sm Regular</p>
              <p className="text-xs text-slate-500">Texto secundario y descripciones</p>
            </div>
            <div className="space-y-2">
              <p className="text-xs text-slate-500">Caption - xs Regular</p>
              <p className="text-xs text-slate-400">Metadatos y texto auxiliar</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Components */}
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle>Componentes</CardTitle>
          <CardDescription>Elementos de UI reutilizables</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-900">Botones</h3>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700">Primary Button</Button>
              <Button variant="outline">Secondary Button</Button>
              <Button variant="ghost">Ghost Button</Button>
              <Button size="sm">Small Button</Button>
              <Button size="lg">Large Button</Button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-900">Badges</h3>
            <div className="flex flex-wrap gap-4">
              <Badge>Default</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge className="bg-green-100 text-green-800">Success</Badge>
              <Badge className="bg-yellow-100 text-yellow-800">Warning</Badge>
              <Badge className="bg-red-100 text-red-800">Error</Badge>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-900">Cards</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="border-slate-200">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg">Service Card</CardTitle>
                  <CardDescription>Descripción del servicio</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">Contenido de la card con información relevante.</p>
                </CardContent>
              </Card>
              <Card className="border-slate-200 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg">Interactive Card</CardTitle>
                  <CardDescription>Card con hover effect</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">Card interactiva para casos de uso y verticales.</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-900">Iconografía Industrial</h3>
            <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto">
                  <div className="w-6 h-6 bg-orange-500 rounded"></div>
                </div>
                <div className="text-xs">Minería</div>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto">
                  <div className="w-6 h-6 bg-green-500 rounded"></div>
                </div>
                <div className="text-xs">Agricultura</div>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto">
                  <div className="w-6 h-6 bg-blue-500 rounded"></div>
                </div>
                <div className="text-xs">Finanzas</div>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto">
                  <div className="w-6 h-6 bg-purple-500 rounded"></div>
                </div>
                <div className="text-xs">Industrial</div>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mx-auto">
                  <div className="w-6 h-6 bg-slate-500 rounded"></div>
                </div>
                <div className="text-xs">Data</div>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mx-auto">
                  <div className="w-6 h-6 bg-cyan-500 rounded"></div>
                </div>
                <div className="text-xs">Analytics</div>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mx-auto">
                  <div className="w-6 h-6 bg-indigo-500 rounded"></div>
                </div>
                <div className="text-xs">AI/ML</div>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto">
                  <div className="w-6 h-6 bg-emerald-500 rounded"></div>
                </div>
                <div className="text-xs">Security</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Layout Principles */}
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle>Principios de Layout</CardTitle>
          <CardDescription>Guías de diseño para sectores industriales</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-3">
              <h4 className="font-semibold text-slate-900">Espaciado</h4>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Secciones: 96px (py-24)</li>
                <li>• Contenedores: 32px (px-8)</li>
                <li>• Cards: 24px (p-6)</li>
                <li>• Elementos: 16px (gap-4)</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-slate-900">Grid System</h4>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Mobile: 1 columna</li>
                <li>• Tablet: 2-3 columnas</li>
                <li>• Desktop: 3-4 columnas</li>
                <li>• Max width: 1200px</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-slate-900">Bordes y Sombras</h4>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Border radius: 8px (rounded-lg)</li>
                <li>• Cards: 12px (rounded-xl)</li>
                <li>• Botones: 6px (rounded-md)</li>
                <li>• Sombras sutiles para depth</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-slate-900">Responsive</h4>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Mobile first approach</li>
                <li>• Breakpoints estándar</li>
                <li>• Navegación adaptativa</li>
                <li>• Imágenes optimizadas</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
