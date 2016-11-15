---
layout: post
title: "Error on concatenate utf strings in javascript"
comments: true
---

I am trying to concatenate a strings and print its utf8 character. However that doesn't seem to be the correct syntax for some reason. The error is:

```
 console.log("\u" + i);
            ^^^
 SyntaxError: Unexpected token ILLEGAL

```

The code used to generate is

```
var _ = require('lodash');

_.times(2588, function(i){
    console.log("\u" + i);
});

```