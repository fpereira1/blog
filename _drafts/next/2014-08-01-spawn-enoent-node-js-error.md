---
layout: post
title: "spawn ENOENT node.js error"
comments: true
---

I have started a node.js app with the express-generator, I have a strange issue where I can't view a page via the browser twice, first time it loads fine, second time it doesn't as the node process ends with the following error:

```
GET / 304 412ms

events.js:72
        throw er; // Unhandled 'error' event
              ^
Error: spawn ENOENT
    at errnoException (child_process.js:988:11)
    at Process.ChildProcess._handle.onexit (child_process.js:779:34)

```

package.json

```
{
  "name": "example01-express",
  "version": "0.0.1",
  "private": true,
  "scripts": {
    "start": "node-dev ./bin/www"
  },
  "dependencies": {
    "body-parser": "~1.0.0",
    "cookie-parser": "~1.0.1",
    "debug": "~0.7.4",
    "express": "~4.2.0",
    "jade": "~1.3.0",
    "morgan": "~1.0.0",
    "node-compass": "0.2.3",
    "static-favicon": "~1.0.0"
  },
  "devDependencies": {
    "grunt": "^0.4.5",
    "grunt-contrib-cssmin": "*",
    "grunt-contrib-jshint": "^0.10.0",
    "grunt-contrib-sass": "*",
    "grunt-contrib-uglify": "*",
    "grunt-contrib-watch": "*",
    "grunt-cssc": "*",
    "grunt-htmlhint": "*",
    "matchdep": "*"
  }
}

```