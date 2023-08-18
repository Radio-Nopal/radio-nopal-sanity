import {defineField, defineType} from 'sanity'
import {MdEmail as icon} from 'react-icons/md'

export default defineType({
    title: 'Contenido de página',
    name: 'contenidoDePagina',
    type: 'object',
    icon,
    fields: [
      defineField({
        name: 'titulo',
        title: 'Titulo',
        type: 'string',
      }),
      defineField({
        name: 'colorFondo',
        title: 'Color de fondo',
        type: 'color'
      }),
      defineField({
        name: 'colorTexto',
        title: 'Color de texto',
        type: 'color'
      }),
      defineField({
        name: 'columnas',
        title: 'Columnas',
        type: 'array',
        of: [{type: 'columnasDeContenido'}],
      }),
    ]
  })

