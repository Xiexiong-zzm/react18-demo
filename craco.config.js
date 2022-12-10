const path = require('path')
const resove = (dir) => path.resolve(__dirname, dir)
const CracoLessPlugin = require('craco-less')

/**
 * 配置别名，不推荐使用eject方式把配置暴露出来，推荐使用craco管理
 */

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  webpack: {
    alias: {
      '@': resove('src')
    }
  }
}