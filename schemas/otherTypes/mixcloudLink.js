import {defineField, defineType} from 'sanity'
import {MdAudiotrack as icon} from 'react-icons/md'

export default defineType({
    title: 'Link de Mixcloud',
    name: 'mixcloudLink',
    type: 'object',
    fields: [
      defineField({
        name: 'link',
        type: 'string',
        title: 'Link',
      }),
      defineField({
        name: 'fecha',
        type: 'date',
        title: 'Fecha',
      }),
      defineField({
        name: 'descripcion',
        type: 'string',
        title: 'Descripción',
      }),
    ],
    preview: {
      select: {
        descripcion: 'descripcion',
        fecha: 'fecha',
      },
      prepare(selection) {
        return {
          title: `${selection.fecha} - ${selection.descripcion}`,
          icon
        }
      },
    },
  })


