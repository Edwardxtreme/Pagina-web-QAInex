"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Brain,
  TrendingUp,
  Zap,
  Eye,
  BarChart3,
  Users,
  Mail,
  ChevronDown,
  Target,
  Cpu,
  Database,
  Globe,
  Factory,
  Banknote,
  Wheat,
  Building,
  ShoppingCart,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"
import { ContactModal } from "@/components/contact-modal"
import { motion } from "framer-motion"
import { useState } from "react"
import { ParticleNetworkBackground } from "@/components/particle-network-background"

export default function QainexWebsite() {
  const [isContactOpen, setIsContactOpen] = useState(false)

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  return (
    <div className="flex flex-col min-h-screen bg-black text-white overflow-x-hidden">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="sticky top-0 z-50 w-full border-b border-slate-800/50 bg-black/95 backdrop-blur-xl supports-[backdrop-filter]:bg-black/80"
      >
        <div className="container flex h-16 items-center justify-between px-6 md:px-8">
          <Link href="/" className="flex items-center space-x-3">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 rounded-xl shadow-lg shadow-blue-500/25"
            >
              <Brain className="h-6 w-6 text-white" />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-white">QAINEX</span>
              <span className="text-xs text-slate-400 -mt-1 tracking-wide">AI SOLUTIONS</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {["Servicios", "Sectores", "Tecnologías", "Nosotros"].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium text-slate-300 hover:text-white transition-all duration-300 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button
                size="sm"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg shadow-blue-500/25 border-0"
                onClick={() => setIsContactOpen(true)}
              >
                <Mail className="mr-2 h-4 w-4" />
                Contacto
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-32 md:py-40 overflow-hidden">
          {/* Fondo con red de partículas */}
          <ParticleNetworkBackground />

          {/* Gradiente overlay para mejor legibilidad */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/60 z-5"></div>

          <div className="container relative z-10 px-6 md:px-8">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="max-w-6xl mx-auto text-center space-y-12"
            >
              <div className="space-y-8">
                <motion.div variants={fadeInUp}>
                  <Badge
                    variant="outline"
                    className="border-blue-400/30 text-blue-400 bg-blue-400/10 backdrop-blur-sm px-6 py-2 text-sm font-medium"
                  >
                    🚀 Inteligencia Artificial de Próxima Generación
                  </Badge>
                </motion.div>

                <motion.h1
                  variants={fadeInUp}
                  className="text-4xl md:text-6xl lg:text-7xl font-bold text-white max-w-5xl mx-auto leading-tight tracking-tight"
                >
                  Transformamos el{" "}
                  <span className="text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text">
                    Futuro
                  </span>{" "}
                  con IA
                </motion.h1>

                <motion.p
                  variants={fadeInUp}
                  className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed font-light"
                >
                  Soluciones inteligentes para decisiones estratégicas, modelamiento predictivo y optimización de
                  inversiones en sectores críticos.
                </motion.p>
              </div>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-10 py-6 text-lg font-medium shadow-2xl shadow-blue-500/25 border-0"
                    onClick={() => setIsContactOpen(true)}
                  >
                    <Target className="mr-3 h-6 w-6" />
                    Solicita una Reunión
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-slate-600 text-slate-300 hover:bg-slate-800/50 hover:border-slate-500 px-10 py-6 text-lg font-medium bg-black/20 backdrop-blur-sm"
                  >
                    <Eye className="mr-3 h-6 w-6" />
                    Explorar Servicios
                  </Button>
                </motion.div>
              </motion.div>

              {/* Información relevante en lugar de estadísticas */}
              <motion.div variants={fadeInUp} className="max-w-5xl mx-auto pt-12">
                <div className="grid gap-8 md:grid-cols-3 text-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="space-y-4"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto shadow-lg shadow-blue-500/25">
                      <Brain className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">IA Avanzada</h3>
                      <p className="text-sm text-slate-400 leading-relaxed">
                        Algoritmos de última generación para resolver problemas complejos
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    className="space-y-4"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto shadow-lg shadow-purple-500/25">
                      <Target className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Enfoque Científico</h3>
                      <p className="text-sm text-slate-400 leading-relaxed">
                        Metodología rigurosa basada en matemáticas y análisis de datos
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.4 }}
                    className="space-y-4"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto shadow-lg shadow-green-500/25">
                      <Zap className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Soluciones Personalizadas</h3>
                      <p className="text-sm text-slate-400 leading-relaxed">
                        Cada proyecto diseñado específicamente para tus necesidades
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Scroll Indicator */}
              <motion.div variants={fadeInUp} className="pt-16 flex justify-center">
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  className="flex flex-col items-center space-y-2"
                >
                  <span className="text-xs text-slate-500 uppercase tracking-wider">Scroll</span>
                  <ChevronDown className="h-5 w-5 text-slate-400" />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="servicios" className="py-32 bg-gradient-to-b from-black to-slate-950">
          <div className="container px-6 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center space-y-6 mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                Servicios{" "}
                <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
                  Especializados
                </span>
              </h2>
              <p className="text-xl text-slate-300 leading-relaxed">
                Transformamos desafíos complejos en oportunidades mediante IA avanzada y análisis matemático de
                vanguardia
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto"
            >
              {/* Services cards with enhanced styling */}
              {[
                {
                  icon: TrendingUp,
                  title: "Inversión Cuantitativa y Modelos Financieros Predictivos",
                  description:
                    "Implementamos modelos matemáticos e IA para mejorar decisiones de inversión mediante análisis predictivo avanzado.",
                  features: [
                    "Modelos de predicción de precios",
                    "Análisis de riesgo cuantitativo",
                    "Optimización de portafolios",
                  ],
                  gradient: "from-blue-500 to-cyan-500",
                  shadowColor: "blue-500/25",
                },
                {
                  icon: Zap,
                  title: "Automatización de Procesos Empresariales con IA",
                  description:
                    "Rediseñamos tus procesos operativos para que trabajen de forma más eficiente y escalable mediante automatización inteligente.",
                  features: [
                    "Automatización de workflows",
                    "Procesamiento inteligente de documentos",
                    "Optimización de recursos",
                  ],
                  gradient: "from-purple-500 to-pink-500",
                  shadowColor: "purple-500/25",
                },
                {
                  icon: Eye,
                  title: "Visión Computacional y Machine Learning",
                  description:
                    "Clasificación, segmentación, data labeling y detección de anomalías para múltiples industrias con precisión superior.",
                  features: [
                    "Detección de objetos y anomalías",
                    "Análisis de imágenes satelitales",
                    "Control de calidad automatizado",
                  ],
                  gradient: "from-green-500 to-emerald-500",
                  shadowColor: "green-500/25",
                },
                {
                  icon: BarChart3,
                  title: "Análisis de Datos y Sistemas de Recomendación",
                  description:
                    "Extraemos valor a partir de grandes volúmenes de datos mediante algoritmos avanzados y sistemas inteligentes.",
                  features: ["Big Data Analytics", "Sistemas de recomendación", "Dashboards inteligentes"],
                  gradient: "from-orange-500 to-red-500",
                  shadowColor: "orange-500/25",
                },
                {
                  icon: Users,
                  title: "Consultoría en Integración de IA",
                  description:
                    "Acompañamos a empresas en su transición tecnológica con soluciones prácticas y estrategias de transformación digital.",
                  features: ["Estrategia de IA empresarial", "Transformación digital", "Capacitación técnica"],
                  gradient: "from-cyan-500 to-blue-500",
                  shadowColor: "cyan-500/25",
                },
              ].map((service, index) => (
                <motion.div key={service.title} variants={fadeInUp}>
                  <Card
                    className={`group hover:shadow-2xl transition-all duration-500 border-slate-800 bg-gradient-to-br from-slate-900/50 to-slate-950/50 backdrop-blur-sm hover:bg-slate-900/70 shadow-xl shadow-${service.shadowColor} hover:shadow-2xl hover:shadow-${service.shadowColor} hover:scale-[1.02] h-full`}
                  >
                    <CardHeader className="pb-6">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        className={`w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-${service.shadowColor}`}
                      >
                        <service.icon className="h-7 w-7 text-white" />
                      </motion.div>
                      <CardTitle className="text-xl text-white leading-tight">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-slate-300 leading-relaxed mb-6 text-base">
                        {service.description}
                      </CardDescription>
                      <div className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <motion.div
                            key={feature}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                            className="flex items-center text-sm text-slate-300"
                          >
                            <CheckCircle className="h-4 w-4 text-green-400 mr-3 flex-shrink-0" />
                            {feature}
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Sectors Section */}
        <section id="sectores" className="py-32 bg-slate-950">
          <div className="container px-6 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center space-y-6 mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                Sectores en los que{" "}
                <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
                  Trabajamos
                </span>
              </h2>
              <p className="text-xl text-slate-300 leading-relaxed">
                Aplicamos IA avanzada para resolver desafíos específicos en industrias críticas con impacto medible
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-5 max-w-7xl mx-auto"
            >
              {[
                {
                  name: "Finanzas e Inversiones",
                  desc: "Modelos cuantitativos y análisis predictivo",
                  icon: Banknote,
                  gradient: "from-blue-500 to-indigo-500",
                },
                {
                  name: "Minería y Energía",
                  desc: "Optimización de procesos y mantenimiento predictivo",
                  icon: Factory,
                  gradient: "from-orange-500 to-red-500",
                },
                {
                  name: "Agricultura Inteligente",
                  desc: "Agricultura de precisión y análisis de cultivos",
                  icon: Wheat,
                  gradient: "from-green-500 to-emerald-500",
                },
                {
                  name: "Banca y Servicios Financieros",
                  desc: "Análisis de riesgo y detección de fraudes",
                  icon: Building,
                  gradient: "from-purple-500 to-indigo-500",
                },
                {
                  name: "Retail y Comportamiento",
                  desc: "Análisis de clientes y sistemas de recomendación",
                  icon: ShoppingCart,
                  gradient: "from-pink-500 to-rose-500",
                },
              ].map((sector, index) => (
                <motion.div key={sector.name} variants={fadeInUp}>
                  <Card className="group hover:shadow-2xl transition-all duration-500 text-center border-slate-800 bg-gradient-to-br from-slate-900/30 to-slate-950/30 backdrop-blur-sm hover:bg-slate-900/50 hover:scale-105 h-full">
                    <CardContent className="p-8">
                      <motion.div
                        whileHover={{ scale: 1.15, rotateY: 180 }}
                        transition={{ duration: 0.6, type: "spring", stiffness: 300 }}
                        className={`w-20 h-20 bg-gradient-to-br ${sector.gradient} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl`}
                      >
                        <sector.icon className="h-10 w-10 text-white" />
                      </motion.div>
                      <h3 className="font-bold text-white mb-4 text-lg leading-tight">{sector.name}</h3>
                      <p className="text-sm text-slate-300 leading-relaxed">{sector.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Technologies Section */}
        <section id="tecnologias" className="py-32 bg-gradient-to-b from-slate-950 to-black">
          <div className="container px-6 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center space-y-6 mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                Tecnologías y{" "}
                <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
                  Herramientas
                </span>
              </h2>
              <p className="text-xl text-slate-300 leading-relaxed">
                Utilizamos las tecnologías más avanzadas para desarrollar soluciones de IA de vanguardia
              </p>
            </motion.div>

            <div className="space-y-16">
              {/* Core Technologies */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <h3 className="text-2xl font-bold text-white text-center">Tecnologías Core</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-5xl mx-auto">
                  {[
                    { name: "Python", icon: "Py", color: "blue-400" },
                    { name: "PyTorch", icon: "PT", color: "orange-400" },
                    { name: "TensorFlow", icon: "TF", color: "orange-500" },
                    { name: "Hugging Face", icon: "🤗", color: "yellow-400" },
                    { name: "SQL", icon: Database, color: "blue-400" },
                    { name: "Power BI", icon: BarChart3, color: "yellow-400" },
                  ].map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, y: 20, scale: 0.8 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.15, y: -8 }}
                      viewport={{ once: true }}
                      className="flex flex-col items-center space-y-4 group"
                    >
                      <div className="w-20 h-20 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-slate-700 group-hover:border-slate-600 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                        {typeof tech.icon === "string" ? (
                          <span className={`text-3xl font-bold text-${tech.color}`}>{tech.icon}</span>
                        ) : (
                          <tech.icon className={`h-10 w-10 text-${tech.color}`} />
                        )}
                      </div>
                      <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Advanced AI Technologies */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-900/30 to-slate-950/30 rounded-3xl p-12 backdrop-blur-sm border border-slate-800"
              >
                <h3 className="text-2xl font-bold text-white text-center mb-12">Tecnologías de IA Avanzada</h3>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                  {[
                    { name: "LLMs", desc: "Large Language Models", icon: Brain, color: "blue" },
                    { name: "GNNs", desc: "Graph Neural Networks", icon: Globe, color: "purple" },
                    { name: "RNNs", desc: "Recurrent Neural Networks", icon: Zap, color: "green" },
                    { name: "DNNs", desc: "Deep Neural Networks", icon: Cpu, color: "orange" },
                  ].map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      viewport={{ once: true }}
                      className="text-center space-y-4 p-6 rounded-2xl bg-gradient-to-br from-slate-800/20 to-slate-900/20 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300"
                    >
                      <div
                        className={`w-16 h-16 bg-${tech.color}-500/20 rounded-2xl flex items-center justify-center mx-auto shadow-lg`}
                      >
                        <tech.icon className={`h-8 w-8 text-${tech.color}-400`} />
                      </div>
                      <h4 className="font-bold text-white text-lg">{tech.name}</h4>
                      <p className="text-sm text-slate-400 leading-relaxed">{tech.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="nosotros" className="py-32 bg-black">
          <div className="container px-6 md:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid gap-16 lg:grid-cols-2 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="space-y-10"
                >
                  <div className="space-y-8">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                      Sobre{" "}
                      <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
                        QAINEX
                      </span>
                    </h2>
                    <p className="text-lg text-slate-300 leading-relaxed">
                      QAINEX nace como una consultora tecnológica orientada a resolver desafíos complejos mediante el
                      uso de inteligencia artificial avanzada y análisis matemático. Somos expertos en IA aplicada a
                      inversiones, industria y servicios con un enfoque científico riguroso.
                    </p>
                    <div className="bg-gradient-to-br from-slate-900/50 to-slate-950/50 rounded-2xl p-8 backdrop-blur-sm border border-slate-800">
                      <h3 className="font-bold text-white mb-4 text-xl">Nuestra Visión</h3>
                      <p className="text-slate-300 italic text-lg leading-relaxed">
                        "Innovar con inteligencia, impactar con datos, transformar con ciencia."
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    {[
                      { title: "Enfoque Innovador", desc: "Soluciones de IA de vanguardia" },
                      { title: "Equipo Especializado", desc: "Expertos en matemáticas e IA" },
                      { title: "Metodología Ágil", desc: "Desarrollo iterativo y eficiente" },
                      { title: "Compromiso Total", desc: "Dedicación completa a cada proyecto" },
                    ].map((item, index) => (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="space-y-3 p-4 rounded-xl bg-gradient-to-br from-slate-900/30 to-slate-950/30 border border-slate-800/50"
                      >
                        <div className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                          <span className="font-semibold text-white">{item.title}</span>
                        </div>
                        <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="bg-gradient-to-br from-slate-900/50 to-slate-950/50 rounded-3xl p-10 backdrop-blur-sm border border-slate-800 shadow-2xl">
                    <div className="text-center space-y-8">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="w-28 h-28 bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 rounded-3xl flex items-center justify-center mx-auto shadow-2xl shadow-blue-500/25"
                      >
                        <Brain className="h-14 w-14 text-white" />
                      </motion.div>
                      <div>
                        <h3 className="text-3xl font-bold text-white mb-3">QAINEX</h3>
                        <p className="text-slate-400 text-lg">AI SOLUTIONS</p>
                      </div>
                      <div className="space-y-6">
                        <div className="space-y-6">
                          {[
                            { value: "Consulta Gratuita", label: "Primera reunión sin costo", color: "blue" },
                            { value: "Soporte Completo", label: "Acompañamiento en todo el proceso", color: "purple" },
                            { value: "Resultados Medibles", label: "ROI comprobado y métricas claras", color: "green" },
                          ].map((item, index) => (
                            <motion.div
                              key={item.label}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.5, delay: index * 0.1 }}
                              whileHover={{ scale: 1.05 }}
                              viewport={{ once: true }}
                              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-6 shadow-lg backdrop-blur-sm border border-slate-700/50"
                            >
                              <div className={`text-lg font-bold text-${item.color}-400 mb-2`}>{item.value}</div>
                              <div className="text-sm text-slate-400">{item.label}</div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 bg-gradient-to-br from-blue-950/20 via-purple-950/20 to-cyan-950/20 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
          </div>

          <div className="container px-6 md:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-5xl mx-auto space-y-10"
            >
              <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                ¿Listo para{" "}
                <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
                  Transformar
                </span>{" "}
                tu Negocio?
              </h2>
              <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
                Conversemos sobre cómo la IA puede revolucionar tu empresa. Consulta inicial gratuita con nuestros
                expertos.
              </p>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-12 py-6 text-xl font-medium shadow-2xl shadow-blue-500/25 border-0"
                  onClick={() => setIsContactOpen(true)}
                >
                  <Target className="mr-3 h-6 w-6" />
                  Solicita tu Consulta Gratuita
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-slate-800/50 py-20">
        <div className="container px-6 md:px-8">
          <div className="grid gap-12 md:grid-cols-4">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 rounded-xl shadow-lg">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-white">QAINEX</span>
                  <span className="text-xs text-slate-400 -mt-1">AI SOLUTIONS</span>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Modelamos el futuro resolviendo problemas complejos con Inteligencia Artificial de próxima generación.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-white">Enlaces Rápidos</h3>
              <ul className="space-y-3 text-sm text-slate-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link href="#servicios" className="hover:text-white transition-colors">
                    Servicios
                  </Link>
                </li>
                <li>
                  <Link href="#nosotros" className="hover:text-white transition-colors">
                    Nosotros
                  </Link>
                </li>
                <li>
                  <button onClick={() => setIsContactOpen(true)} className="hover:text-white transition-colors">
                    Contacto
                  </button>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-white">Servicios</h3>
              <ul className="space-y-3 text-sm text-slate-400">
                <li>Inversión Cuantitativa</li>
                <li>Automatización de Procesos</li>
                <li>Visión Computacional</li>
                <li>Análisis de Datos</li>
                <li>Consultoría en IA</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-white">Contacto</h3>
              <ul className="space-y-3 text-sm text-slate-400">
                <li>contacto@qainex.com</li>
                <li>Viana 915, oficina 211</li>
                <li>Viña del Mar, Valparaíso, Chile</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">© 2024 QAINEX AI SOLUTIONS. Todos los derechos reservados.</p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <Link href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                Política de Privacidad
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                Términos de Servicio
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Contact Modal */}
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  )
}
