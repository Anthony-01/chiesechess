const path = require('path');

module.exports = {
	entry: './src/main.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
			        options: {
			          presets: ['@babel/preset-env']
			        }
				}
			},
			{
		        test: /\.tsx?$/,
		        use: 'ts-loader',
		        exclude: /node_modules/
	        }
		]
	},
	resolve: {
    	extensions: [ '.tsx', '.ts', '.js' ]
  	},
	devtool: 'source-map',
	watch: true,
	watchOptions: {
		ignored: /node_modules/,
		aggregateTimeout: 300,
		poll: 1000
	}
}