// https://developer.chrome.com/docs/workbox/reference/workbox-build/#type-GenerateSWOptions
module.exports = {
	// https://developer.mozilla.org/en-US/docs/Web/API/Clients/claim
	clientsClaim: true,
	globIgnores: [
		'**/robots.txt',
		'**/humans.txt',
		'**/.gitkeep',
		'**/google*.html', // google verification
		'**/browserconfig.xml', // ms config
		'**/*.map', // source maps
		'**/apple-icon-*.png', // apple icons
		'**/apple-splash-*.png', // apple splash screens
		'**/mstile-icon-*.png', // ms tiles
		'**/manifest-icon-*.png', // android icons
		'**/service-worker.js', // service worker itself
	],
	globDirectory: './copy-game-here/',
	globPatterns: [
		'**/*', //.{js,html,wasm,json,arcd0,arci0,dmanifest0,projectc0,der0}
	],
	globFollow: true,
	globStrict: true,
	maximumFileSizeToCacheInBytes: 10490000,
	mode: 'production',
	// https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/skipWaiting
	skipWaiting: false,
	sourcemap: false,
	swDest: './copy-game-here/service-worker.js',
};
