---
layout: post
title: "Performance for common.js modules export"
comments: true
---

How do I export a number modules via an `index.js` file while making sure they don't impact performance? Probably best explained with a source code:

```
// index.js
module.exports = {

  Database : {
    db : db,
  },

  Helpers : {
    _ : lodash,
    util : util
  }

};

```

I am trying to avoid loading the `Database` dependency if all I need is `Helpers.util`.

using the snippet below, which is what I am using is also loading the Database dependency every ime:

```
const Core = require('@myapp/core');
const util = Core.Helpers.util;

```

my package.json is setup as:

```
{
  ...
  "main": "src/index.js",
  ...
}

```

I have some ideas of what should be able to happen, but not sure the best way to address this:

1.  ~~`package.json` - is there a way to specify multiple main locations?~~

2.  `index.js` javascript file - can I do anything else in the javascript file, like wrapping it in a function?

3.  write the require in a different way? like `const util = require('@app/core/src/Helpers/util');`