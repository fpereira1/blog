---
layout: post
title: "Empty body content on TYPO3 page"
comments: true
---

Encountered an issue today where I made tweaks to the a TYPO3 page and the page became blank. The `<body>` tag was empty!

I fixed it by clearing cache, but I also found another page with the same problem later on.

Doing some research I found that the page is empty on the `cache_pages` table.

What is causing it? I am using TYPO3 4.5.6