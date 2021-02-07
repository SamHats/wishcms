export default {
  name: 'wishList',
  title: 'Wish List',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      title: 'Wish',
      name: 'wish',
      type: 'array',
        of: [{ type: 'wish' }]
    }
  ],
}
