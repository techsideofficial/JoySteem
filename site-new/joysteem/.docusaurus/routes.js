import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/site-new/joysteem/build/blog',
    component: ComponentCreator('/site-new/joysteem/build/blog', 'fde'),
    exact: true
  },
  {
    path: '/site-new/joysteem/build/blog/archive',
    component: ComponentCreator('/site-new/joysteem/build/blog/archive', 'ef6'),
    exact: true
  },
  {
    path: '/site-new/joysteem/build/blog/first-blog-post',
    component: ComponentCreator('/site-new/joysteem/build/blog/first-blog-post', '048'),
    exact: true
  },
  {
    path: '/site-new/joysteem/build/blog/long-blog-post',
    component: ComponentCreator('/site-new/joysteem/build/blog/long-blog-post', 'e00'),
    exact: true
  },
  {
    path: '/site-new/joysteem/build/blog/mdx-blog-post',
    component: ComponentCreator('/site-new/joysteem/build/blog/mdx-blog-post', '8a4'),
    exact: true
  },
  {
    path: '/site-new/joysteem/build/blog/tags',
    component: ComponentCreator('/site-new/joysteem/build/blog/tags', '78a'),
    exact: true
  },
  {
    path: '/site-new/joysteem/build/blog/tags/docusaurus',
    component: ComponentCreator('/site-new/joysteem/build/blog/tags/docusaurus', 'b79'),
    exact: true
  },
  {
    path: '/site-new/joysteem/build/blog/tags/facebook',
    component: ComponentCreator('/site-new/joysteem/build/blog/tags/facebook', 'f66'),
    exact: true
  },
  {
    path: '/site-new/joysteem/build/blog/tags/hello',
    component: ComponentCreator('/site-new/joysteem/build/blog/tags/hello', 'f57'),
    exact: true
  },
  {
    path: '/site-new/joysteem/build/blog/tags/hola',
    component: ComponentCreator('/site-new/joysteem/build/blog/tags/hola', '09e'),
    exact: true
  },
  {
    path: '/site-new/joysteem/build/blog/welcome',
    component: ComponentCreator('/site-new/joysteem/build/blog/welcome', '8c4'),
    exact: true
  },
  {
    path: '/site-new/joysteem/build/projects/',
    component: ComponentCreator('/site-new/joysteem/build/projects/', '770'),
    exact: true
  },
  {
    path: '/site-new/joysteem/build/docs',
    component: ComponentCreator('/site-new/joysteem/build/docs', '1df'),
    routes: [
      {
        path: '/site-new/joysteem/build/docs',
        component: ComponentCreator('/site-new/joysteem/build/docs', 'bb9'),
        routes: [
          {
            path: '/site-new/joysteem/build/docs',
            component: ComponentCreator('/site-new/joysteem/build/docs', '004'),
            routes: [
              {
                path: '/site-new/joysteem/build/docs/Projects/test',
                component: ComponentCreator('/site-new/joysteem/build/docs/Projects/test', '581'),
                exact: true
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
