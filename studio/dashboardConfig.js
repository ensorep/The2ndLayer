export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d4f146b58db3824828a8f2c',
                  title: 'Sanity Studio',
                  name: 'The2ndLayer-studio',
                  apiId: '6610a23b-e96d-4594-9af7-fb910e02dc4b'
                },
                {
                  buildHookId: '5d4f146b6ba222d9eb9cfb28',
                  title: 'Blog Website',
                  name: 'The2ndLayer',
                  apiId: 'b7528dfe-65c4-40c3-925d-0f3fde9e012a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Taorep/The2ndLayer',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://The2ndLayer.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
