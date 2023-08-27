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