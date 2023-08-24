import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'pagina',
  title: 'Página',
  type: 'document',
  fields: [
    defineField({
      name: 'titulo',
      title: 'Título',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'descripcionDePagina',
      title: 'Descripción',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: Rule => Rule.required(),
      options: {
        source: 'nombre',
        maxLength: 100,
      },
    }),
    defineField({
      name: 'colorFondo',
      title: 'Color de fondo',
      type: 'color'
    }),
    defineField({
      name: 'imagenesCabecera',
      title: 'Imágenes de cabecera',
      type: 'array',
      of: [{type: 'imagen'}],
    }),
    defineField({
      name: 'contenido',
      title: 'Contenido de Página',
      type: 'array',
      of: [{type: 'contenidoDePagina'}],
    }),
  ],
  preview: {
    select: {title: 'titulo', media: 'imagenesCabecera.0.imagen'},
  }
})
