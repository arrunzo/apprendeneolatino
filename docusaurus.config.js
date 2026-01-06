// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Apprènde Neolatino',
  tagline: 'A free website to learn Neolatin (Romance Neolatino), the language that connects modern Romance languages.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://arrunzo.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'arrunzo', // Usually your GitHub org/user name.
  projectName: 'apprendeneolatino', // Usually your repo name.

  headTags: [
    {
      tagName: "link",
      attributes: {
        rel: "preload",
        href: "static/fonts/AlegreyaSans-Regular.woff2",
        as: "font",
        type: "font/woff2",
        crossorigin: "anonymous",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "preload",
        href: "static/fonts/AlegreyaSans-Regular.woff2",
        as: "font",
        type: "font/woff2",
        crossorigin: "anonymous",
      },
    },
  ],
  
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en' ,'es'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
            //'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
            //'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  plugins: [
    /*[
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["en", "es"],
      },
    ],*/
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
       algolia: {
      // The application ID provided by Algolia
      appId: 'VQI23LBHKU',
​
      // Public API key: it is safe to commit it
      apiKey: '921f55c55187af1aee48a8bc27d327ab', // Use the Search API Key, not the Write API Key
​
      indexName: 'apprendeneolatino', // Choose a meaningful name for your index
​
      // Optional: see doc section below
      contextualSearch: true,
​
      // Optional: Specify domains where the navigation should occur through window.location instead on history.push
      externalUrlRegex: 'external\\.com|domain\\.com',
​
      // Optional: Algolia search parameters
      searchParameters: {},
​
      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'search',
​
      // Optional: whether the insights feature is enabled or not on Docsearch
      insights: false,
    },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      image: 'img/docusaurus-social-card.jpg',
    navbar: {
      style: 'primary',
      title: 'APPRÈNDE NEOLATINO',
      logo: {
        alt: 'Romance Neolatino Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Lessons',
        },
        {
          type: 'docSidebar',
          sidebarId: 'resourcesSidebar',
          position: 'left',
          label: 'Resources',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://neolatino.eu/ferramentos.html',
          label: 'Conjugator',
          position: 'left',
        },
        {
          href: 'https://neolatino.github.io/dictionario/',
          label: 'Online Dictionary (unofficial)',
          position: 'left',
        },
        {
          type: 'localeDropdown',
          position: 'right',
          queryString: '?persistLocale=true'
        },
      ],
      },
      footer: {
        style: 'dark',
        links: [
        {
          title: 'Sitemap',
          items: [
            {
              label: 'Home',
              to: '/',
            },
            {
              label: 'Lessons',
              to: '/lessons/pronunciation/alphabet',
            },
            {
              label: 'Resources',
              to: '/resources/list_resources',
            },
            {
              label: 'FAQ',
              to: '/lessons/faq',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Official Neolatin Website',
              href: 'https://neolatino.eu/',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/d6rX7DQ9mF',
            },
            {
              label: 'Telegram',
              href: 'http://t.me/joinchat/J3GsHhaquEk9snRgnJF8fQ',
            },
            {
              label: 'Reddit',
              href: 'http://www.reddit.com/r/neolatino/',
            },
            {
              label: 'Facebook: Neolatino',
              href: 'https://www.facebook.com/vianeolatina/',
            },
            {
              label: 'Facebook: ESCÒLA NEOLATINA',
              href: 'https://www.facebook.com/groups/186554228887107/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'About',
              to: '/about',
            },
            {
              label: 'Contact',
              to: '/contact',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Apprènde Neolatino. Built with Docusaurus.`,
    },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
