---
layout: post
title: "require jQuery in a user.js script"
comments: true
---

I am trying to load jQuery using `@require` so I can start writing the user script. The script is failing on the first `$`.

> Uncaught ReferenceError: $ is not defined

How do I load jQuery in a user script?

I have seen [other examples on github](https://github.com/Cyb3rsoft/facebook.user.js/blob/master/facebook.tamper.js) and they make it look easy. What am I missing?

```
// ==UserScript==
// @name           Test
// @description    Test description
// @license        MIT License
// @charset        UTF-8
// @version        0.1
// @match          http://example.com/* 
// @require        http://code.jquery.com/jquery-1.9.1.min.js
// ==/UserScript==

$(function() {

    console.log('ok, lets start'); 

});

```