import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Bits Solution',
  tagline: 'Documentation officielle de Bits Solution & ngx-bits-lib',
  favicon: 'img/bits_icons.png',


  // Set the production url of your site here
  url: 'https://bits-france.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/documentation/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'bits-france', // Usually your GitHub org/user name.
  projectName: 'documentation', // Usually your repo name.

  onBrokenLinks: 'throw',


  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/bits-solution-org/ngx-bits/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      logo: {
        alt: 'Bits Solution Logo',
        src: 'img/Logo-BITS-1.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'bitsSidebar',
          position: 'left',
          label: 'Bits Company',
        },
        {
          type: 'docSidebar',
          sidebarId: 'ngxSidebar',
          position: 'left',
          label: 'ngx-bits library',
        },
        {
          href: 'https://github.com/Tlija/ngx-bits',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Bits Company',
              to: '/docs/bits-societe',
            },
            {
              label: 'ngx-bits library',
              to: '/docs/ngx-bits',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Bits Solution Website',
              href: 'https://bits-solution.com',
            },
          ],
        },
        {
          title: 'Repositories',
          items: [
            {
              label: 'GitHub Repository',
              href: 'https://github.com/Tlija/ngx-bits',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Bits Solution, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
