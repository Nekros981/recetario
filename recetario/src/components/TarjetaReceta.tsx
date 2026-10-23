type TarjetaRecetaProps = {
  nombre: string
  imagen: string
  onSeleccionar: () => void
}

export function TarjetaReceta({ nombre, imagen, onSeleccionar }: TarjetaRecetaProps) {
  return (
    <button type="button" className="tarjeta-receta" onClick={onSeleccionar}>
      <img src={imagen} alt={nombre} className="tarjeta-receta__imagen" />
      <span className="tarjeta-receta__nombre">{nombre}</span>
    </button>
  )
}
