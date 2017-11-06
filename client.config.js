var webpack = require('webpack');
var path = require('path');
var Extract = require('extract-text-webpack-plugin');
var loaders = require('./webpack/loaders');
var postcss = require('./webpack/postcss');
var resolve = require('./webpack/resolve');
var resolveLoader = require('./webpack/resolveLoader');
var Extract = require('extract-text-webpack-plugin');
var BUILD_DIR = path.resolve('./dist');
var Uglify = webpack.optimize.UglifyJsPlugin;

var config = {
	stats: { children: false },
	 entry: './build.js',
	 output: {
			path: BUILD_DIR,
			filename: 'react-tabs.js'
	 },
	resolveLoader: resolveLoader,
	postcss: postcss,
 	resolve: resolve,
	 module: {
		 loaders: loaders
	 },
	 plugins:[
		 new Extract('bundle.css', {allChunks: true}),
		 new Uglify({
			 comments: false,
			 compress: {
				 warnings: false,
				 conditionals: true,
				 unused: true,
				 comparisons: true,
				 sequences: true,
				 dead_code: true,
				 evaluate: true,
				 if_return: true,
				 join_vars: true,
				 pure_getters: true,
				 unsafe: true,
				 unsafe_comps: true,
				 screw_ie8: true,
				 properties: true
			 }
		 }),
		]

};

module.exports = config;
