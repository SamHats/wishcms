export default {
  title: 'Wish',
  name: 'wish',
  type: 'object',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Link',
      name: 'link',
      type: 'string',
      validation: Rule => Rule.required()
    },
  ]
}
