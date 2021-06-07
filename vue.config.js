
const path = require('path')

module.exports = {
    pluginOptions: {
        'resolve-alias': {
            alias: {
                // just like a normal resolve in Webpack
                '@': path.resolve(__dirname, './src'),
                components: path.resolve(__dirname, './src/components')
            }
        }
    }
}