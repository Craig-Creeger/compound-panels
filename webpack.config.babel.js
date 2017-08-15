const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

export default function (env) {
	if (env === 'dev') {
		console.log('Creating a development package.') // eslint-disable-line
	}
	return {
		// Context is the path for resolving `entry`, loaders, and other files in this config file.
		context: path.join(__dirname, 'src'),
		entry: {
			main: './index.js',
			client: './client/client.js'
		},
		output: {
			path: path.join(__dirname, 'dist'),
			pathinfo: true, // adds comments to output - do not use for Prod
			filename: '[name].js'
		},
		devtool: 'source-map',
		resolve: {
			modules: [path.resolve('./node_modules'), path.resolve('./src')]
		},
		externals: {
			react: 'React',
			'react-dom': 'ReactDOM'
		},
		module: {
			rules: [
				{
					test: /\.jsx?$/,
					enforce: 'pre',
					use: [
						{
							loader: require.resolve('eslint-loader')
						}
					],
					include: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'mock-api')]
				},
				{
					/* file-loader
				The file-loader returns the (virtual) name of imported assets when using
				webpack-dev-server. In production the assets are copied to the build folder.

				The file-loader handles all assets unless explicity excluded. The exclude array
				must be updated with every change to loader extensions. */
					exclude: [
						/\.html$/,
						/\.(js|jsx)$/,
						/\.css$/,
						/\.scss$/,
						/\.bmp$/,
						/\.jpe?g$/,
						/\.png$/,
						/\.gif$/,
						/\.svg$/
					],
					loader: require.resolve('file-loader'),
					options: {
						name: '[name].[ext]'
					}
				},
				{
					/* url-loader
					This works like file-loader, but will base64 encode assets
					below a specified size. */
					test: [/\.bmp$/, /\.jpe?g$/, /\.png$/, /\.gif$/, /\.svg$/],
					loader: require.resolve('url-loader'),
					options: {
						limit: 10000,
						name: '[name].[ext]'
					}
				},
				{
					/* CSS loaders */
					test: /\.scss$/,
					use: [
						{
							loader: 'style-loader' // creates style nodes from JS strings
						},
						{
							loader: 'css-loader', // translates CSS into CommonJS
							options: {
								sourceMap: true
							}
						},
						{
							loader: 'postcss-loader', // Adds vendor prefixes when necessary via Autoprefixer
							options: {
								sourceMap: true
							}
						},
						{
							loader: 'sass-loader', // compiles Sass to CSS
							options: {
								sourceMap: true
							}
						}
					]
				},
				{
					test: /\.jsx?$/,
					include: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'mock-api')],
					loader: require.resolve('babel-loader'),
					options: {
						/* This is a feature of babel-loader that will allow for faster rebuilds by
							caching results in ./node_modules/.cache/babel-loader/. */
						cacheDirectory: true
					}
				}
			]
		},
		plugins: [
			new HtmlWebpackPlugin({ template: './preview/index.html' }),
			new CopyWebpackPlugin([
				{ from: './preview/', to: '.', ignore: './preview/index.html' },
				{ from: './favicon.ico', to: './[name].[ext]' }
			])
		],
		devServer: {
			contentBase: path.join(__dirname, 'dist'),
			compress: true,
			host: 'localhost', // Set this to your virtualDomain if getting “Invalid Host header” error.
			port: 8080
		}
	}
}
