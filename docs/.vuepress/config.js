const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

module.exports = {
  theme: 'vdoing', // 使用npm包主题
  title: "roman",
  description: 'vdoing博客主题模板',
  base: '/roman/', // 格式：'/<仓库名>/'， 默认'/'
  markdown: {
    lineNumbers: true, // 代码行号
  },

  head,
  plugins,
  themeConfig,
  // vssue 评论插件
  plugins: [
    [
      "vuepress-plugin-vssue-global",
      {
        platform: "github",
        title: "[Comment]<%- frontmatter.title %>",
        needComments: true,
        // 其他的 Vssue 配置
        autoCreateIssue: true,
        clientId: "Ov23liv32pY3pxzv7wv2",
        clientSecret: "6ffb4011f21ac92e01196c9e9a8a44d4d981a080",
        owner: "lql95",
        repo: "roman",
      },
    ],
  ],
}