import * as contentTypes from './content-types'
import * as fields from './fields'
import * as pages from './pages'

export const schemaTypes = [
  ...Object.values(pages),
  ...Object.values(contentTypes),
  ...Object.values(fields)
]
