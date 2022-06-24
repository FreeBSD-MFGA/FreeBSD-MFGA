/**
 * @file config.ts
 * @brief Configuration of the book.
 * @copyright Copyright (c) 2022 FreeBSD Chinese Community. All rights reserved.
 */

import {googleAnalyticsPlugin} from '@vuepress/plugin-google-analytics';
import {defaultTheme, defineUserConfig} from 'vuepress';
import {fullTextSearchPlugin} from 'vuepress2-plugin-full-text-search';

import {sideBarConfig} from './configs';

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'FreeBSD 从入门到跑路',
  description: 'FreeBSD 从入门到跑路',

  theme: defaultTheme({
    logo: 'https://book.bsdcn.org/favicon.ico',
    sidebar: sideBarConfig,
  }),

  plugins: [
    fullTextSearchPlugin,
    googleAnalyticsPlugin({
      id: 'G-31WQ8W3FF6',
    }),
  ],
});
