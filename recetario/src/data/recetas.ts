import enchiladasImg from '../assets/enchiladasV.jpg'
import sopesImg from '../assets/sopes.jpg'

export type Receta = {
  id: string
  nombre: string
  imagen: string
  alimentos: string[]
  pasos: string[]
}

export const recetas: Receta[] = [
  {
    id: 'enchiladas-suizas',
    nombre: 'Enchiladas suizas',
    imagen: enchiladasImg,
    alimentos: [
      '12 tortillas de maíz',
      '400 g de pechuga de pollo cocida y deshebrada',
      '1 kg de tomates verdes',
      '2 chiles serranos',
      '1/2 cebolla',
      '2 dientes de ajo',
      '1 taza de crema',
      '200 g de queso manchego rallado',
      'Cilantro fresco',
      'Sal y aceite',
    ],
    pasos: [
      'Cuece el pollo con sal y deshébralo. Reserva.',
      'Asa los tomates verdes, el chile, la cebolla y el ajo. Licúa con sal hasta obtener una salsa suave.',
      'Calienta un poco de aceite y fríe la salsa unos minutos hasta que espese ligeramente.',
      'Calienta las tortillas, rellénalas con pollo y enróllalas. Colócalas en un refractario.',
      'Baña las enchiladas con la salsa verde y cubre con crema y queso rallado.',
      'Hornea a 180 °C unos 15 minutos hasta que el queso se derrita y gratine. Sirve con cilantro.',
    ],
  },
  {
    id: 'sopes-de-res',
    nombre: 'Sopes de res',
    imagen: sopesImg,
    alimentos: [
      '500 g de masa para tortillas',
      '300 g de carne de res cocida y deshebrada',
      '2 tazas de frijoles refritos',
      'Lechuga picada',
      'Crema',
      'Queso fresco desmoronado',
      'Salsa al gusto',
      'Aceite para freír',
      'Sal',
    ],
    pasos: [
      'Forma bolitas con la masa, aplánalas y pellizca el borde para formar el sope.',
      'Cocina los sopes en comal hasta que se cocinen por dentro. Luego fríelos ligeramente hasta que estén dorados.',
      'Calienta los frijoles refritos y la carne deshebrada con un poco de sal.',
      'Unta frijoles en cada sope y coloca la carne encima.',
      'Decora con lechuga, crema, queso y salsa. Sirve caliente.',
    ],
  },
]
