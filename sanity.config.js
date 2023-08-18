import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {colorInput} from "@sanity/color-input";
//import {googleMapsInput} from '@sanity/google-maps-input'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'radionopal-sanity',

  projectId: '3bcawm4g',
  dataset: 'production',

  plugins: [
    deskTool(),
    visionTool(),
    colorInput(),
    //googleMapsInput(),
  ],

  schema: {
    types: schemaTypes,
  },
})
