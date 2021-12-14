const { override, addWebpackAlias, fixBabelImports, addLessLoader } = require('customize-cra')
const { getThemeVariables, darkThemeSingle, compactThemeSingle } = require('antd/dist/theme')
const path = require('path')

//不暴露（eject）webpack配置的情况下使用less，alias别名
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    // libraryDirectory: 'es',
    // style: true, // change importing css to less
  }),
  addLessLoader({
    // strictMath: true,
    noIeCompat: true,
    javascriptEnabled: true,
    modifyVars: {
      '@border-color-base': 'var(--lightest-navy)',
      '@collapse-header-arrow-left': '6px',
      '@collapse-header-padding-extra': '26px',
      '@collapse-header-bg': 'var(--navy)',
      '@collapse-content-bg': 'var(--navy)', // for example, you use Ant Design to change theme color.
    },
    // modifyVars: getThemeVariables({
    //   // dark: true, // 开启暗黑模式
    //   compact: true, // 开启紧凑模式
    // }),
    // modifyVars:{

    // }
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
    '@_data': path.resolve(__dirname, './src/_data'),
    '@assets': path.resolve(__dirname, './src/assets'),
    '@components': path.resolve(__dirname, './src/components'),
    '@storeApp': path.resolve(__dirname, './src/store/app'),
    '@features': path.resolve(__dirname, './src/store/features'),
    '@config': path.resolve(__dirname, './src/config'),
    '@plugs': path.resolve(__dirname, './src/plugs'),
    '@page': path.resolve(__dirname, './src/page'),
  })
)
