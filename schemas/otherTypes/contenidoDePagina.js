import {defineField, defineType} from 'sanity'

export default defineType({
    title: 'Contenido de página',
    name: 'contenidoDePagina',
    type: 'object',
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

