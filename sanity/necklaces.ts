import { productSchema } from "./constants.ts"

const necklaceSchema = {
    name: 'necklaces',
    title: 'Necklaces',
    ...productSchema
}

export default necklaceSchema