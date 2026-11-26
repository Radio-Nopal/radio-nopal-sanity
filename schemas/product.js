import {defineField, defineType} from 'sanity'
import {MdWeb as icon} from 'react-icons/md'

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string'
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number'
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text'
    }),
    defineField({
      name: 'quantity',
      title: 'Quantity',
      type: 'number'
    }),
   defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{type: 'image'}],
    }),
]
});
