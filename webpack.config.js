const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	mode: 'development',
	entry: path.resolve(__dirname, './src/app.ts'),
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'app.js'
	},
	resolve: {
		alias: {
			'vue': 'vue/dist/vue.js'
		},
        extensions: ['.js', '.ts', '.vue', '.json']
	},
	module: {
		rules: [{
			test: /\.js$/,
			use: 'babel-loader'
		}, {
            test: /\.ts$/,
            use: 'tslint-loader'
        }, {
			test: /\.vue$/,
			use: 'vue-loader'
		}, {
			test: /\.css$/,
			use: ['style-loader', 'css-loader']
		}, {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
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
			template: path.resolve(__dirname, './index.html')
		})
	]
}
