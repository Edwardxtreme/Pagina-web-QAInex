"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Users, Zap, Gift } from "lucide-react"

export function BetaSignup() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4">
          <Shield className="mr-2 h-5 w-5" />
          Unirse a Lista de Espera Beta
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center">
              <Shield className="h-8 w-8 text-white" />
            </div>
          </div>
          <DialogTitle className="text-center text-2xl font-light">Programa Beta: Blockchain Security</DialogTitle>
          <DialogDescription className="text-center text-slate-600">
            Sé uno de los primeros en probar nuestra tecnología revolucionaria de detección de fraudes multi-blockchain
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Benefits */}
          <div className="grid gap-4 md:grid-cols-3">
            <Card className="border-amber-200 bg-amber-50">
              <CardContent className="p-4 text-center">
                <Gift className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                <h3 className="font-semibold text-amber-900 mb-1">Acceso Gratuito</h3>
                <p className="text-sm text-amber-700">6 meses sin costo</p>
              </CardContent>
            </Card>

            <Card className="border-emerald-200 bg-emerald-50">
              <CardContent className="p-4 text-center">
                <Users className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                <h3 className="font-semibold text-emerald-900 mb-1">Soporte Directo</h3>
                <p className="text-sm text-emerald-700">Con nuestros ingenieros</p>
              </CardContent>
            </Card>

            <Card className="border-blue-200 bg-blue-50">
              <CardContent className="p-4 text-center">
                <Zap className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <h3 className="font-semibold text-blue-900 mb-1">Primeros en Acceder</h3>
                <p className="text-sm text-blue-700">Nuevas funcionalidades</p>
              </CardContent>
            </Card>
          </div>

          {/* Form */}
          <form className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="betaName">Nombre completo *</Label>
                <Input id="betaName" placeholder="Tu nombre" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="betaEmail">Email corporativo *</Label>
                <Input id="betaEmail" type="email" placeholder="tu@empresa.com" required />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="betaCompany">Empresa *</Label>
                <Input id="betaCompany" placeholder="Nombre de tu empresa" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="betaRole">Tu rol</Label>
                <select className="w-full px-3 py-2 border border-slate-200 rounded-md">
                  <option>CTO</option>
                  <option>CEO</option>
                  <option>CISO</option>
                  <option>Director de Tecnología</option>
                  <option>Gerente de Seguridad</option>
                  <option>Otro</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="betaVolume">Volumen mensual de transacciones</Label>
              <select className="w-full px-3 py-2 border border-slate-200 rounded-md">
                <option>Menos de $1M</option>
                <option>$1M - $10M</option>
                <option>$10M - $100M</option>
                <option>$100M - $1B</option>
                <option>Más de $1B</option>
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="betaBlockchains">¿Qué blockchains utilizas?</Label>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="ethereum" />
                  <Label htmlFor="ethereum" className="text-sm">
                    Ethereum
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="bitcoin" />
                  <Label htmlFor="bitcoin" className="text-sm">
                    Bitcoin
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="polygon" />
                  <Label htmlFor="polygon" className="text-sm">
                    Polygon
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="bsc" />
                  <Label htmlFor="bsc" className="text-sm">
                    BSC
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="solana" />
                  <Label htmlFor="solana" className="text-sm">
                    Solana
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="other" />
                  <Label htmlFor="other" className="text-sm">
                    Otras
                  </Label>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="betaUseCase">Describe tu caso de uso</Label>
              <Textarea
                id="betaUseCase"
                placeholder="¿Qué tipo de transacciones procesas? ¿Qué desafíos de seguridad enfrentas?"
                className="min-h-[100px]"
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox id="betaUpdates" defaultChecked />
                <Label htmlFor="betaUpdates" className="text-sm text-slate-600">
                  Quiero recibir actualizaciones sobre el desarrollo del producto
                </Label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="betaTerms" />
                <Label htmlFor="betaTerms" className="text-sm text-slate-600">
                  Acepto los términos del programa beta y el NDA
                </Label>
              </div>
            </div>

            <Button type="submit" size="lg" className="w-full bg-amber-500 hover:bg-amber-600 text-white">
              <Shield className="mr-2 h-4 w-4" />
              Unirse al Programa Beta
            </Button>

            <p className="text-xs text-slate-500 text-center">
              Te contactaremos en las próximas 48 horas para confirmar tu participación en el programa beta.
            </p>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  )
}
