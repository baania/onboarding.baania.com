/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Fringe Division',
  // tagline: 'The tagline of my site',
  url: 'https://onboarding.karnwong.me',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'kahnwong', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Docs',
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
          href: 'https://github.com/kahnwong/onboarding.karnwong.me',
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
      copyright: `Copyright © ${new Date().getFullYear()} Fringe Division. Built with Docusaurus.`,
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
            'https://github.com/kahnwong/onboarding.karnwong.me/edit/master/',
          routeBasePath: '/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          trailingSlash: false,
        },
      },
    ],
  ],
};
