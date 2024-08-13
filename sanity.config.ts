import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'

import { projectId, dataset } from './src/environment'

export default defineConfig({
  name: 'akademia_gimnastyki',
  title: 'Akademia Gimnastyki',
  projectId: projectId || '',
  dataset: dataset || '',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes
  }
})
