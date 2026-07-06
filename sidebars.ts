import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.
 */
const sidebars: SidebarsConfig = {
  bitsSidebar: [
    {
      type: 'category',
      label: 'Bits Solution',
      collapsed: false,
      items: [
        'bits-societe/index',
        'bits-societe/guide-developpement',
        {
          type: 'category',
          label: 'SOLID Principles',
          collapsed: false,
          items: [
            'bits-societe/solid/index',
            'bits-societe/solid/srp',
            'bits-societe/solid/ocp',
            'bits-societe/solid/lsp',
            'bits-societe/solid/isp',
            'bits-societe/solid/dip',
          ],
        },
        {
          type: 'category',
          label: 'Design Patterns',
          collapsed: false,
          items: [
            'bits-societe/design-patterns/index',
            'bits-societe/design-patterns/creational',
            'bits-societe/design-patterns/structural',
            'bits-societe/design-patterns/behavioral',
            'bits-societe/design-patterns/architectural',
          ],
        },
        'bits-societe/architecture',
      ],
    },
  ],
  ngxSidebar: [
    {
      type: 'category',
      label: 'ngx-bits-lib',
      collapsed: false,
      items: [
        'ngx-bits/index',
        {
          type: 'category',
          label: 'Buttons',
          collapsed: false,
          items: ['ngx-bits/plain-button', 'ngx-bits/link-button'],
        },
        {
          type: 'category',
          label: 'Cards',
          collapsed: false,
          items: ['ngx-bits/card'],
        },
        {
          type: 'category',
          label: 'Forms',
          collapsed: false,
          items: ['ngx-bits/form-builder', 'ngx-bits/toggle-button'],
        },
        {
          type: 'category',
          label: 'Data Display',
          collapsed: false,
          items: ['ngx-bits/table'],
        },
        {
          type: 'category',
          label: 'Navigation',
          collapsed: false,
          items: ['ngx-bits/navbar'],
        },
        {
          type: 'category',
          label: 'Layout',
          collapsed: false,
          items: ['ngx-bits/sideview'],
        },
        {
          type: 'category',
          label: 'Utilities',
          collapsed: false,
          items: ['ngx-bits/avatar', 'ngx-bits/documents-picker'],
        },
      ],
    },
  ],
};

export default sidebars;
