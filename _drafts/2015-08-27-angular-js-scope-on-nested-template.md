---
layout: post
title: "Angular js scope on nested template"
comments: true
---

I have the following directive where I have been using as

```
<ui-submit-button btn-state='btnSendProcessing' />

```

The `btnSendProcessing` is a value in the controller's scope it gets turned on and off while the http request is being fired.

The `ng-disabled` works but it is not showing the processing icon.

```
.directive('uiSubmitButton', function() {

    return {
      restrict: 'E',
      template : function() {
        return ' \
          <button class="btn btn-success" type="submit" ng-disabled="btnState"> \
            <input type="checkbox" ng-model="btnState" /> {{btnState}} \
            <i class="fa fa-cog" ng-show="btnState" /> \
            <span ng-hide="btnState">{{btnLabel || "Submit"}}</span> \
          </button>';
      },
      replace : true,
      scope : {
        btnState : '=',
        btnLabel : '@'
      }
    };

  })

```

What could be the issue here?

Fiddle is working as expected [http://jsfiddle.net/to5y9kud/1/](http://jsfiddle.net/to5y9kud/1/)