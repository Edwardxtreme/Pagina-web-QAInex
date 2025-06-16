"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Brain, Mail, Lock, User, Building, LogIn, UserPlus } from "lucide-react"

export function LoginModal() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm" className="text-slate-600 hover:text-slate-900">
          <LogIn className="h-4 w-4 mr-2" />
          Iniciar Sesión
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center justify-center mb-4">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 rounded-2xl shadow-lg">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-lg flex items-center justify-center">
                <Brain className="h-5 w-5 text-slate-900" />
              </div>
            </div>
          </div>
          <DialogTitle className="text-center text-2xl font-light">Bienvenido a QAINEX</DialogTitle>
          <DialogDescription className="text-center text-slate-600">
            Accede a cursos gratuitos, recursos exclusivos y mantente actualizado con las últimas tendencias en IA
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Iniciar Sesión</TabsTrigger>
            <TabsTrigger value="register">Registrarse</TabsTrigger>
          </TabsList>

          <TabsContent value="login" className="space-y-4">
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                  <Input id="email" type="email" placeholder="tu@empresa.com" className="pl-10" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Contraseña</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                  <Input id="password" type="password" placeholder="••••••••" className="pl-10" />
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember" className="text-sm text-slate-600">
                  Recordarme
                </Label>
              </div>

              <Button className="w-full bg-slate-900 hover:bg-slate-800">Iniciar Sesión</Button>

              <div className="text-center">
                <Button variant="link" className="text-sm text-slate-600">
                  ¿Olvidaste tu contraseña?
                </Button>
              </div>
            </form>
          </TabsContent>

          <TabsContent value="register" className="space-y-4">
            <form className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Nombre</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                    <Input id="firstName" placeholder="Nombre" className="pl-10" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Apellido</Label>
                  <Input id="lastName" placeholder="Apellido" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="registerEmail">Email profesional</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                  <Input id="registerEmail" type="email" placeholder="tu@empresa.com" className="pl-10" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Empresa</Label>
                <div className="relative">
                  <Building className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                  <Input id="company" placeholder="Nombre de tu empresa" className="pl-10" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="registerPassword">Contraseña</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                  <Input id="registerPassword" type="password" placeholder="••••••••" className="pl-10" />
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox id="newsletter" defaultChecked />
                  <Label htmlFor="newsletter" className="text-sm text-slate-600">
                    Quiero recibir el newsletter con las últimas tendencias en IA
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="courses" defaultChecked />
                  <Label htmlFor="courses" className="text-sm text-slate-600">
                    Notificarme sobre nuevos cursos gratuitos
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <Label htmlFor="terms" className="text-sm text-slate-600">
                    Acepto los términos y condiciones
                  </Label>
                </div>
              </div>

              <Button className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600">
                <UserPlus className="mr-2 h-4 w-4" />
                Crear Cuenta
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
