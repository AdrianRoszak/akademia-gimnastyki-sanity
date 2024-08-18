import * as blocks from './blocks'
import * as contentTypes from './content-types'
import * as pages from './pages'
import * as selectors from './selectors'

export const schemaTypes = [
  ...Object.values(pages),
  ...Object.values(contentTypes),
  ...Object.values(selectors),
  ...Object.values(blocks)
]
