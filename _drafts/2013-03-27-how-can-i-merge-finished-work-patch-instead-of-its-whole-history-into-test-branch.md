---
layout: post
title: "How can I merge finished work patch instead of its whole history into test branch?"
comments: true
---

A developer starts work on a feature lets call it _"Fix a hardcoded link"_, once it's done, it's passed to another developer for peer review. Peer reviewer is ok with code changes and **merge feature branch into test branch**. _"Fix a hardcoded link"_ is now on test server waiting for Technical test.

`test` is where feature branches are merged once it's been peer reviewed by another developer, `staging` is the branch where feature branches are merged once it's gone through Peer review, TT and UAT.

Next developer starts working on the next card and creates a branch like this:

```
git checkout test
git checkout -b story/bar

```

Developer finishes work and passes it to peer review. Peer reviewer is happy with the code an passes into TT and UAT, all are happy and onto P.O it goes. P.O is happy then he **merge feature branch into staging**

```
git checkout staging
git merge origin/story/bar

```

By doing that I have discovered that we are applying not only the patch attached to the fix for the particular card but also the whole history that comes with the branch. The result is the commit _"Fix a hardcoded link"_ is staging but it hasn't gone through the process.

*   Is there anything wrong with our approach and any suggestions to imrpove it?
*   Should we create our feature branches out of staging?