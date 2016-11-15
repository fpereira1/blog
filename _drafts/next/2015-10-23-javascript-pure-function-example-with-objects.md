---
layout: post
title: "Javascript pure function example with objects"
comments: true
---

I have the example below of an impure function. Note the variable `a` is outside of the function scope is being changed. To get around it, one could clone the object inside the function and return a copy, but is that the right way?

What are some options to make the function `transformObject` pure?

```
var a = {
    a : 1,
    b : 2
};

function transformObject(obj) {
    var ref = obj;
    _.each(ref, function(val, index){
        ref[index] = val*2;
    });
    return ref;
}

s=JSON.stringify
$('#code').text(s(transformObject(a)))
$('#code2').text(s(a))

```

[https://jsfiddle.net/br17kk2h/1/](https://jsfiddle.net/br17kk2h/1/)