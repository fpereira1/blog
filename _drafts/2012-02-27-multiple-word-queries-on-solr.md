---
layout: post
title: "Multiple word queries on solr"
comments: true
---

*   I am using solr 3.3.0 working out of the box using the **example** folder
*   solrQueryParser defaultOperator = "OR"

My problem is that Solr doesn't seem to be returning good results when I search for a multiple word phrase.

The following search return no results.

1.  [http://localhost:8080/solr/select/?q=roof+fixing](http://localhost:8080/solr/select/?q=roof+fixing)

However, when I search for **roof** or **fixing**, they both return a few good results.

1.  [http://localhost:8080/solr/select/?q=roof](http://localhost:8080/solr/select/?q=roof) _returns 4 results_
2.  [http://localhost:8080/solr/select/?q=fixing](http://localhost:8080/solr/select/?q=fixing) _returns 3 results_

On the query for "roof fixing", I expect solr to return 7 results. The 4 records for **roof** and 3 records for **fixing**.

Is any special configuration necessary for that to happen?