import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Brain,
  GitBranch,
  Zap,
  Target,
  Globe,
  ChevronDown,
  ExternalLink,
  BookOpen,
  Cpu,
  Network,
  Eye,
  Calculator,
  Layers,
  Activity,
} from "lucide-react"
import Link from "next/link"
import { MathVisualizations } from "@/components/math-visualizations"
import { ManifestoSection } from "@/components/manifesto-section"
import { ResearchAreas } from "@/components/research-areas"

export default function QainexResearch() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60">
        <div className="container flex h-16 items-center justify-between px-6 md:px-8">
          <Link href="/" className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg">
              <Brain className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-white">QAINEX</span>
              <span className="text-xs text-slate-400 -mt-1 tracking-wide">IA SOLUTION</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#investigacion"
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              Investigación
            </Link>
            <Link
              href="#aplicaciones"
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              Aplicaciones
            </Link>
            <Link href="#tecnologia" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Tecnología
            </Link>
            <Link href="#colaborar" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Colaborar
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-slate-300 hover:text-white hover:bg-slate-800">
              <Globe className="h-4 w-4 mr-2" />
              EN
            </Button>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
              Contacto
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-32 md:py-48 overflow-hidden">
          <div className="container relative px-6 md:px-8">
            <div className="max-w-5xl mx-auto text-center space-y-12">
              <div className="space-y-8">
                <Badge variant="outline" className="border-blue-400/30 text-blue-400 bg-blue-400/10">
                  Investigación en IA Avanzada
                </Badge>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
                  QAINEX IA SOLUTION
                  <br />
                  <span className="text-2xl md:text-3xl lg:text-4xl font-light text-slate-300 mt-4 block">
                    Investigación, Ingeniería y Aplicaciones Inteligentes
                  </span>
                </h1>

                <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed font-light">
                  Desarrollamos sistemas de inteligencia artificial capaces de razonamiento verificable para resolver
                  problemas complejos en sectores industriales estratégicos.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-4 text-lg font-medium">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Explorar Investigación
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-4 text-lg font-medium bg-transparent"
                >
                  <GitBranch className="mr-2 h-5 w-5" />
                  Ver Aplicaciones
                </Button>
              </div>

              {/* Scroll Indicator */}
              <div className="pt-16 flex justify-center">
                <ChevronDown className="h-6 w-6 text-slate-400 animate-bounce" />
              </div>
            </div>
          </div>

          {/* Mathematical Background */}
          <div className="absolute inset-0 -z-10">
            <MathVisualizations />
          </div>
        </section>

        {/* Manifesto Section */}
        <ManifestoSection />

        {/* Research Areas Section */}
        <ResearchAreas />

        {/* Research at Scale Section */}
        <section className="py-32 bg-slate-900/50">
          <div className="container px-6 md:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center space-y-6 mb-20">
                <h2 className="text-3xl md:text-5xl font-bold text-white">Investigación de IA a Escala</h2>
                <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
                  Nuestra misión es acelerar el desarrollo de sistemas de inteligencia artificial capaces de resolver
                  problemas reales a nivel humano en sectores industriales estratégicos.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-3 mb-16">
                <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                      <Network className="h-6 w-6 text-blue-400" />
                    </div>
                    <CardTitle className="text-xl text-white">Arquitecturas Avanzadas</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-300 leading-relaxed">
                      Desarrollamos arquitecturas de redes neuronales que integran razonamiento simbólico con
                      aprendizaje profundo para decisiones verificables.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
                      <Eye className="h-6 w-6 text-purple-400" />
                    </div>
                    <CardTitle className="text-xl text-white">IA Explicable</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-300 leading-relaxed">
                      Creamos modelos que no solo predicen, sino que explican su razonamiento mediante estructuras
                      matemáticas interpretables y auditables.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                      <Target className="h-6 w-6 text-green-400" />
                    </div>
                    <CardTitle className="text-xl text-white">Optimización Verificable</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-300 leading-relaxed">
                      Implementamos sistemas de recompensas verificables que garantizan decisiones óptimas y seguras en
                      entornos de alta complejidad.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-600 text-slate-300 hover:bg-slate-800 bg-transparent"
                >
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Acceder a Publicaciones
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Industrial Applications Section */}
        <section id="aplicaciones" className="py-32 bg-slate-950">
          <div className="container px-6 md:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center space-y-6 mb-20">
                <h2 className="text-3xl md:text-5xl font-bold text-white">Aplicaciones Industriales</h2>
                <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
                  Aplicamos investigación de vanguardia para resolver desafíos complejos en sectores críticos de la
                  economía global.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {/* Minería */}
                <Card className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700 hover:border-orange-500/50 transition-all duration-500">
                  <CardHeader className="text-center pb-6">
                    <div className="mx-auto w-16 h-16 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Layers className="h-8 w-8 text-orange-400" />
                    </div>
                    <CardTitle className="text-xl text-white">Minería Inteligente</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-slate-300 text-center leading-relaxed">
                      Optimización de procesos extractivos mediante modelos de razonamiento que integran datos
                      geológicos, ambientales y operacionales.
                    </CardDescription>
                    <div className="space-y-2">
                      <div className="text-xs text-slate-400">• Predicción de yacimientos</div>
                      <div className="text-xs text-slate-400">• Optimización de rutas</div>
                      <div className="text-xs text-slate-400">• Análisis de riesgo ambiental</div>
                      <div className="text-xs text-slate-400">• Mantenimiento predictivo</div>
                    </div>
                  </CardContent>
                </Card>

                {/* Finanzas */}
                <Card className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700 hover:border-blue-500/50 transition-all duration-500">
                  <CardHeader className="text-center pb-6">
                    <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Activity className="h-8 w-8 text-blue-400" />
                    </div>
                    <CardTitle className="text-xl text-white">Finanzas Cuantitativas</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-slate-300 text-center leading-relaxed">
                      Modelos de razonamiento para análisis de riesgo, detección de anomalías y optimización de
                      portafolios con explicabilidad completa.
                    </CardDescription>
                    <div className="space-y-2">
                      <div className="text-xs text-slate-400">• Análisis de riesgo sistémico</div>
                      <div className="text-xs text-slate-400">• Detección de fraudes</div>
                      <div className="text-xs text-slate-400">• Optimización de portafolios</div>
                      <div className="text-xs text-slate-400">• Cumplimiento regulatorio</div>
                    </div>
                  </CardContent>
                </Card>

                {/* Agricultura */}
                <Card className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700 hover:border-green-500/50 transition-all duration-500">
                  <CardHeader className="text-center pb-6">
                    <div className="mx-auto w-16 h-16 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Zap className="h-8 w-8 text-green-400" />
                    </div>
                    <CardTitle className="text-xl text-white">Agricultura de Precisión</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-slate-300 text-center leading-relaxed">
                      Sistemas de decisión autónomos para optimización de cultivos basados en modelos climáticos,
                      edáficos y biológicos integrados.
                    </CardDescription>
                    <div className="space-y-2">
                      <div className="text-xs text-slate-400">• Predicción de rendimientos</div>
                      <div className="text-xs text-slate-400">• Optimización de recursos</div>
                      <div className="text-xs text-slate-400">• Detección temprana de plagas</div>
                      <div className="text-xs text-slate-400">• Análisis de suelos</div>
                    </div>
                  </CardContent>
                </Card>

                {/* Automatización Industrial */}
                <Card className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700 hover:border-purple-500/50 transition-all duration-500">
                  <CardHeader className="text-center pb-6">
                    <div className="mx-auto w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Cpu className="h-8 w-8 text-purple-400" />
                    </div>
                    <CardTitle className="text-xl text-white">Automatización Inteligente</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-slate-300 text-center leading-relaxed">
                      Agentes autónomos con capacidades de razonamiento para control de procesos industriales complejos
                      y toma de decisiones en tiempo real.
                    </CardDescription>
                    <div className="space-y-2">
                      <div className="text-xs text-slate-400">• Control de procesos</div>
                      <div className="text-xs text-slate-400">• Optimización energética</div>
                      <div className="text-xs text-slate-400">• Mantenimiento autónomo</div>
                      <div className="text-xs text-slate-400">• Calidad predictiva</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section id="tecnologia" className="py-32 bg-slate-900/30">
          <div className="container px-6 md:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center space-y-6 mb-20">
                <h2 className="text-3xl md:text-5xl font-bold text-white">Tecnología Core</h2>
                <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
                  Nuestro stack tecnológico combina investigación teórica con implementaciones de alto rendimiento para
                  sistemas de producción.
                </p>
              </div>

              <div className="grid gap-12 lg:grid-cols-2 items-center">
                <div className="space-y-8">
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <Calculator className="h-6 w-6 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-white mb-2">
                          RLVR (Reinforcement Learning with Verifiable Rewards)
                        </h3>
                        <p className="text-slate-300 leading-relaxed">
                          Implementamos algoritmos de aprendizaje por refuerzo con sistemas de recompensas
                          matemáticamente verificables, garantizando decisiones auditables y seguras.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-purple-500/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <Network className="h-6 w-6 text-purple-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-white mb-2">Razonamiento Simbólico-Neural</h3>
                        <p className="text-slate-300 leading-relaxed">
                          Arquitecturas híbridas que combinan redes neuronales profundas con sistemas de razonamiento
                          simbólico para interpretabilidad y precisión lógica.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-green-500/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <Eye className="h-6 w-6 text-green-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-white mb-2">Explicabilidad Matemática</h3>
                        <p className="text-slate-300 leading-relaxed">
                          Desarrollamos métodos de explicabilidad basados en estructuras matemáticas formales que
                          permiten auditoría completa de decisiones de IA.
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button
                    size="lg"
                    variant="outline"
                    className="border-slate-600 text-slate-300 hover:bg-slate-800 bg-transparent"
                  >
                    <BookOpen className="mr-2 h-5 w-5" />
                    Documentación Técnica
                  </Button>
                </div>

                <div className="relative">
                  <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-3xl p-8 backdrop-blur-sm border border-slate-700">
                    <div className="space-y-6">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-white font-semibold">Stack Tecnológico</h4>
                        <Badge className="bg-blue-500/20 text-blue-400 border-blue-400/30">Research Grade</Badge>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-white font-medium">Deep Learning Frameworks</span>
                          <span className="text-blue-400 font-mono text-sm">PyTorch, JAX</span>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-white font-medium">Symbolic Reasoning</span>
                          <span className="text-purple-400 font-mono text-sm">Z3, Lean, Coq</span>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-white font-medium">Optimization</span>
                          <span className="text-green-400 font-mono text-sm">CVXPY, Gurobi</span>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-white font-medium">Distributed Computing</span>
                          <span className="text-orange-400 font-mono text-sm">Ray, Dask</span>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-white font-medium">Verification</span>
                          <span className="text-cyan-400 font-mono text-sm">CBMC, KLEE</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mt-6">
                        <div className="bg-slate-800/50 rounded-lg p-4 text-center">
                          <div className="text-2xl font-light text-blue-400 mb-1">99.9%</div>
                          <div className="text-xs text-slate-400">Verificabilidad</div>
                        </div>
                        <div className="bg-slate-800/50 rounded-lg p-4 text-center">
                          <div className="text-2xl font-light text-green-400 mb-1">&lt;10ms</div>
                          <div className="text-xs text-slate-400">Latencia</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Collaboration CTA */}
        <section id="colaborar" className="py-32 bg-gradient-to-br from-blue-900/20 to-purple-900/20">
          <div className="container px-6 md:px-8 text-center">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold text-white">Colabora con Nosotros</h2>
              <p className="text-xl text-slate-300 leading-relaxed">
                Buscamos colaboraciones con instituciones de investigación, empresas industriales y organizaciones que
                compartan nuestra visión de IA verificable y explicable.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-4">
                  <Target className="mr-2 h-5 w-5" />
                  Proponer Proyecto
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-600 text-slate-300 hover:bg-slate-800 bg-transparent px-8 py-4"
                >
                  <BookOpen className="mr-2 h-5 w-5" />
                  Alianzas Estratégicas
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-16">
        <div className="container px-6 md:px-8">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg">
                  <Brain className="h-5 w-5 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-white">QAINEX</span>
                  <span className="text-xs text-slate-400 -mt-1">IA SOLUTION</span>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Investigación, ingeniería y aplicaciones inteligentes para resolver problemas complejos mediante IA
                verificable.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-white">Investigación</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    RLVR
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    IA Explicable
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Razonamiento Simbólico
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Publicaciones
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-white">Aplicaciones</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Minería
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Finanzas
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Agricultura
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Automatización
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-white">Contacto</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>research@qainex.com</li>
                <li>partnerships@qainex.com</li>
                <li>Ciudad de México, México</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">© 2024 QAINEX IA SOLUTION. Todos los derechos reservados.</p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <Link href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                Política de Privacidad
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                Términos de Uso
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
