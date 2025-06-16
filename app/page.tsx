import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Brain,
  Database,
  Mail,
  Phone,
  Linkedin,
  Twitter,
  Github,
  LogIn,
  Shield,
  Globe,
  CheckCircle,
  Calculator,
  Network,
  Eye,
  Headphones,
  Rocket,
  TrendingUp,
  Users,
  Zap,
  Building,
  Target,
  Cpu,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function QainexWebsite() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-xl">
        <div className="container flex h-20 items-center justify-between px-6 md:px-8">
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 rounded-2xl shadow-lg">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-lg flex items-center justify-center">
                  <Brain className="h-5 w-5 text-slate-900" />
                </div>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full opacity-80"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-light tracking-tight text-slate-900">QAINEX</span>
              <span className="text-xs text-slate-500 -mt-1">Intelligence Solutions</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-12">
            <Link
              href="#servicios"
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors duration-200"
            >
              Servicios
            </Link>
            <Link
              href="#blockchain"
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors duration-200"
            >
              Blockchain Security
            </Link>
            <Link
              href="#casos"
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors duration-200"
            >
              Casos de Éxito
            </Link>
            <Link
              href="#industrias"
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors duration-200"
            >
              Industrias
            </Link>
            <Link
              href="#contacto"
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors duration-200"
            >
              Contacto
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-slate-600 hover:text-slate-900">
              <LogIn className="h-4 w-4 mr-2" />
              Iniciar Sesión
            </Button>
            <Button size="sm" className="bg-slate-900 hover:bg-slate-800 text-white shadow-lg">
              Demo Gratuito
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
                <div className="flex justify-center space-x-4 mb-8">
                  <Badge variant="outline" className="border-amber-200 text-amber-700 bg-amber-50">
                    🚀 Próximamente: Blockchain Security Beta
                  </Badge>
                  <Badge variant="outline" className="border-emerald-200 text-emerald-700 bg-emerald-50">
                    🏆 150+ Empresas Globales Confían en Nosotros
                  </Badge>
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-slate-900 leading-none">
                  Protege tu negocio con
                  <br />
                  <span className="bg-gradient-to-r from-emerald-600 via-cyan-600 to-slate-700 bg-clip-text text-transparent">
                    IA avanzada
                  </span>
                </h1>

                <div className="space-y-4">
                  <p className="text-2xl md:text-3xl font-light text-slate-700 tracking-wide">
                    <span className="text-emerald-600 font-medium">Datos que hablan</span>,{" "}
                    <span className="text-cyan-600 font-medium">decisiones que crecen</span>
                  </p>
                  <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto font-light leading-relaxed">
                    Especialistas en automatización inteligente, análisis predictivo y modelos de data science para
                    empresas de todas las industrias. Transformamos datos complejos en ventajas competitivas.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button
                  size="lg"
                  className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 text-lg font-medium shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <Shield className="mr-2 h-5 w-5" />
                  Demo de Seguridad Blockchain
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-200 text-slate-700 hover:bg-slate-50 px-8 py-4 text-lg font-medium"
                >
                  <Calculator className="mr-2 h-5 w-5" />
                  Calcular ROI
                </Button>
              </div>

              {/* Enhanced Trust Indicators */}
              <div className="pt-16">
                <Image
                  src="/images/metrics-preview.png"
                  alt="Métricas de confianza QAINEX"
                  width={800}
                  height={400}
                  className="mx-auto rounded-2xl shadow-2xl"
                />
              </div>

              {/* Client Success Highlights */}
              <div className="pt-16 space-y-8">
                <p className="text-sm text-slate-500 mb-8">Casos de éxito destacados</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                  <div className="text-center space-y-2">
                    <div className="text-3xl font-light text-emerald-600">90%</div>
                    <div className="text-sm text-slate-600">Reducción de fraudes</div>
                    <div className="text-xs text-slate-500">FinTech Global</div>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="text-3xl font-light text-blue-600">$2.3M</div>
                    <div className="text-sm text-slate-600">Ahorros anuales</div>
                    <div className="text-xs text-slate-500">Banco Digital</div>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="text-3xl font-light text-purple-600">35%</div>
                    <div className="text-sm text-slate-600">Aumento en eficiencia</div>
                    <div className="text-xs text-slate-500">Manufactura Corp</div>
                  </div>
                </div>
              </div>

              {/* Industry Logos */}
              <div className="pt-16">
                <p className="text-sm text-slate-500 mb-8">Industrias que transformamos</p>
                <div className="flex justify-center items-center space-x-12 opacity-60">
                  <div className="w-24 h-12 bg-slate-200 rounded-lg flex items-center justify-center">
                    <span className="text-slate-600 font-semibold text-xs">FINTECH</span>
                  </div>
                  <div className="w-24 h-12 bg-slate-200 rounded-lg flex items-center justify-center">
                    <span className="text-slate-600 font-semibold text-xs">HEALTHCARE</span>
                  </div>
                  <div className="w-24 h-12 bg-slate-200 rounded-lg flex items-center justify-center">
                    <span className="text-slate-600 font-semibold text-xs">RETAIL</span>
                  </div>
                  <div className="w-24 h-12 bg-slate-200 rounded-lg flex items-center justify-center">
                    <span className="text-slate-600 font-semibold text-xs">MANUFACTURING</span>
                  </div>
                  <div className="w-24 h-12 bg-slate-200 rounded-lg flex items-center justify-center">
                    <span className="text-slate-600 font-semibold text-xs">ENERGY</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Background Elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-emerald-100/20 to-cyan-100/20 rounded-full blur-3xl -z-10"></div>
        </section>

        {/* Blockchain Demo Preview Section - NUEVO */}
        <section className="py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="container px-6 md:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center space-y-6 mb-20">
                <Badge variant="outline" className="border-amber-400/30 text-amber-400 bg-amber-400/10">
                  🔬 Vista Previa Exclusiva
                </Badge>
                <h2 className="text-4xl md:text-6xl font-light tracking-tight text-white">
                  Blockchain Security
                  <br />
                  <span className="text-emerald-400">Demo Preview</span>
                </h2>
                <p className="text-xl text-slate-300 font-light leading-relaxed max-w-3xl mx-auto">
                  Obtén una vista previa de nuestro revolucionario sistema de detección de fraudes multi-blockchain
                  antes de su lanzamiento oficial.
                </p>
              </div>

              <div className="grid gap-12 lg:grid-cols-2 items-center">
                <div className="space-y-8">
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-emerald-500/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <Network className="h-6 w-6 text-emerald-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-white mb-2">Análisis Multi-Chain en Tiempo Real</h3>
                        <p className="text-slate-300">
                          Monitoreo simultáneo de transacciones en Ethereum, Bitcoin, Polygon, BSC y 15+ blockchains
                          adicionales con latencia &lt; 100ms.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-cyan-500/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <Eye className="h-6 w-6 text-cyan-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-white mb-2">IA Predictiva Avanzada</h3>
                        <p className="text-slate-300">
                          Algoritmos propietarios que aprenden de patrones históricos y detectan amenazas emergentes
                          antes de que ocurran.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-purple-500/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <Brain className="h-6 w-6 text-purple-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-white mb-2">Dashboard Inteligente</h3>
                        <p className="text-slate-300">
                          Visualización en tiempo real de amenazas, alertas priorizadas y análisis de riesgo
                          automatizado.
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4">
                    <Shield className="mr-2 h-5 w-5" />
                    Solicitar Acceso Beta
                  </Button>
                </div>

                <div className="relative">
                  <div className="bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
                    <div className="space-y-6">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-white font-semibold">Detección en Vivo</h4>
                        <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-400/30">
                          99.7% Precisión
                        </Badge>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-white font-medium">Transacciones Analizadas</span>
                          <span className="text-emerald-400 font-mono">2,847,392</span>
                        </div>
                        <Progress value={85} className="h-2" />

                        <div className="flex items-center justify-between">
                          <span className="text-white font-medium">Amenazas Detectadas</span>
                          <span className="text-red-400 font-mono">1,247</span>
                        </div>
                        <Progress value={12} className="h-2" />

                        <div className="flex items-center justify-between">
                          <span className="text-white font-medium">Falsos Positivos</span>
                          <span className="text-cyan-400 font-mono">0.03%</span>
                        </div>
                        <Progress value={0.03} className="h-2" />
                      </div>

                      <div className="grid grid-cols-2 gap-4 mt-6">
                        <div className="bg-white/5 rounded-lg p-4 text-center">
                          <div className="text-2xl font-light text-emerald-400 mb-1">$50M+</div>
                          <div className="text-xs text-slate-400">Fraudes Prevenidos</div>
                        </div>
                        <div className="bg-white/5 rounded-lg p-4 text-center">
                          <div className="text-2xl font-light text-cyan-400 mb-1">&lt;100ms</div>
                          <div className="text-xs text-slate-400">Tiempo de Respuesta</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section - Enfocado en Automatización y Data Science */}
        <section id="servicios" className="py-32 bg-slate-50/50">
          <div className="container px-6 md:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-6 mb-20">
              <h2 className="text-4xl md:text-6xl font-light tracking-tight text-slate-900">
                Servicios que
                <br />
                <span className="text-slate-600">automatizan y optimizan</span>
              </h2>
              <p className="text-xl text-slate-600 font-light leading-relaxed">
                Transformamos procesos manuales en sistemas inteligentes y convertimos datos complejos en modelos
                predictivos que impulsan el crecimiento empresarial.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
              {/* Automatización Inteligente */}
              <Card className="group border-0 shadow-sm hover:shadow-xl transition-all duration-500 bg-white">
                <CardHeader className="text-center pb-6 pt-8">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Cpu className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-medium text-slate-900">Automatización Inteligente</CardTitle>
                </CardHeader>
                <CardContent className="text-center px-6 pb-8">
                  <CardDescription className="text-slate-600 leading-relaxed mb-4">
                    Automatizamos procesos repetitivos con IA, liberando a tu equipo para tareas estratégicas de mayor
                    valor.
                  </CardDescription>
                  <div className="text-sm text-emerald-600 font-medium">↑ 60% eficiencia promedio</div>
                </CardContent>
              </Card>

              {/* Modelos de Data Science */}
              <Card className="group border-0 shadow-sm hover:shadow-xl transition-all duration-500 bg-white">
                <CardHeader className="text-center pb-6 pt-8">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Brain className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-medium text-slate-900">Modelos de Data Science</CardTitle>
                </CardHeader>
                <CardContent className="text-center px-6 pb-8">
                  <CardDescription className="text-slate-600 leading-relaxed mb-4">
                    Desarrollamos modelos predictivos personalizados para forecasting, segmentación y optimización de
                    recursos.
                  </CardDescription>
                  <div className="text-sm text-emerald-600 font-medium">↑ 40% precisión en predicciones</div>
                </CardContent>
              </Card>

              {/* Análisis de Datos Eficiente */}
              <Card className="group border-0 shadow-sm hover:shadow-xl transition-all duration-500 bg-white">
                <CardHeader className="text-center pb-6 pt-8">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Database className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-medium text-slate-900">Análisis de Datos Eficiente</CardTitle>
                </CardHeader>
                <CardContent className="text-center px-6 pb-8">
                  <CardDescription className="text-slate-600 leading-relaxed mb-4">
                    Procesamiento y análisis de big data con pipelines optimizados que reducen tiempos de insight de
                    semanas a horas.
                  </CardDescription>
                  <div className="text-sm text-emerald-600 font-medium">↓ 80% tiempo de procesamiento</div>
                </CardContent>
              </Card>

              {/* Blockchain Security - Beta */}
              <Card className="group border-2 border-amber-200 shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-amber-50 to-orange-50 relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <Badge className="bg-amber-500 text-white">Beta</Badge>
                </div>
                <CardHeader className="text-center pb-6 pt-8">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-medium text-slate-900">Blockchain Security</CardTitle>
                </CardHeader>
                <CardContent className="text-center px-6 pb-8">
                  <CardDescription className="text-slate-700 leading-relaxed mb-4">
                    Detección avanzada de fraudes en múltiples blockchains con IA propietaria y monitoreo 24/7.
                  </CardDescription>
                  <div className="text-sm text-emerald-600 font-medium">↓ 90% fraudes detectados</div>
                  <Button variant="outline" className="w-full mt-4 border-amber-500 text-amber-700 hover:bg-amber-50">
                    Acceso Beta
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Industries Section - NUEVO */}
        <section id="industrias" className="py-32">
          <div className="container px-6 md:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-6 mb-20">
              <h2 className="text-4xl md:text-6xl font-light tracking-tight text-slate-900">
                Industrias que
                <br />
                <span className="text-slate-600">transformamos</span>
              </h2>
              <p className="text-xl text-slate-600 font-light leading-relaxed">
                Aplicamos modelos de data science especializados para cada industria, adaptando nuestras soluciones a
                los desafíos únicos de cada sector.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center">
                      <Building className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Servicios Financieros</CardTitle>
                      <Badge variant="outline" className="text-xs">
                        50+ clientes
                      </Badge>
                    </div>
                  </div>
                  <CardDescription className="text-slate-600">
                    Detección de fraudes, análisis de riesgo crediticio, trading algorítmico y cumplimiento regulatorio
                    automatizado.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Reducción de fraudes:</span>
                      <span className="font-semibold text-emerald-600">-85%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Tiempo de análisis:</span>
                      <span className="font-semibold text-blue-600">-70%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center">
                      <Target className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Retail & E-commerce</CardTitle>
                      <Badge variant="outline" className="text-xs">
                        35+ clientes
                      </Badge>
                    </div>
                  </div>
                  <CardDescription className="text-slate-600">
                    Sistemas de recomendación, optimización de inventario, análisis de comportamiento del cliente y
                    pricing dinámico.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Aumento en ventas:</span>
                      <span className="font-semibold text-emerald-600">+45%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Optimización inventario:</span>
                      <span className="font-semibold text-blue-600">+30%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center">
                      <Zap className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Manufactura</CardTitle>
                      <Badge variant="outline" className="text-xs">
                        25+ clientes
                      </Badge>
                    </div>
                  </div>
                  <CardDescription className="text-slate-600">
                    Mantenimiento predictivo, optimización de procesos, control de calidad automatizado y gestión de
                    cadena de suministro.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Reducción downtime:</span>
                      <span className="font-semibold text-emerald-600">-60%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Eficiencia operativa:</span>
                      <span className="font-semibold text-blue-600">+35%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-cyan-100 rounded-2xl flex items-center justify-center">
                      <Users className="h-6 w-6 text-cyan-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Healthcare</CardTitle>
                      <Badge variant="outline" className="text-xs">
                        20+ clientes
                      </Badge>
                    </div>
                  </div>
                  <CardDescription className="text-slate-600">
                    Diagnóstico asistido por IA, análisis de imágenes médicas, optimización de recursos hospitalarios y
                    investigación clínica.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Precisión diagnóstica:</span>
                      <span className="font-semibold text-emerald-600">+25%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Tiempo de análisis:</span>
                      <span className="font-semibold text-blue-600">-80%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center">
                      <Zap className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Energía & Utilities</CardTitle>
                      <Badge variant="outline" className="text-xs">
                        15+ clientes
                      </Badge>
                    </div>
                  </div>
                  <CardDescription className="text-slate-600">
                    Predicción de demanda energética, optimización de redes eléctricas, mantenimiento de infraestructura
                    y gestión de recursos renovables.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Eficiencia energética:</span>
                      <span className="font-semibold text-emerald-600">+40%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Reducción de costos:</span>
                      <span className="font-semibold text-blue-600">-25%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center">
                      <Globe className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Logística & Transporte</CardTitle>
                      <Badge variant="outline" className="text-xs">
                        18+ clientes
                      </Badge>
                    </div>
                  </div>
                  <CardDescription className="text-slate-600">
                    Optimización de rutas, predicción de demanda, gestión de flotas, análisis de tráfico y logística
                    inteligente.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Optimización rutas:</span>
                      <span className="font-semibold text-emerald-600">+30%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Reducción combustible:</span>
                      <span className="font-semibold text-blue-600">-20%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Enhanced Success Cases Section */}
        <section id="casos" className="py-32 bg-slate-50/50">
          <div className="container px-6 md:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center space-y-6 mb-20">
                <h2 className="text-4xl md:text-5xl font-light tracking-tight text-slate-900">
                  Casos de éxito que
                  <br />
                  <span className="text-slate-600">hablan por sí solos</span>
                </h2>
                <p className="text-xl text-slate-600 font-light">
                  Resultados reales de empresas que han transformado sus operaciones con nuestras soluciones de IA
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-3 mb-16">
                <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                  <CardHeader className="pb-6">
                    <div className="flex items-center space-x-2 mb-4">
                      <TrendingUp className="h-6 w-6 text-emerald-600" />
                      <Badge variant="outline" className="border-emerald-200 text-emerald-700 bg-emerald-50">
                        FinTech Global
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-medium text-slate-900">
                      $2.3M en ahorros anuales con detección de fraudes
                    </CardTitle>
                    <CardDescription className="text-slate-600 leading-relaxed">
                      Implementamos un sistema de ML que redujo fraudes en 90% y automatizó el 85% de las revisiones
                      manuales en solo 8 semanas.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-slate-500">Reducción de fraudes:</span>
                        <span className="font-semibold text-emerald-600">-90%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-slate-500">ROI obtenido:</span>
                        <span className="font-semibold text-emerald-600">+450%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-slate-500">Tiempo de implementación:</span>
                        <span className="font-semibold text-slate-900">8 semanas</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                  <CardHeader className="pb-6">
                    <div className="flex items-center space-x-2 mb-4">
                      <Users className="h-6 w-6 text-blue-600" />
                      <Badge variant="outline" className="border-blue-200 text-blue-700 bg-blue-50">
                        Retail Corp
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-medium text-slate-900">
                      45% aumento en conversiones con IA predictiva
                    </CardTitle>
                    <CardDescription className="text-slate-600 leading-relaxed">
                      Sistema de recomendaciones personalizado y optimización de inventario que transformó la
                      experiencia del cliente.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-slate-500">Aumento en conversiones:</span>
                        <span className="font-semibold text-blue-600">+45%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-slate-500">Optimización inventario:</span>
                        <span className="font-semibold text-blue-600">+30%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-slate-500">Satisfacción cliente:</span>
                        <span className="font-semibold text-slate-900">+25%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                  <CardHeader className="pb-6">
                    <div className="flex items-center space-x-2 mb-4">
                      <Zap className="h-6 w-6 text-purple-600" />
                      <Badge variant="outline" className="border-purple-200 text-purple-700 bg-purple-50">
                        Manufacturing Inc
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-medium text-slate-900">
                      60% reducción en downtime con mantenimiento predictivo
                    </CardTitle>
                    <CardDescription className="text-slate-600 leading-relaxed">
                      IA predictiva para mantenimiento que optimizó operaciones y redujo costos operativos
                      significativamente.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-slate-500">Reducción downtime:</span>
                        <span className="font-semibold text-purple-600">-60%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-slate-500">Ahorro en costos:</span>
                        <span className="font-semibold text-purple-600">$1.8M</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-slate-500">Eficiencia operativa:</span>
                        <span className="font-semibold text-slate-900">+35%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center">
                <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4">
                  Ver Más Casos de Éxito
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contacto" className="py-32">
          <div className="container px-6 md:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid gap-16 lg:grid-cols-2 items-center">
                <div className="space-y-8">
                  <div className="space-y-6">
                    <h2 className="text-4xl md:text-6xl font-light tracking-tight text-slate-900">
                      Hablemos de tu
                      <br />
                      <span className="text-slate-600">próximo proyecto</span>
                    </h2>
                    <p className="text-xl text-slate-600 font-light leading-relaxed">
                      Consulta gratuita con nuestros expertos en data science. Respuesta garantizada en menos de 2
                      horas.
                    </p>
                  </div>

                  {/* SLA Guarantees */}
                  <div className="bg-slate-50 rounded-2xl p-6 space-y-4">
                    <h3 className="font-semibold text-slate-900 mb-4">Nuestras Garantías</h3>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-emerald-500" />
                      <span className="text-slate-700">Respuesta en menos de 2 horas</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-emerald-500" />
                      <span className="text-slate-700">Análisis gratuito de viabilidad</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-emerald-500" />
                      <span className="text-slate-700">Demo personalizado en 24 horas</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-emerald-500" />
                      <span className="text-slate-700">Implementación en 2-8 semanas</span>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center">
                        <Mail className="h-6 w-6 text-slate-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-slate-900">Email</h3>
                        <p className="text-slate-600">contacto@qainex.com</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center">
                        <Phone className="h-6 w-6 text-slate-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-slate-900">Teléfono</h3>
                        <p className="text-slate-600">+52 (55) 1234-5678</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center">
                        <Headphones className="h-6 w-6 text-slate-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-slate-900">Soporte 24/7</h3>
                        <p className="text-slate-600">soporte@qainex.com</p>
                      </div>
                    </div>
                  </div>
                </div>

                <Card className="border-0 shadow-xl bg-white">
                  <CardContent className="p-8">
                    <form className="space-y-6">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium text-slate-700">
                            Nombre completo *
                          </label>
                          <Input id="name" placeholder="Tu nombre" className="border-slate-200" required />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium text-slate-700">
                            Email corporativo *
                          </label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="tu@empresa.com"
                            className="border-slate-200"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <label htmlFor="company" className="text-sm font-medium text-slate-700">
                            Empresa *
                          </label>
                          <Input
                            id="company"
                            placeholder="Nombre de tu empresa"
                            className="border-slate-200"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="industry" className="text-sm font-medium text-slate-700">
                            Industria
                          </label>
                          <select className="w-full px-3 py-2 border border-slate-200 rounded-md">
                            <option>Servicios Financieros</option>
                            <option>Retail & E-commerce</option>
                            <option>Manufactura</option>
                            <option>Healthcare</option>
                            <option>Energía & Utilities</option>
                            <option>Logística & Transporte</option>
                            <option>Otra</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="service" className="text-sm font-medium text-slate-700">
                          Servicio de interés
                        </label>
                        <select className="w-full px-3 py-2 border border-slate-200 rounded-md">
                          <option>Automatización Inteligente</option>
                          <option>Modelos de Data Science</option>
                          <option>Análisis de Datos Eficiente</option>
                          <option>Blockchain Security (Beta)</option>
                          <option>Consultoría General</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="revenue" className="text-sm font-medium text-slate-700">
                          Facturación anual aproximada
                        </label>
                        <select className="w-full px-3 py-2 border border-slate-200 rounded-md">
                          <option>Menos de $1M</option>
                          <option>$1M - $10M</option>
                          <option>$10M - $50M</option>
                          <option>$50M - $100M</option>
                          <option>$100M+</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-slate-700">
                          Cuéntanos sobre tu proyecto *
                        </label>
                        <Textarea
                          id="message"
                          placeholder="Describe tu desafío, qué procesos quieres automatizar, qué datos tienes disponibles..."
                          className="min-h-[120px] border-slate-200"
                          required
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full bg-slate-900 hover:bg-slate-800 text-white">
                        <Rocket className="mr-2 h-4 w-4" />
                        Solicitar Consulta Gratuita
                      </Button>

                      <p className="text-xs text-slate-500 text-center">
                        Al enviar este formulario, aceptas que nos contactemos contigo sobre nuestros servicios.
                        Respuesta garantizada en menos de 2 horas.
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Enhanced Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="container px-6 md:px-8">
          <div className="grid gap-12 md:grid-cols-5">
            <div className="md:col-span-2 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-slate-700 via-slate-600 to-slate-500 rounded-xl">
                    <div className="w-6 h-6 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-lg flex items-center justify-center">
                      <Brain className="h-4 w-4 text-slate-900" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-light">QAINEX</span>
                  <span className="text-xs text-slate-400 -mt-1">Intelligence Solutions</span>
                </div>
              </div>
              <p className="text-slate-400 leading-relaxed max-w-md">
                Transformamos datos en decisiones inteligentes. Especialistas en automatización, data science y
                blockchain security para empresas globales.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white">
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white">
                  <Github className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium text-lg text-white">Servicios</h3>
              <ul className="space-y-3 text-slate-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Automatización Inteligente
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Modelos de Data Science
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Análisis de Datos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Blockchain Security
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium text-lg text-white">Industrias</h3>
              <ul className="space-y-3 text-slate-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Servicios Financieros
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Retail & E-commerce
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Manufactura
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Healthcare
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium text-lg text-white">Empresa</h3>
              <ul className="space-y-3 text-slate-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Casos de Éxito
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Certificaciones
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Carreras
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Soporte 24/7
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-slate-400">© {new Date().getFullYear()} QAINEX. Todos los derechos reservados.</p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <Link href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                Política de Privacidad
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                Términos de Servicio
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                SLA
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
