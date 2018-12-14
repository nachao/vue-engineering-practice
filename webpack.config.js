const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
	mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    context: path.resolve(__dirname, './'),
	entry: './src/app.ts',
    externals: {
		'axios': 'axios',
		'vue': 'Vue',
		'vue-router': 'VueRouter'
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: '[name].js',
        // chunkFilename: '[name].js'
	},
	resolve: {
        extensions: ['.js', '.ts', '.vue', '.json']
	},
	module: {
		rules: [{
            test: /\.ts$/,
            use: ['tslint-loader', 'babel-loader']
        }, {
			test: /\.vue$/,
			use: 'vue-loader'
		}, {
            test: /\.scss$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        }, {
			test: /\.html$/,
			exclude: /node_modules/,
			use: 'html-loader'
		}]
	},
	optimization: {
		splitChunks: {
			chunks: 'all'
		}
	},
	plugins: [
		new VueLoaderPlugin(),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, './index.html'),
            favicon: path.resolve(__dirname, './favicon.png'),
            hash: true
		}),
		new HtmlWebpackIncludeAssetsPlugin({
			assets: [
				'node_modules/axios/dist/axios.js',
				'node_modules/vue/dist/vue.js',
                'node_modules/vue-router/dist/vue-router.js',
				// 'node_modules/@babel/polyfill/dist/polyfill.js'
			],
			append: false
		}),
		new MiniCssExtractPlugin({
			// filename: '[name].css'
		})
	]
}
