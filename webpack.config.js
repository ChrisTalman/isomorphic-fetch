'use strict';

// External Modules
const Path = require('path');

// Constants
const IGNORE = /(?:node_modules)$/;

module.exports =
{
	mode: 'development',
	entry: './src/index.ts',
	target: 'node',
	resolve:
	{
		extensions:
		[
			'.js',
			'.ts'
		],
		alias:
		{
			src: __dirname + '/src',
			node_modules: __dirname + '/node_modules'
		}
	},
	output:
	{
		filename: 'index.js',
		path: Path.resolve(__dirname, './'),
		libraryTarget: 'umd',
		globalObject: 'this'
	},
	watch: true,
	module:
	{
		rules:
		[
			// .mjs rule exists to solve node-fetch dependency error issue (https://github.com/bitinn/node-fetch/issues/493#issuecomment-407985160).
			{
				type: 'javascript/auto',
				test: /\.mjs$/,
				use: []
			},
			{
				loader: 'ts-loader',
				test: /\.tsx?$/,
				exclude: IGNORE
			}
		]
	}
};