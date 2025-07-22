import {defineField, defineType} from 'sanity'
import {MdPerson as icon} from 'react-icons/md'

export default defineType({
  name: 'lugaresQueNosApoyan',
  title: 'Lugares que nos apoyan',
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
      name: 'descripcion',
      title: 'Descripción',
      type: 'blockContent',
    }),
    defineField({
        name: 'direccion',
        title: 'Dirección física',
        type: 'string',
      }),
      defineField({
        name: 'sitioWeb',
        title: 'Sitio Web',
        type: 'string',
      }),
      defineField({
        name: 'categorias',
        title: 'Categorías',
        type: 'array',
        of: [{type: 'string'}],
      }),
      defineField({
        name: 'beneficios',
        title: 'Beneficios',
        type: 'array',
        of: [{type: 'string'}],
      }),
    defineField({
      name: 'fotos',
      title: 'Fotos',
      type: 'array',
      of: [{type: 'imagen'}],
      options: {hotspot: true},
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
