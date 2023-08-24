import {defineField, defineType} from 'sanity'

export default defineType({
    title: 'Contacto',
    name: 'contacto',
    type: 'object',
    fields: [
      defineField({
        title: 'Medio',
        name: 'medio',
        type: 'string',
        validation: Rule => Rule.required(),
        options: {
          list: [
            { title: 'Email', value: 'email' },
            { title: 'Sitio web', value: 'website' },
            { title: 'Instagram', value: 'instagram' },
            { title: 'Facebook', value: 'facebook' },
            { title: 'Twitter', value: 'twitter' },
            { title: 'TikTok', value: 'tiktok' },
            { title: 'Otro', value: 'otro' }
          ]
        }
      }),
      defineField({
        name: 'usuario',
        type: 'string',
        title: 'Usuario',
        validation: Rule => Rule.required()
      })
    ]
  })

