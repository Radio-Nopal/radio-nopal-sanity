import {defineField, defineType} from 'sanity'
import {MdPerson as icon} from 'react-icons/md'
import { getImageDimensions } from '@sanity/asset-utils'

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
        options: { hotspot: true },
        /*
        validation: (rule) =>
        rule.custom((value) => {
          if (!value) {
            return true
          }
        


          // const filetype = getExtension(value.asset._ref)
    
          //if (filetype !== 'jpg' && filetype !== 'png') {
            // return 'Image must be a JPG or PNG'
          //}
          
          const {width, height} = getImageDimensions(value.asset._ref)
    
          if (width > 1600 || height > 1000) {
            return 'La imagen debe ser más pequeña de 1600x1000 pixeles'
          }
    
          return true
        }),
        */
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
    ]
  })


