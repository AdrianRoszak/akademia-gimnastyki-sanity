import * as contentTypes from './content-types'
import * as fields from './fields'
import * as pages from './pages'
import * as selectors from './selectors'

export const schemaTypes = [
  ...Object.values(pages),
  ...Object.values(contentTypes),
  ...Object.values(fields),
  ...Object.values(selectors)
]
