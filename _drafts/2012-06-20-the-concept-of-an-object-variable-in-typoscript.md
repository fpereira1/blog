---
layout: post
title: "The concept of an object variable in typoscript"
comments: true
---

In my typoscript `20.special.value` and `10.value.typolink.parameter` have the same value, which is a page id. I use this value to build a heading and a menu of its subpages within the same `COA` object. I would like to be able to re-use this value.

**How can I call a object property in typoscript?**

Here's what I have tried:

```
  10 = HTML
  10 {
    value.typolink {
      parameter = {$temp.LANDINGPAGEMENU.20.special.value}
    }
  }

```

**UPDATE**:

I am re-utilizing my COA object in different parts of the site, and changing only the `special.value`, so to display a menu I have:

```
temp.LANDINGPAGEMENU.10.value.typolink.parameter = 2427
temp.LANDINGPAGEMENU.20.special.value = 2427  
temp.COLUMN_NOTSURE < temp.LANDINGPAGEMENU 

```

I am after a cleaner way of handling the

```
temp.LANDINGPAGEMENU.10.value.typolink.parameter = 2427
temp.LANDINGPAGEMENU.20.special.value = 2427 

```

Full LANDINGPAGEMENU typoscript code is [http://pastebin.com/p9kPuZEe](http://pastebin.com/p9kPuZEe)