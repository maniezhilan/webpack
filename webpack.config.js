var path = require('path'),
    BowerWebpackPlugin = require("bower-webpack-plugin"),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    webpack = require('webpack'),
    autoprefixer = require('autoprefixer'),
    nodeModules = path.join(__dirname, 'node_modules'),
    bowerComponents = path.join(__dirname, 'bower_components');

module.exports = {
	entry: './app/app.js',
	output: {
	    path: './app/dist',
	    filename: 'app.js'
	},
	module: {
	    loaders: [
					{
						test: /\.scss$/,
						loader: ExtractTextPlugin.extract('style-loader', 'css!sass?indentedSyntax=true&sourceMap=true' +
						  "includePaths[]=" +
							(path.resolve(__dirname, "./bower_components")) + "&" +
						  "includePaths[]=" +
							(path.resolve(__dirname, "./sass")) + "&" +
						  "includePaths[]=" +
							(path.resolve(__dirname, "./bower_components/foundation/scss/")) + "&" +
						  "includePaths[]=" +
							(path.resolve(__dirname, "./node_modules")))
					}
		]
	},

    resolve: {
        //root: path.resolve(__dirname+"/app"),
        modulesDirectories: ['node_modules', '/.bower_components'],
        extensions: ['', '.webpack.js', '.js', 'css','.scss'],
        alias: {}
    },

    plugins: [
        new BowerWebpackPlugin(),
        new ExtractTextPlugin("./app/dist/main.css"),
        new webpack.ProvidePlugin({ //Makes sure Jquery is global
            $: 'jquery',
            jQuery: "jquery",
            'window.jQuery': 'jquery'
        }),
        // split codebase into “chunks” 
        //new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.js", Infinity),
    ],

    modulesDirectories: [
      'app',
      'bower_components',
      'node_modules'
    ],

  sassLoader: {
    	sourceMap: true
  },



};

