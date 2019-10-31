let path = require('path')
function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    publicPath: '/assets',
    chainWebpack: config => {
        config.plugins.delete('prefetch');
        config.plugins.delete('preload');
        config.resolve.alias.set('@', resolve('/src'));
        config.resolve.alias.set('~', resolve('/static'));
    },
    configureWebpack: {
        // externals: {
        //     'vue': 'Vue',
        //     'vuex':'Vuex',
        //     'vue-router':'Vue-router'
        // }
    },
}