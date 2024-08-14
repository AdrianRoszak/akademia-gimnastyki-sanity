import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'

import { projectId, dataset } from './src/environment'

export default defineConfig([
  {
    name: 'ag-dev',
    title: 'Akademia Gimnastyki - dev',
    projectId: projectId || '',
    dataset: 'development',
    basePath: '/dev',
    plugins: [structureTool(), visionTool()],
    schema: {
      types: schemaTypes
    }
  },
  {
    name: 'ag-prod',
    title: 'Akademia Gimnastyki - prod',
    projectId: projectId || '',
    dataset: 'production',
    basePath: '/prod',
    plugins: [structureTool(), visionTool()],
    schema: {
      types: schemaTypes
    }
  }
])
