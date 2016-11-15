---
layout: post
title: "How to find information inside a xml tag using grep?"
comments: true
---

I am working on a linux shell script to find information in a xml file using `grep`. I am on a mac which I hope doesn't matter too much.

To find the information I need, I run:

```
grep -oP "<title>(.*)</title>" temp.xml

```

I get in return a list of matches and this includes the `<title>` tag.

How can I get a list with only the information inside the `title` tag but **without** the `title` tag using grep?