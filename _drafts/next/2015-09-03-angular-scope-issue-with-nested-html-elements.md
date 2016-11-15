---
layout: post
title: "Angular scope issue with nested HTML elements"
comments: true
---

I have this very simple example where I am trying show a processing icon, clicking on the save button sets a `saving` flag in `$scope` in the controller.

My issue is that the button is disabled via the directive `ng-disabled` but the other directives under the button don't hold the value for `saving`

```
button.btn.btn-default(ng-show='editMode', ng-disabled='saving', ng-click='save()')
  ui-icon(ng-hide='saving', icon='fa-save')
  ui-icon-processing(ng-show='saving')
  span Save

```

What could cause this issue to happen?