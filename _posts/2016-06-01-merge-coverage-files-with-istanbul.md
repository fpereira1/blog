---
layout: post
title: "Merge coverage files with istanbul"
comments: true
---

I have a situation where all my tests run in parallel and it creates the coverage report.

I was able to create a separate coverage folder for each test with the `--dir` option in the command line, which is great.

Now that I have all of these folders with coverage details, is it possible to merge all of these files into one?