export const productSchema = {
    type: 'document',
    fields: [
       {
            title: 'Title',
            name: 'title',
            type: 'string'
       },
       {
            title: 'Description',
            name: 'description',
            type: 'string'
       },
       {
        title: 'Slug',
        name: 'slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 200, // will be ignored if slugify is set
          slugify: (input: string) => input
                               .toLowerCase()
                               .replace(/\s+/g, '-')
                               .slice(0, 200),
            isUnique: (slug: string) => true
            
        }
      },
       {
            type: 'array',
            name: 'images',
            title: 'Images',
            of: [
                {
                    name: 'image',
                    type: 'image',
                    options: {
                        hotspot: true
                    },
                    fields: [
                        {
                            name: 'alt',
                            title: 'Attribution',
                            type: 'string',
                        },
                        {
                            name: 'caption',
                            title: 'Caption',
                            type: 'string'
                        },
                        {
                            name: 'featured',
                            title: 'Featured',
                            type: 'boolean',
                            initialValue: false
                        }
                    ]
                }
            ],
            // validation: Rule => {
            //     Rule.custom((items?: ProductImages[]) => {
            //         console.log(items)
            //         const featuredImages = items ? items.filter((item) => item.featured) : []
            //         if (featuredImages.length > 1) {
            //             return {
            //                 paths: featuredImages.filter(isKeyedObject).map((item) => [{_key: item._key}]),
            //                 message: 'Only one image can be featured'
            //             }
            //         }
            //         return true
            //     })
            // }
       },
       {
            title: 'Archive',
            name: 'archive',
            type: 'boolean',
            initialValue: false
       },
    ]
} as const

export type ProductImages = {
    _key?: string
    _type: string
    asset: {
        _type: string
        _ref: string
    }
    caption?: string
    attribution?: string
    featured: boolean
    crop?: {
        top: number
        bottom: number
        left: number
        right: number
    }
    hotspot?: {
        x: number
        y: number
        height: number
        width: number
    }
}