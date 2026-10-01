import {defineField, defineType} from 'sanity'
import {MdPerson as icon} from 'react-icons/md'
import {getImageDimensions} from '@sanity/asset-utils'

export default defineType({
  title: 'Imagen con link',
  name: 'imagen',
  type: 'object',
  icon,
  fields: [
    defineField({
      name: 'imagen',
      type: 'image',
      title: 'Imagen',
      options: {hotspot: true},
    }),
    defineField({
      name: 'alt',
      type: 'string',
      title: 'texto alternativo',
    }),
    defineField({
      name: 'enlace',
      type: 'string',
      title: 'Enlace',
    }),
    defineField({
      title: 'Abrir en nueva pestaña',
      name: 'linkTarget',
      type: 'boolean',
      initialValue: true,
    }),

    defineField({
      name: 'title',
      type: 'string',
      title: 'Título', // titulo = title in spanish
    }),

    defineField({
      name: 'fontColor',
      title: 'Color de fuente',
      type: 'color',
    }),
  ],
})
