# QBNotification

A wrapper for using the [Web Notifications API](https://www.w3.org/TR/notifications/).

See QBNotification in action in folder test/* 

[Browsers support see on caniuse](http://caniuse.com/#feat=notifications)

## Usage
Module written like Universal Module Definition, so use everywhere.

Before show notification you need get [permission](https://developer.mozilla.org/en-US/docs/Web/API/Notification/permission) from user by
```javascript
QBNotification.requestPermission(function(state) {
    console.log('State is changed: ' + state);
});
```
Then you create Instance of QBNotification.
```javascript
/**
 * @param {[string]} title   [Title of notification. Required value]
 * @param {[type]} options [Additional options: standard params + timeout]
 */
var notify = new QBNotification(title, options);
```
Then you could to show notification by
```javascript
notify.show()
```
Also you have:

```javascript
/**
 * [isSupported - check is Notification available in environment]
 * @return {Boolean} [false if not available]
 */
QBNotification.isSupported()
```

```javascript
/**
 * [isSupported - check if user add you permission to show Notification]
 * @return {Boolean} [false if not available]
 */
QBNotification.needsPermission()
```


#### Helpful links
[W3](https://www.w3.org/TR/notifications/),
[whatwg group](https://notifications.spec.whatwg.org/),
[MDN](https://developer.mozilla.org/en/docs/Web/API/notification)
