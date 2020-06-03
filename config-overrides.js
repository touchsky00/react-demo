const path = require('path')
const { override, addDecoratorsLegacy, addWebpackAlias, addWebpackPlugin, addLessLoader, fixBabelImports } = require('customize-cra')
const antdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin')
const { getThemeVariables } = require('antd/dist/theme')

module.exports = override(
    addDecoratorsLegacy(),

    addWebpackAlias({
        ["@"]: path.resolve(__dirname, "src"),
    }),

    fixBabelImports('antd', {
        libraryDirectory: 'es',
        style: true,
    }),

    addWebpackPlugin(new antdDayjsWebpackPlugin()),

    addLessLoader({
        lessOptions: {
            javascriptEnabled: true,
            modifyVars: getThemeVariables({ compact: true })
        }
    })
)