---
layout: post
title: "Why is an emoji string length 2?"
comments: true
---

I am trying to understand how emojis work and how does any textarea in my browser handle a seemingly 2 chars represented as one?

For example:

```
"👍".length
// -> 2

```

More examples here: [https://jsbin.com/zazexenigi/edit?js,console](https://jsbin.com/zazexenigi/edit?js,console)

The explanation to this is interesting. Javascript uses [UTF-16][1] ([source][2]) to manage strings.

In UTF-16 there are 1,112,064 possible characters. Each character uses [code points][3] to be represented. In UTF-16 one code-point use two bytes (16 bits) to be saved. This means that with one code point you can have *only* 65536 different characters.

This means some characters has to be represented with two code points.

`String.length()` returns the number of code units in the string, not the number of characters.

MDN explains quite well [String.length()][2]

> This property returns the number of code units in the string. UTF-16, the string format used by JavaScript, uses a single 16-bit code unit to represent the most common characters, but needs to use two code units for less commonly-used characters, so it's possible for the value returned by length to not match the actual number of characters in the string.


  [1]: https://en.wikipedia.org/wiki/UTF-16
  [2]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length
  [3]: https://en.wikipedia.org/wiki/Code_point
