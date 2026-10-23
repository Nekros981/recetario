import { useState } from 'react'
import { DetalleReceta } from './components/DetalleReceta'
import { TarjetaReceta } from './components/TarjetaReceta'
import { recetas, type Receta } from './data/recetas'
import './App.css'

function App() {
  const [recetaSeleccionada, setRecetaSeleccionada] = useState<Receta | null>(null)

  if (recetaSeleccionada) {
    return (
      <main className="app">
        <DetalleReceta
          receta={recetaSeleccionada}
          onVolver={() => setRecetaSeleccionada(null)}
        />
      </main>
    )
  }

  return (
    <main className="app">
      <h1 className="app__titulo">recetario</h1>
      <div className="app__grid">
        {recetas.map((receta) => (
          <TarjetaReceta
            key={receta.id}
            nombre={receta.nombre}
            imagen={receta.imagen}
            onSeleccionar={() => setRecetaSeleccionada(receta)}
          />
        ))}
      </div>
    </main>
  )
}

export default App
