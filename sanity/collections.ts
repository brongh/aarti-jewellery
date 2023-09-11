const collectionSchema = {
    name: 'collections',
    title: 'Collections',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Collection Name',
            type: 'string'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string'
        },
        {
            name: 'products',
            title: 'Products',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'rings' }, { type: 'necklaces' }, { type: 'bracelets' }, { type: 'earrings' }] }]
        },
        {
            name: 'archive',
            title: 'Archive',
            type: 'boolean',
            initialValue: false
        },
        {
            name: 'featured',
            title: 'Featured',
            type: 'boolean',
            initialValue: false
        },
        {
            name: 'order',
            title: 'Order',
            type: 'number',
            initialValue: 999,
            unique: true
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
              source: 'name',
              maxLength: 200, // will be ignored if slugify is set
              slugify: (input: string) => input
                                   .toLowerCase()
                                   .replace(/\s+/g, '-')
                                   .slice(0, 200)
            }
          }, 
        {
            name: 'image',
            title: 'Cover Image',
            type: 'image',
            options: {
                hotspot: true
            },
            fields: [
                {
                    name: 'alt',
                    title: 'Alt Text',
                    type: 'string',
                }
            ]
        }
    ]
}

export default collectionSchema