const { override, addWebpackAlias, fixBabelImports, addLessLoader } = require('customize-cra')

const path = require('path')

//不暴露（eject）webpack配置的情况下使用less，alias别名
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true, // change importing css to less
  }),
  addLessLoader({
    // strictMath: true,
    noIeCompat: true,
    javascriptEnabled: true,
    modifyVars: {
      '@border-color-base': '#6c737b',
      '@collapse-header-arrow-left': '6px',
      '@collapse-header-padding-extra': '26px',
      '@primary-color': '#6c737b', // for example, you use Ant Design to change theme color.
    },
    // modifyVars: aliyunTheme,
    cssLoaderOptions: {}, // .less file used css-loader option, not all CSS file.
    cssModules: {
      // localIdentName: '[hash:base64:5]',
      localIdentName: '[name]__[local]--[hash:base64:5]', // if you use CSS Modules, and custom `localIdentName`, default is '[local]--[hash:base64:5]'.
    },
  }),
  //https://github.com/arackaf/customize-cra/issues/207
  addWebpackAlias({
    '@': path.resolve(__dirname, './src'),
    '@assets': path.resolve(__dirname, './src/assets'),
    '@storeApp': path.resolve(__dirname, './src/store/app'),
    '@features': path.resolve(__dirname, './src/store/features'),
  })
)
