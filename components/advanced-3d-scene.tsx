"use client"

export function Advanced3DScene() {
  return (
    <div className="absolute inset-0 w-full h-full">
      {/* Fondo estático con efectos CSS */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/10 via-purple-950/10 to-cyan-950/10">
        {/* Partículas CSS */}
        <div className="absolute inset-0 opacity-30">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        {/* Formas geométricas CSS */}
        <div
          className="absolute top-1/4 left-1/4 w-32 h-32 border border-blue-400/20 rounded-full animate-spin"
          style={{ animationDuration: "20s" }}
        />
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 border border-purple-400/20 rotate-45 animate-pulse" />
        <div
          className="absolute top-1/2 right-1/3 w-16 h-16 border border-cyan-400/20 rounded-lg animate-bounce"
          style={{ animationDuration: "3s" }}
        />
      </div>
    </div>
  )
}
