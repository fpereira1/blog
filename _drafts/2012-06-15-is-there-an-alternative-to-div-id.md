---
layout: post
title: "is there an alternative to '#' + div_id?"
comments: true
---

Is there a better way to write the following function?

Having the `'#' + div_id` just looks wrong to me.

```
function hide_div(div_id) {
    $('#' + div_id).hide();
}

```