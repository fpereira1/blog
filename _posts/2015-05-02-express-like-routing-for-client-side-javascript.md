---
layout: post
title: "Express-like routing for client-side Javascript"
comments: true
---

I am writing some Javascript and I need to add a routing system, otherwise it would be tricky to manage as the list grows.

The Angular routing is good, but I don't want to add it as a dependency. What are the options?

```
if(window.location.pathname==='/') {
  var $btn = $('<a />').html('btn').click(function() {
    $questionList.html(findAnswers());
  });
  $tabs.prepend($btn);
}

if(window.location.pathname==='/posts') {
  // some code will run when only on post page
}

```