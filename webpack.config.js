
module.exports = {
	entry: {
		demo: "./examples/demo/App.js",
		tests: "./spec/main.js",
		simple: "./examples/simple/main.js",
		simple_bundled: "./examples/simple_bundled/main.js",
		simpleWithAdd: "./examples/simpleWithAdd/main.js"
	},

	output: {
		path: __dirname,
		filename: "./bundles/[name].js"
	},

	watch:true,

	devtool: 'source-map',

	module: {
		loaders: [
			{ test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			}
		]
	}
};
