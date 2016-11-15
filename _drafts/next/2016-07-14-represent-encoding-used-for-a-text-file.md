---
layout: post
title: "Represent encoding used for a text file"
comments: true
---

How is the encoding for a simple text file stored?

In an email there's a header

```
Content-Type: text/plain; charset="UTF-8"

```

In html we have a meta tag

```
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">

```

That leaves me the question of how a text editor knows what encoding is used, since we don't explicitly set this in a text file as we do with an html file.