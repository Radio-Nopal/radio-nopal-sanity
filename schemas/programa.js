import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'programa',
  title: 'Programa',
  type: 'document',
  initialValue: {
    archivado: false
  },
  fieldsets: [
    {
      name: 'horario',
      title: 'Horario',
      options: { columns: 3 },
    },
  ],
  fields: [
    defineField({
      name: 'titulo',
      title: 'Titulo',
      type: 'string',
      validation: Rule => Rule.required(),
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
      name: 'descripcionDePrograma',
      title: 'Descripción',
      type: 'blockContent',
    }),
    defineField({
      name: 'dias',
      title: 'Días',
      type: 'string',
      fieldset: "horario"
    }),
    defineField({
      name: 'hora',
      title: 'Hora',
      type: 'string',
      fieldset: "horario"
    }),
    defineField({
      name: 'periodicidad',
      title: 'Periodicidad',
      type: 'string',
      fieldset: "horario"
    }),
    defineField({
      name: 'imagenes',
      title: 'Imágenes',
      type: 'array',
      of: [{type: 'imagen'}],
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'locutorxs',
      title: 'Locutorxs',
      type: 'array',
      of: [{
        type: 'reference',
        to: [{type: 'persona'}],
      }],

    }),
    defineField({
      name: 'archivoMixcloud',
      title: 'Archivo Mixcloud',
      type: 'array',
      of: [{type: 'mixcloudLink'}],
    }),
    defineField({
      name: 'mediosDeContacto',
      title: 'Medios de contacto',
      type: 'array',
      of: [{type: 'contacto'}],
    }),
    defineField({
      name: 'archivado',
      title: 'Archivado',
      type: 'boolean',
      description: 'Activar para los programas que ya no están siendo transmitidos.'
    }),
  ],
  preview: {
    select: {title: 'titulo', media: 'imagenes.0.imagen'},
  }
})
