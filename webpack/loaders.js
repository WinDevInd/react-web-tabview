var Extract = require('extract-text-webpack-plugin');
var babelquery = {
	'presets': ['es2016', 'es2015', 'react'],
	cacheDirectory: true,
};

var loaders = [
	{
		test: /\.json$/,
		loader: 'json',
	},
	{
		test: /\.(js|jsx)$/,
    exclude: /node_modules/,
		loader: "babel-loader",
		query: babelquery
	},
  {
    test: /\.css$/,
    loader: Extract.extract('style', 'css?localIdentName=[sha512:hash:base64:6]&modules!postcss')
  }
];

module.exports = loaders;
