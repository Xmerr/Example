var path = require('path'),
    webpack = require('webpack');

(function () {
    "use strict";
    
    var config = {
        // These plugins can be used on every file
        // This way you don't have to have var React = require('react') on every page
        plugins: [
            new webpack.ProvidePlugin({
                React: 'react',
                ReactDOM: 'react-dom'
            })
        ],
        
        entry: {
            base: './Content/base.jsx' // Entry point for the compiler
        },
        
        output: {
            path: path.join(__dirname, 'public'), // Where the bundle gets saved to (this translates to ~/public/)
            filename: '[name].bundle.js' // The name of the bundle once it's saved
        },
        
        // What modules can be included in this webpack and how to compile them
        module: {
            loaders: [
                {
                    test: /\.jsx?$/,
                    loaders: [
                        'babel-loader?presets[]=env,presets[]=react'
                    ],
                    exclude: /node_modules/
                }
            ]
        }
    };

    module.exports = config; // Every module in node (most of the time) must export something
}());