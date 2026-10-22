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
      title: 'Título',
    }),

    defineField({
      name: 'fontColor',
      title: 'Color de fuente',
      type: 'color',
    }),

    defineField({
      name: 'fontSize',
      title: 'Tamaño de fuente',
      type: 'string',
      options: {
        list: [
          {title: '0.75rem', value: '0.75rem'},
          {title: '1rem', value: '1rem'},
          {title: '1.25rem', value: '1.25rem'},
          {title: '1.5rem', value: '1.5rem'},
          {title: '2rem', value: '2rem'},
          {title: '3rem', value: '3rem'},
          {title: '4rem', value: '4rem'},
          {title: '5rem', value: '5rem'},
          {title: '6rem', value: '6rem'},
          {title: '7rem', value: '7rem'},
          {title: '8rem', value: '8rem'},
          {title: '9rem', value: '9rem'},
          {title: '10rem', value: '10rem'},
        ],
      },
    }),
    defineField({
      name: 'mixcloudUrl',
      title: 'URL de Mixcloud',
      type: 'string',
    }),
  ],
})
