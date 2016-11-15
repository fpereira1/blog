---
layout: post
title: "How to send angular form data that has changed?"
comments: true
---

I have a couple of forms that interact with a backend service to persist the data.

I am wondering if there's a standard angular way to detect what properties of the model **has** changed and send them only in the POST? Currently all is sent event when not changed.