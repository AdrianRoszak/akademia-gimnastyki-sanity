import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'
import { structure } from './src/structure'

import { projectId, dataset } from './src/environment'

export default defineConfig([
  {
    name: 'ag-prod',
    title: 'Akademia Gimnastyki - prod',
    projectId: projectId || '',
    dataset: 'production',
    basePath: '/prod',
    plugins: [structureTool({ structure }), visionTool()],
    schema: {
      types: schemaTypes
    }
  },
  {
    name: 'ag-dev',
    title: 'Akademia Gimnastyki - dev',
    projectId: projectId || '',
    dataset: 'development',
    basePath: '/dev',
    plugins: [structureTool({ structure }), visionTool()],
    schema: {
      types: schemaTypes
    }
  }
])
