import blockContent from './otherTypes/blockContent'
import contenidoDePagina from './otherTypes/contenidoDePagina'
import programa from './programa'
import mixcloudLink from './otherTypes/mixcloudLink'
import imagen from './otherTypes/imagen'
import columnasDeContenidoDePagina from './otherTypes/columnasDeContenidoDePagina'
import contacto from './otherTypes/contacto'
import imageGallery from './otherTypes/image-gallery'
import persona from './persona'
import pagina from './pagina'
import lugaresQueNosApoyan from './lugaresQueNosApoyan'
import product from './product'


export const schemaTypes = [
  // Document types
  pagina,
  programa,
  persona,
  lugaresQueNosApoyan,
  product,

  // Other types
  imagen,
  mixcloudLink,
  contacto,
  blockContent,
  contenidoDePagina,
  columnasDeContenidoDePagina,
  imageGallery,
]
