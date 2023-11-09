import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/site-new/main/blog',
    component: ComponentCreator('/site-new/main/blog', 'd18'),
    exact: true
  },
  {
    path: '/site-new/main/blog/archive',
    component: ComponentCreator('/site-new/main/blog/archive', 'a30'),
    exact: true
  },
  {
    path: '/site-new/main/blog/first-blog-post',
    component: ComponentCreator('/site-new/main/blog/first-blog-post', '16f'),
    exact: true
  },
  {
    path: '/site-new/main/blog/long-blog-post',
    component: ComponentCreator('/site-new/main/blog/long-blog-post', '813'),
    exact: true
  },
  {
    path: '/site-new/main/blog/mdx-blog-post',
    component: ComponentCreator('/site-new/main/blog/mdx-blog-post', '7f5'),
    exact: true
  },
  {
    path: '/site-new/main/blog/tags',
    component: ComponentCreator('/site-new/main/blog/tags', '1a5'),
    exact: true
  },
  {
    path: '/site-new/main/blog/tags/docusaurus',
    component: ComponentCreator('/site-new/main/blog/tags/docusaurus', '4c1'),
    exact: true
  },
  {
    path: '/site-new/main/blog/tags/facebook',
    component: ComponentCreator('/site-new/main/blog/tags/facebook', '7c7'),
    exact: true
  },
  {
    path: '/site-new/main/blog/tags/hello',
    component: ComponentCreator('/site-new/main/blog/tags/hello', '2a7'),
    exact: true
  },
  {
    path: '/site-new/main/blog/tags/hola',
    component: ComponentCreator('/site-new/main/blog/tags/hola', '2f7'),
    exact: true
  },
  {
    path: '/site-new/main/blog/welcome',
    component: ComponentCreator('/site-new/main/blog/welcome', 'cac'),
    exact: true
  },
  {
    path: '/site-new/main/projects/',
    component: ComponentCreator('/site-new/main/projects/', 'e83'),
    exact: true
  },
  {
    path: '/site-new/main/docs',
    component: ComponentCreator('/site-new/main/docs', '34f'),
    routes: [
      {
        path: '/site-new/main/docs',
        component: ComponentCreator('/site-new/main/docs', '572'),
        routes: [
          {
            path: '/site-new/main/docs',
            component: ComponentCreator('/site-new/main/docs', 'a93'),
            routes: [
              {
                path: '/site-new/main/docs/Projects/test',
                component: ComponentCreator('/site-new/main/docs/Projects/test', 'f90'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
