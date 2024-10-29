import { defineConfig, SchemaTypeDefinition } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'
import { structure } from './src/structure'

import { projectId, dataset } from './src/environment'
import { inlineSvgInput } from '@focus-reactive/sanity-plugin-inline-svg-input'
import { codeInput } from '@sanity/code-input'

export default defineConfig({
  name: 'ag',
  title: 'Akademia Gimnastyki',
  projectId: projectId || '',
  dataset: dataset || '',
  plugins: [
    structureTool({ structure }),
    codeInput(),
    visionTool(),
    inlineSvgInput()
  ],
  schema: {
    types: schemaTypes as SchemaTypeDefinition[]
  }
})
