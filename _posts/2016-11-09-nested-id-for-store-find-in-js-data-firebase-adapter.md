---
layout: post
title: "nested id for `store.find` in js-data-firebase adapter"
comments: true
---

I am trying to write a nested query, that I think can look like this:

```
store.find('logs/by_date', '2016-11-02/user%40example,com')
     .then(result => console.log(result));

```

Where the `ID` is not just an `ID`, but a nested location in Firebase. Is this possible with `js-data`?

When I try to run the query above I get the error:

> [Error: [Mapper#createRecord:props] expected: array or object, found: string [http://www.js-data.io/v3.0/docs/errors#400]](http://www.js-data.io/v3.0/docs/errors#400]) }

Based on the documentation at [http://api.js-data.io/js-data-firebase/3.0.0-beta.2/Adapter.html#find__anchor](http://api.js-data.io/js-data-firebase/3.0.0-beta.2/Adapter.html#find__anchor) - the ID can be a string/number

I am using node.js and my setup for the store is as follows:

```
store.defineMapper('logs/by_date');

```

I can't really setup a mapper for each date, so how do I achieve this?

My data is structed in firebase as

```
{
  logs : {
    by_date : {
      '2016-11-02' : {
        'user%40example,com' : [
          { msg: "log error 1" },
          { msg: "log error 2" }
        ]
      }
    }
  }
}

```