const path = require('path');
const rootPath = path.join(__dirname,'../');
const srcPath = path.join(rootPath,'src');
const nodeExternals = require('webpack-node-externals');

function isExternal(module) {
    var context = module.context;
  
    if (typeof context !== 'string') {
      return false;
    }
  
    return context.indexOf('node_modules') !== -1;
  }

const {
    NODE_EVN = 'development',
} = process.env;

module.exports = {
    entry: path.resolve(srcPath,'index.ts'),
    mode: NODE_EVN,
    target: 'node',
    output: {
        path: path.resolve(rootPath,'build'),
        filename: 'index.js'
    },
    resolve:  {
        extensions: ['.ts','.js'],
    },
    // plugins: [ // split to vendor file
    //     new CommonsChunkPlugin({
    //       name: 'vendors',
    //       minChunks: function(module) {
    //         return isExternal(module);
    //       }
    //     }),
    //     // Other plugins
    // ],
    module: {
        rules: [
            { test: /\.ts$/,
            use: ['ts-loader']}
        ]
    },
    externals: [nodeExternals()]
}