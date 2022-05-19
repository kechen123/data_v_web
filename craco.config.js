const CracoAntDesignPlugin = require('craco-antd')
const CracoLessPlugin = require('craco-less')
const { loaderByName } = require('@craco/craco')

// Don't open the browser during development
process.env.BROWSER = 'none'
const path = require('path')

module.exports = {
  plugins: [
    {
      //https://github.com/DocSpring/craco-antd
      plugin: CracoAntDesignPlugin,
      options: {
        customizeTheme: {
          '@primary-color': '#56cfb2',
          '@border-color-base': 'var(--lightest-navy)',
          '@collapse-header-arrow-left': '6px',
          '@collapse-header-padding-extra': '26px',
          '@collapse-header-bg': 'var(--navy)',
          '@collapse-content-bg': 'var(--navy)',
          '@tooltip-bg': 'rgba(10, 24, 46, 0.5)',
          '@form-item-margin-bottom': '8px',
          '@slider-rail-background-color': 'var(--scroll-bg-color)',
          '@slider-rail-background-color-hover': 'var(--scroll-bg-color)',
          '@slider-track-background-color': 'var(--green)',
          '@slider-track-background-color-hover': 'var(--green)',
          '@slider-handle-color': 'var(--green)',
          '@slider-handle-color-hover': 'var(--green)',
          '@slider-handle-color-tooltip-open': 'var(--green)',
          '@tooltip-color': 'var(--pink)',
        },
      },
    },
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            noIeCompat: true,
            javascriptEnabled: true,
          },
        },
        modifyLessRule(lessRule, context) {
          // You have to exclude these file suffixes first,
          // if you want to modify the less module's suffix
          lessRule.exclude = /\.m\.less$/
          return lessRule
        },
        modifyLessModuleRule(lessModuleRule, context) {
          // Configure the file suffix
          lessModuleRule.test = /\.m\.less$/

          // Configure the generated local ident name.
          const cssLoader = lessModuleRule.use.find(loaderByName('css-loader'))
          cssLoader.options.modules = {
            localIdentName: '[local]_[hash:base64:5]',
          }

          return lessModuleRule
        },
      },
    },
  ],
  webpack: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@_types': path.resolve(__dirname, './src/_types'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
      '@storeApp': path.resolve(__dirname, './src/store/app'),
      '@features': path.resolve(__dirname, './src/store/features'),
      '@config': path.resolve(__dirname, './src/config'),
      '@plugs': path.resolve(__dirname, './src/plugs'),
      '@setting': path.resolve(__dirname, './src/design/setting'),
      '@page': path.resolve(__dirname, './src/page'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
    },
    plugins: {
      add: [] /* An array of plugins */,
      remove: [] /* An array of plugin constructor's names (i.e. "StyleLintPlugin", "ESLintWebpackPlugin" ) */,
    },
    configure: {
      /* Any webpack configuration options: https://webpack.js.org/configuration */
    },
    configure: (webpackConfig, { env, paths }) => {
      return webpackConfig
    },
  },
}
