"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function ManifestoSection() {
  return (
    <section className="py-32 bg-slate-900/50">
      <div className="container px-6 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <Badge variant="outline" className="border-purple-400/30 text-purple-400 bg-purple-400/10">
              Manifiesto Científico
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-white">Nuestra Visión</h2>
          </div>

          <Card className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 border-slate-700 backdrop-blur-sm">
            <CardContent className="p-12">
              <blockquote className="text-xl md:text-2xl text-slate-200 leading-relaxed font-light italic text-center">
                "Estudiamos el proceso mediante el cual los modelos de razonamiento entrenados con aprendizaje de
                refuerzo con recompensas verificables (RLVR) pueden tomar decisiones eficientes, seguras y auditables
                para entornos de alta complejidad."
              </blockquote>
              <div className="mt-8 text-center">
                <div className="text-slate-400 text-sm">— Equipo de Investigación QAINEX</div>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-8 md:grid-cols-3 mt-16">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto">
                <div className="text-2xl">🔬</div>
              </div>
              <h3 className="text-lg font-semibold text-white">Rigor Científico</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Cada algoritmo está fundamentado en teoría matemática sólida y validado mediante pruebas formales.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto">
                <div className="text-2xl">⚡</div>
              </div>
              <h3 className="text-lg font-semibold text-white">Eficiencia Verificable</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Optimizamos no solo el rendimiento, sino la capacidad de verificar matemáticamente cada decisión.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto">
                <div className="text-2xl">🎯</div>
              </div>
              <h3 className="text-lg font-semibold text-white">Impacto Real</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Aplicamos investigación de vanguardia para resolver problemas críticos en sectores industriales.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
