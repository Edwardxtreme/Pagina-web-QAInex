"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, AlertTriangle, XCircle, ArrowRight } from "lucide-react"

export function DiagnosticTool() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [showResults, setShowResults] = useState(false)

  const questions = [
    {
      id: "data_volume",
      title: "¿Cuál es el volumen de datos que procesas mensualmente?",
      options: [
        { value: "low", label: "Menos de 1TB", score: 1 },
        { value: "medium", label: "1TB - 10TB", score: 2 },
        { value: "high", label: "10TB - 100TB", score: 3 },
        { value: "enterprise", label: "Más de 100TB", score: 4 },
      ],
    },
    {
      id: "ai_maturity",
      title: "¿Qué nivel de madurez tiene tu empresa en IA?",
      options: [
        { value: "none", label: "No usamos IA", score: 1 },
        { value: "basic", label: "Herramientas básicas", score: 2 },
        { value: "intermediate", label: "Algunos modelos propios", score: 3 },
        { value: "advanced", label: "IA integrada en procesos", score: 4 },
      ],
    },
    {
      id: "security_concerns",
      title: "¿Cuáles son tus principales preocupaciones de seguridad?",
      options: [
        { value: "fraud", label: "Detección de fraudes", score: 4 },
        { value: "compliance", label: "Cumplimiento regulatorio", score: 3 },
        { value: "data_privacy", label: "Privacidad de datos", score: 2 },
        { value: "general", label: "Seguridad general", score: 1 },
      ],
    },
    {
      id: "decision_timeline",
      title: "¿En qué plazo necesitas implementar una solución?",
      options: [
        { value: "immediate", label: "Inmediatamente", score: 4 },
        { value: "month", label: "En 1-3 meses", score: 3 },
        { value: "quarter", label: "En 3-6 meses", score: 2 },
        { value: "year", label: "En 6-12 meses", score: 1 },
      ],
    },
  ]

  const handleAnswer = (questionId: string, value: string, score: number) => {
    setAnswers({ ...answers, [questionId]: value })

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      setShowResults(true)
    }
  }

  const calculateScore = () => {
    const scores = questions.map((q) => {
      const answer = answers[q.id]
      const option = q.options.find((opt) => opt.value === answer)
      return option?.score || 0
    })
    return scores.reduce((sum, score) => sum + score, 0)
  }

  const getRecommendation = (score: number) => {
    if (score >= 14) {
      return {
        level: "Enterprise",
        color: "emerald",
        icon: CheckCircle,
        title: "Listo para IA Avanzada",
        description: "Tu empresa está preparada para implementar soluciones de IA complejas y obtener ROI inmediato.",
        recommendations: [
          "Blockchain Security (Beta Program)",
          "IA Predictiva Personalizada",
          "Business Intelligence Avanzado",
          "Consultoría Estratégica",
        ],
      }
    } else if (score >= 10) {
      return {
        level: "Professional",
        color: "blue",
        icon: AlertTriangle,
        title: "Preparado para Crecimiento",
        description: "Tienes una base sólida. Es el momento perfecto para escalar con IA.",
        recommendations: [
          "Análisis de Datos Avanzado",
          "Modelos de ML Personalizados",
          "Dashboards Inteligentes",
          "Capacitación del Equipo",
        ],
      }
    } else {
      return {
        level: "Starter",
        color: "amber",
        icon: XCircle,
        title: "Comenzando el Viaje",
        description: "Excelente momento para sentar las bases de tu estrategia de datos e IA.",
        recommendations: ["Auditoría de Datos", "Estrategia de IA", "Cursos de Capacitación", "Consultoría Inicial"],
      }
    }
  }

  if (showResults) {
    const score = calculateScore()
    const recommendation = getRecommendation(score)
    const IconComponent = recommendation.icon

    return (
      <Card className="max-w-4xl mx-auto">
        <CardHeader className="text-center">
          <div
            className={`w-16 h-16 bg-${recommendation.color}-100 rounded-2xl flex items-center justify-center mx-auto mb-4`}
          >
            <IconComponent className={`h-8 w-8 text-${recommendation.color}-600`} />
          </div>
          <CardTitle className="text-2xl">{recommendation.title}</CardTitle>
          <CardDescription className="text-lg">{recommendation.description}</CardDescription>
          <Badge
            variant="outline"
            className={`border-${recommendation.color}-200 text-${recommendation.color}-700 bg-${recommendation.color}-50 w-fit mx-auto`}
          >
            Nivel: {recommendation.level}
          </Badge>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="font-semibold text-lg mb-4">Recomendaciones Personalizadas:</h3>
            <div className="grid gap-3 md:grid-cols-2">
              {recommendation.recommendations.map((rec, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-slate-50 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-slate-700">{rec}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center space-y-4">
            <p className="text-slate-600">¿Quieres una consulta personalizada basada en estos resultados?</p>
            <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white">
              Agendar Consulta Gratuita
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  const progress = ((currentStep + 1) / questions.length) * 100

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <CardTitle className="text-xl">Diagnóstico Gratuito de IA</CardTitle>
            <Badge variant="outline">
              {currentStep + 1} de {questions.length}
            </Badge>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="text-lg font-medium mb-4">{questions[currentStep].title}</h3>
          <div className="space-y-3">
            {questions[currentStep].options.map((option) => (
              <Button
                key={option.value}
                variant="outline"
                className="w-full justify-start text-left h-auto p-4 hover:bg-slate-50"
                onClick={() => handleAnswer(questions[currentStep].id, option.value, option.score)}
              >
                {option.label}
              </Button>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
