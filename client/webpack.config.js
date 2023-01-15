const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
			filename: './index.html',
			favicon: './public/favicon.ico',
			manifest: './public/manifest.json',
		}),
	],
}
