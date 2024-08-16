import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'
import { structure } from './src/structure'

import { projectId, dataset } from './src/environment'

export default defineConfig({
  name: 'ag',
  title: 'Akademia Gimnastyki',
  projectId: projectId || '',
  dataset: dataset || '',
  plugins: [structureTool({ structure }), visionTool()],
  schema: {
    types: schemaTypes
  }
})
