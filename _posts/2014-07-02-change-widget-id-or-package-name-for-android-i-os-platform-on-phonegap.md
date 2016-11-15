---
layout: post
title: "Change Widget ID or Package Name for android/iOS platform on phonegap?"
comments: true
---

I have an app in Google Play with package `com.example001.android`and one app in the iOS store with the name `com.example001.ios`.

However, I am now using the [phonegap build](http://build.phonegap.com), have removed a lot of the bootstrap code, leaving only the `www` folder, I am using the widget id from `config.xml`, so now I only have 1 `config.xml`.

If I set the `widget id` to `com.example001.ios` I can't publish this app in android. If I leave the `widget id` to `com.example001.android` I can't publish this app in apple store.

If I change the widget ID to a generic one, say `com.example001.mobile`, then I won't be able to upload the app to Google Play because the package name changes.

How do I set the package name/ID for each target platform?