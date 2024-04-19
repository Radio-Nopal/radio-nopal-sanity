import {defineField, defineType} from 'sanity'
import {MdPerson as icon} from 'react-icons/md'

export default defineType({
  name: 'persona',
  title: 'Persona',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'nombre',
      title: 'Nombre',
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
        slugify: input => input
        .toLowerCase()
        .replace(/\s+/g, '-')
        .slice(0, 200)
      },
    }),
    defineField({
      name: 'biografia',
      title: 'Biografía',
      type: 'blockContent',
    }),
    defineField({
      name: 'fotos',
      title: 'Fotos',
      type: 'array',
      of: [{type: 'imagen'}],
    }),
    defineField({
      name: 'mediosDeContacto',
      title: 'Medios de contacto',
      type: 'array',
      of: [{type: 'contacto'}],
    }),
  ],
  preview: {
    select: {title: 'nombre', media: 'fotos.0.imagen'},
  },
})
