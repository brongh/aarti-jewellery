const aboutMeSchema = {
  name: "aboutMe",
  title: "About Me",
  type: "document",
  fields: [
    {
      name: "name",
      title: "About me Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alt Text",
          type: "string",
        },
      ],
    },
  ],
}

export default aboutMeSchema
