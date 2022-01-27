/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Baania',
  // tagline: 'The tagline of my site',
  url: 'https://onboarding.baania.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'baania', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  trailingSlash: false,
  themeConfig: {
    navbar: {
      title: 'Onboarding',
      logo: {
        alt: 'My Site Logo',
        src: 'img/baania-logo.png',
      },
      items: [
        // {
        //   to: 'references/',
        //   activeBasePath: 'references',
        //   label: 'References',
        //   position: 'left',
        // },
        {
          href: 'https://github.com/baania/onboarding.baania.com',
          label: 'GitHub',
          position: 'right',
        },
      ],

    },
    footer: {
      style: 'dark',
      links: [

        // {
        //   title: 'More',
        //   items: [
        //     {
        //       label: 'Blog',
        //       to: 'blog',
        //     },
        //     {
        //       label: 'GitHub',
        //       href: 'https://github.com/facebook/docusaurus',
        //     },
        //   ],
        // },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Baania. Built with Docusaurus.`,
    },
    algolia: {
      apiKey: '9d620a41955bc610c22becd302e12a22',
      indexName: 'docusaurus-2',
      appId: '3FIXSVDMNF',
    },
    prism: {
      theme: require('prism-react-renderer/themes/okaidia'),
      darkTheme: require('prism-react-renderer/themes/vsLight'),
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/baania/onboarding.baania.com/edit/master/',
          routeBasePath: '/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
      },
    ],
  ],
};
