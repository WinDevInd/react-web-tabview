module.exports = [
	require('postcss-cssnext')({
		browsers: ['Chrome >= 42'],
		url: false
	}),
	require('postcss-simple-vars'),
	require('postcss-nested'),
	require('postcss-import')
];
