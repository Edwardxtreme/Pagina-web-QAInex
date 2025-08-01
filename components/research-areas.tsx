"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink } from "lucide-react"

export function ResearchAreas() {
  return (
    <section id="investigacion" className="py-32 bg-slate-950">
      <div className="container px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white">Áreas de Investigación</h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Desarrollamos investigación fundamental en inteligencia artificial con enfoque en verificabilidad,
              explicabilidad y aplicaciones industriales.
            </p>
          </div>

          <div className="space-y-12">
            {/* RLVR Research */}
            <Card className="bg-gradient-to-r from-slate-800/30 to-slate-900/30 border-slate-700 overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-8">
                <CardHeader className="p-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <Badge className="bg-blue-500/20 text-blue-400 border-blue-400/30">Investigación Principal</Badge>
                  </div>
                  <CardTitle className="text-2xl text-white mb-4">
                    Reinforcement Learning with Verifiable Rewards (RLVR)
                  </CardTitle>
                  <CardDescription className="text-slate-300 text-lg leading-relaxed">
                    Desarrollamos algoritmos de aprendizaje por refuerzo que incorporan sistemas de recompensas
                    matemáticamente verificables, permitiendo auditoría completa de decisiones en sistemas críticos.
                  </CardDescription>
                  <div className="pt-6">
                    <Button
                      variant="outline"
                      className="border-blue-500/50 text-blue-400 hover:bg-blue-500/10 bg-transparent"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Ver Publicaciones
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="p-8 bg-slate-800/20">
                  <div className="space-y-6">
                    <h4 className="text-white font-semibold mb-4">Componentes Clave</h4>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <div className="text-white font-medium text-sm">Reward Verification</div>
                          <div className="text-slate-400 text-xs">Sistemas de recompensas con pruebas formales</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <div className="text-white font-medium text-sm">Policy Auditing</div>
                          <div className="text-slate-400 text-xs">Auditoría matemática de políticas de decisión</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <div className="text-white font-medium text-sm">Safety Constraints</div>
                          <div className="text-slate-400 text-xs">Restricciones de seguridad verificables</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>

            {/* Secondary Research Areas */}
            <div className="grid gap-8 md:grid-cols-2">
              <Card className="bg-slate-800/30 border-slate-700 hover:bg-slate-800/50 transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <Badge variant="outline" className="border-purple-400/30 text-purple-400 bg-purple-400/10">
                      IA Explicable
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-white">Razonamiento Simbólico-Neural</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-300 leading-relaxed mb-6">
                    Desarrollamos arquitecturas híbridas que combinan el poder computacional de las redes neuronales con
                    la interpretabilidad del razonamiento simbólico.
                  </CardDescription>
                  <div className="space-y-3">
                    <div className="text-sm text-slate-400">• Integración neural-simbólica</div>
                    <div className="text-sm text-slate-400">• Explicaciones matemáticas formales</div>
                    <div className="text-sm text-slate-400">• Verificación de consistencia lógica</div>
                  </div>
                  <div className="pt-4">
                    <Button size="sm" variant="ghost" className="text-purple-400 hover:bg-purple-500/10 p-0">
                      Explorar <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/30 border-slate-700 hover:bg-slate-800/50 transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <Badge variant="outline" className="border-green-400/30 text-green-400 bg-green-400/10">
                      Optimización
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-white">Optimización Multiobjetivo Verificable</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-300 leading-relaxed mb-6">
                    Algoritmos de optimización que balancean múltiples objetivos mientras mantienen garantías
                    matemáticas sobre la calidad de las soluciones encontradas.
                  </CardDescription>
                  <div className="space-y-3">
                    <div className="text-sm text-slate-400">• Optimización Pareto-eficiente</div>
                    <div className="text-sm text-slate-400">• Garantías de convergencia</div>
                    <div className="text-sm text-slate-400">• Análisis de sensibilidad</div>
                  </div>
                  <div className="pt-4">
                    <Button size="sm" variant="ghost" className="text-green-400 hover:bg-green-500/10 p-0">
                      Explorar <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
