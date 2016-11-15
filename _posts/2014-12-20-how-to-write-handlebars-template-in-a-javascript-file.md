---
layout: post
title: "How to write handlebars template in a javascript file"
comments: true
---

A javascript handlebar template is usually added to the HTML file, it would be easier if we could keep all the templates in the javascript file, any best practices of doing that?

```
<script id="entry-template" type="text/x-handlebars-template">
  <h1>{{title}}</h1>
</script>

```

**Edit:** I can write this template using plain Javascript string as well, what are the other options?

```
var template = '<h1>{{title}}</h1>';

```