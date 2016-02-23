# Overview

A wrapper for using the [Web Notifications API](https://www.w3.org/TR/notifications/).

See QBNotification in action in folder test/*

[Browsers support see on caniuse](http://caniuse.com/#feat=notifications)

# Usage
Module is written like Universal Module Definition, so use everywhere.

Before show a notification you need to get [permission](https://developer.mozilla.org/en-US/docs/Web/API/Notification/permission) from a user by
```javascript
QBNotification.requestPermission(function(state) {
    console.log('State is changed: ' + state);
});
```
Then you create instance of QBNotification.
```javascript
/**
 * @param {[string]} title   [Title of notification. Required value]
 * @param {[type]} options [Additional options: standard params + timeout]
 */
var notify = new QBNotification(title, options);
```
Then you can show notification by
```javascript
notify.show()
```
Also you have:
```javascript
/**
 * [isSupported - check is Notification available in environment]
 * @return {Boolean} [flag]
 */
QBNotification.isSupported()
```

```javascript
/**
 * [needsPermission - check if user add you permission to show Notification]
 * @return {Boolean} [flag]
 */
QBNotification.needsPermission()
```

# Contribution
For test we use JSHint, so do
```javascript
npm install -g jshint
npm test
```
before push yours changes.

# Helpful links
[W3](https://www.w3.org/TR/notifications/),
[whatwg group](https://notifications.spec.whatwg.org/),
[MDN](https://developer.mozilla.org/en/docs/Web/API/notification)

# License 
BSD 
