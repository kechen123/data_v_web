/* eslint-disable @typescript-eslint/no-var-requires */
const CracoAntDesignPlugin = require('craco-antd')

// Don't open the browser during development
process.env.BROWSER = 'none'
const path = require('path')
module.exports = {
  //class-name
  // style: {
  //   modules: {
  //     localIdentName: '[file]__[local]_[hash:base64:6]',
  //   },
  // },
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        customizeTheme: {
          '@primary-color': 'rgba(100, 255, 218, 0.6)',
          '@border-color-base': 'var(--input-border)',
          '@collapse-header-arrow-left': '6px',
          '@collapse-header-padding-extra': '26px',
          '@collapse-header-bg': 'var(--navy)',
          '@collapse-content-bg': 'var(--navy)',
          '@form-item-margin-bottom': '8px',
          '@slider-rail-background-color': 'var(--scroll-bg-color)',
          '@slider-rail-background-color-hover': 'var(--scroll-bg-color)',
          '@slider-track-background-color': 'var(--green)',
          '@slider-track-background-color-hover': 'var(--green)',
          '@slider-handle-color': 'var(--green)',
          '@slider-handle-color-hover': 'var(--green)',
          '@slider-handle-color-tooltip-open': 'var(--green)',
          '@tooltip-color': 'var(--pink)',
          '@tooltip-bg': '#112240',
          '@popover-background': 'var(--light-navy)',
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
    configure: {
      /* Any webpack configuration options: https://webpack.js.org/configuration */
    },
    // 打包文件名 https://github.com/gsoft-inc/craco/issues/382
    // configure: (webpackConfig, { env, paths }) => {
    //
    //   const miniCssExtractPlugin = webpackConfig.plugins.find((plugin) => plugin.constructor.name === 'MiniCssExtractPlugin')

    //   if (miniCssExtractPlugin) {
    //     miniCssExtractPlugin.options.filename = 'static/css/[name].css'
    //   }
    //   return {
    //     ...webpackConfig,
    //     entry: {
    //       main: [env === 'development' && require.resolve('react-dev-utils/webpackHotDevClient'), paths.appIndexJs].filter(Boolean),
    //       content: './src/chromeServices/DOMEvaluator.tsx',
    //     },
    //     output: {
    //       ...webpackConfig.output,
    //       filename: 'static/js/[name].js',
    //     },
    //     optimization: {
    //       ...webpackConfig.optimization,
    //       runtimeChunk: false,
    //     },
    //   }
    // },
  },
}
