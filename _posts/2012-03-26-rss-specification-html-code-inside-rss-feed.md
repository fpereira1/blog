---
layout: post
title: "RSS specification HTML code inside RSS feed"
categories: [rss, web]
comments: true
---

Is HTML code inside the `<description>` tag complaint in RSS 2.0?

The [RSS 2.0 specification](http://cyber.law.harvard.edu/rss/encodingDescriptions.html "Encoding & item-level descriptions") says that you can include HTML in the description element so long as you properly encode the markup. 

There are two ways to do this:

1. Convert tags to escaped HTML entities:

        <description>this is &lt;b&gt;bold&lt;/b&gt;</description>

1. Wrap the description content within a `CDATA` section:

        <description><![CDATA[this is <b>bold</b>]]></description>
