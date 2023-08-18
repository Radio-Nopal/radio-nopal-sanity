import {defineField, defineType} from 'sanity'

export default defineType({
    title: 'Columnas De Contenido',
    name: 'columnasDeContenido',
    type: 'object',
    fields: [
      defineField({
        title: 'columna',
        name: 'columna',
        type: 'blockContent',
      }),
    ]
  })


