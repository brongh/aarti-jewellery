import { type SchemaTypeDefinition } from 'sanity'
import ringSchema from './rings'
import earringSchema from './earrings'
import braceletSchema from './bracelets'
import necklaceSchema from './necklaces'
import collectionSchema from './collections'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ringSchema, earringSchema, braceletSchema, necklaceSchema, collectionSchema],
}
