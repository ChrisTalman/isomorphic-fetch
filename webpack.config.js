'use strict';

// External Modules
const path = require('path');
const ignore = /(?:node_modules|tools|build)$/;
const clone = require('clone');

// Browser
const BROWSER =
{
	mode: 'development',
	entry: './src/index.ts',
	target: 'web',
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
		filename: 'browser.js',
		path: path.resolve(__dirname, './'),
		libraryTarget: 'umd'
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
				exclude: ignore
			}
		]
	}
};

// Node
const NODE = clone(BROWSER);
NODE.target = 'node';
NODE.output.filename = 'index.js';

module.exports = [BROWSER, NODE];