import { type SchemaTypeDefinition } from "sanity"
import ringSchema from "./rings"
import earringSchema from "./earrings"
import braceletSchema from "./bracelets"
import necklaceSchema from "./necklaces"
import collectionSchema from "./collections"
import aboutMeSchema from "./aboutMe"
import { coverPhotosSchema } from "./coverPhotos"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    ringSchema,
    aboutMeSchema,
    earringSchema,
    braceletSchema,
    necklaceSchema,
    collectionSchema,
    coverPhotosSchema,
  ],
}
