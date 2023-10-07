export const coverPhotosSchema = {
  title: "Cover Photos",
  name: "coverPhotos",
  type: "document",
  fields: [
    {
      title: "Product Name",
      name: "productName",
      type: "string",
    },
    {
      type: "array",
      name: "images",
      title: "Images",
      of: [
        {
          name: "image",
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "alt",
              title: "Attribution",
              type: "string",
            },
            {
              name: "featured",
              title: "Featured",
              type: "boolean",
              initialValue: false,
            },
          ],
        },
      ],
    },
  ],
}
