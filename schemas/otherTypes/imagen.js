import {defineField, defineType} from 'sanity'
import { getImageDimensions } from '@sanity/asset-utils'

export default defineType({
    title: 'Imagen',
    name: 'imagen',
    type: 'object',
    fields: [
      defineField({
        name: 'imagen',
        type: 'image',
        title: 'Imagen',
        validation: (rule) =>
        rule.custom((value) => {
          if (!value) {
            return true
          }
          /*
          const filetype = getExtension(value.asset._ref)
    
          if (filetype !== 'jpg' && filetype !== 'png') {
            return 'Image must be a JPG or PNG'
          }
          */
          const {width, height} = getImageDimensions(value.asset._ref)
    
          if (width > 1200 || height > 650) {
            return 'Image must be least than 1200x650 pixels'
          }
    
          return true
        }),
      }),
      defineField({
        name: 'alt',
        type: 'string',
        title: 'texto alternativo',
      })
    ]
  })


