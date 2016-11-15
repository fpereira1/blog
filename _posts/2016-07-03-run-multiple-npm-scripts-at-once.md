---
layout: post
title: "Run multiple npm scripts at once"
comments: true
---

I have a number of npm scripts that I would like to run in a sequence.

At the moment I am accomplishing this by:

```
npm run clean && npm run browserify && npm run test

```

I would like to just one npm command, is that possible?

```
npm run clean browserify test

```