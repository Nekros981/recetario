import type { Receta } from '../data/recetas'

type DetalleRecetaProps = {
  receta: Receta
  onVolver: () => void
}

export function DetalleReceta({ receta, onVolver }: DetalleRecetaProps) {
  return (
    <article className="detalle-receta">
      <button type="button" className="btn-volver" onClick={onVolver}>
        Volver
      </button>
      <h1 className="detalle-receta__titulo">{receta.nombre}</h1>

      <section className="detalle-receta__seccion">
        <h2>Alimentos</h2>
        <ul>
          {receta.alimentos.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="detalle-receta__seccion">
        <h2>Pasos</h2>
        <ol>
          {receta.pasos.map((paso) => (
            <li key={paso}>{paso}</li>
          ))}
        </ol>
      </section>

      <img
        src={receta.imagen}
        alt={receta.nombre}
        className="detalle-receta__foto"
      />
    </article>
  )
}
