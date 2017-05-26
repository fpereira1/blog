importScripts('/node_modules/sw-toolbox/sw-toolbox.js');

toolbox.router.get('/', toolbox.networkFirst);
toolbox.router.get('/favicon.png', toolbox.cacheFirst);

toolbox.router.get('/fonts/*', toolbox.cacheFirst);
toolbox.router.get('/img/*', toolbox.cacheFirst);
toolbox.router.get('/css/*', toolbox.cacheFirst);
toolbox.router.get('/js/*', toolbox.cacheFirst);

