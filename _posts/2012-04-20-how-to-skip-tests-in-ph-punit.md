---
layout: post
title: "How to skip tests in PHPunit?"
comments: true
---

I am using phpunit in connection with jenkins, and I want to skip certain tests by setting the configuration in the XML file `phpunit.xml`

I know that I can use on the command line:

`phpunit --filter testStuffThatBrokeAndIOnlyWantToRunThatOneSingleTest`

how do I translate that to the XML file since the `<filters>` tag is only for code-coverage?

I would like to run all tests apart from `testStuffThatAlwaysBreaks`