import {defineField, defineType} from 'sanity'
import {MdRadio as icon} from 'react-icons/md'
import hoursUtil from './hoursUtil';

export default defineType({
  name: 'programa',
  title: 'Programa',
  type: 'document',
  icon,
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
      name: 'fechasLegacy',
      title: 'Fechas (dato importado de wordpress)',
      type: 'string',
    }),
    defineField({
      name: 'dias',
      title: 'Días',
      type: 'string',
      fieldset: "horario",
      options: {
        list: [
          { title: "Lunes", value: "lunes" },
          { title: "Martes", value: "martes" },
          { title: "Miércoles", value: "miercoles" },
          { title: "Jueves", value: "jueves" },
          { title: "Viernes", value: "viernes" },
          { title: "Sábado", value: "sabado" },
          { title: "Domingo", value: "domingo" }
        ]
      },
    }),
    defineField({
      name: 'hora',
      title: 'Hora',
      type: 'string',
      fieldset: "horario",
      options: { list: hoursUtil }
    }),
    defineField({
      name: 'periodicidad',
      title: 'Periodicidad',
      type: 'string',
      fieldset: "horario",
      options: {
        list: [
          { title: "Diario", value: "diario" },
          { title: "Semanal", value: "semanal" },
          { title: "Quincenal", value: "quincenal" },
          { title: "Mensual", value: "mensual" }
        ]
      },
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
      title: 'playlist de Mixcloud',
      type: 'array',
      of: [{type: 'mixcloudLink'}],
    }),
    defineField({
      name: 'mixcloudIframeLinks',
      title: 'programas de mixcloud',
      type: 'array',
      of: [{type: 'string'}],
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
