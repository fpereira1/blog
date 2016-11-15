---
layout: post
title: "Best way to address "cannot read property * of undefined"?"
comments: true
---

This error comes up a lot in javascript development.

> cannot read property join of undefined

Is there a best way of dealing with this issue?

Some of the techniques I've used are:

**Initialisation**

```
question.tags = question.tags || [];
console.log(question.tags.join(', ');

```

**If statements**

```
if(question.tags) {
  console.log(question.tags.join(', ');
}

```