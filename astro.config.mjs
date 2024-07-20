import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'Flysend Docs',
    customCss: [
      './src/tailwind.css',
    ],
    logo: {
      light: '/public/fsdocs-black.svg',
      dark: '/public/fsdocs-white.svg',
      replacesTitle: true
    },
    sidebar: [{
      label: 'Quick Start',
      items: [
      {
        label: 'Introduction',
        slug: 'start/intro'
      }, {
        label: 'References',
        slug: 'start/references'
      }]
    }, {
      label: 'Resources',
      items: [{
        label: 'Auth',
        slug: 'resources/auth'
      }, {
        label: 'User',
        slug: 'resources/user'
      }, {
        label: 'Spaces',
        slug: 'resources/spaces'
      }, {
        label: 'Chats',
        slug: 'resources/chats'
      }]
    }]
  }), tailwind({
    applyBaseStyles: false,
  })]
});