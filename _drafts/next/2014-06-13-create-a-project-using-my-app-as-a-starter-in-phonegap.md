---
layout: post
title: "Create a project using my app as a starter in Phonegap"
comments: true
---

My app's git repository contain only the `www` folder and so it looks like this:

```
css
img
js
res
config.xml
icon.png
index.html

```

To start development I need to:

1.  Clone my app into `www-app`
2.  Create a phonegap app `phonegap create testapp com.example.testapp "Test"`
3.  remove `testapp/www` and copy `www-app` to `testapp/www`

Is there a easier to way to set this up? Maybe I can specify a project to build from on `phonegap create` instead of the [phonegap-start](https://github.com/phonegap/phonegap-start) project.