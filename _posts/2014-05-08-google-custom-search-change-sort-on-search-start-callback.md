---
layout: post
title: "Google custom search change sort on search start callback"
comments: true
---

I need to change the results ordering via `setSearchStartingCallback`.

This is to order the results by date if user is on "news" refinement (tab).

```
customSearchControl.setSearchStartingCallback(this, function(sc, searcher, query) {
     document.getElementById('SearchForm_Search').value = query;              
});

```

*   [https://developers.google.com/custom-search/docs/js/cselement-reference](https://developers.google.com/custom-search/docs/js/cselement-reference)