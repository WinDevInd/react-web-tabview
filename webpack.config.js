var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
   entry: { "react-tabs": './libs/TabsManager/tabs.js',
   "bundle": './test/index.js'
},
   output: {
      path: path.resolve(__dirname, 'build'),
      filename: '[name].js'
   },
   module: {
      rules: [
         {
            test: /\.js$/,
            include: path.resolve(__dirname, 'libs'),
            exclude: /(node_modules|bower_components|build)/,
            use: {
               loader: 'babel-loader',
               options: {
                  presets: ['env']
               }
            }
         },
         {
            test: /\.json$/,
            loader: 'json-loader'
         },
         {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
         }
      ]
   },
   plugins: [new ExtractTextPlugin({filename:'react-tabs.css', allChunks: true })],
   externals: {
      'react': 'commonjs react' // this line is just to use the React dependency of our parent-testing-project instead of using our own React.
   }
};