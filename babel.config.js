const presets = [
	['@babel/env']
]

const plugins = [
	['@babel/plugin-proposal-decorators', { legacy: true }],
	'syntax-dynamic-import'
]

module.exports = {
	presets,
	plugins
}
