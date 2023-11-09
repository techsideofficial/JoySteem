import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/site-new/joysteem/projects/',
    component: ComponentCreator('/site-new/joysteem/projects/', 'ff3'),
    exact: true
  },
  {
    path: '/site-new/joysteem/docs',
    component: ComponentCreator('/site-new/joysteem/docs', 'ea0'),
    routes: [
      {
        path: '/site-new/joysteem/docs',
        component: ComponentCreator('/site-new/joysteem/docs', 'f12'),
        routes: [
          {
            path: '/site-new/joysteem/docs',
            component: ComponentCreator('/site-new/joysteem/docs', 'a19'),
            routes: [
              {
                path: '/site-new/joysteem/docs/Projects/test',
                component: ComponentCreator('/site-new/joysteem/docs/Projects/test', '3ab'),
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
