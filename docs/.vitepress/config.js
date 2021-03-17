module.exports = {
  lang: 'zh-CN',
  title: '文档库',
  description: '个人文档中心',
  head: [
    [
      'link',
      { rel: 'shortcut icon', type: 'image/png', href: `/images/logo.png` },
    ],
  ],
  base: '/doc/',

  themeConfig: {
    repo: 'ichh/doc',
    docsDir: 'docs',
    nav: [{ text: 'Web', link: '/web/index', activeMatch: '^/web/' }],

    sidebar: {
      '/web/': getWebSidebar(),
    },
  },
}

function getWebSidebar() {
  return [
    {
      text: 'HTML',
      link: '/web/index',
      children: [
        { text: '介绍', link: '/web/intro' },
        { text: '开始', link: '/web/start' },
      ],
    },
  ]
}
