;(function(window, document) {
    'use strict';

    var form = document.querySelector('#form'),
        reqPermBtn = document.querySelector('#requestPermission');

    /** Callbacks */
    function onClickNotificationCb () {
        console.log('onClickNotificationCb');
    }

    function onErrorNotificationCb () {
        console.log('onErrorNotificationCb');
    }

    function onCloseNotificationCb () {
        console.log('onCloseNotificationCb');
    }

    function onShowNotificationCb () {
        console.log('onShowNotificationCb');
    }

    /** Submit */
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        var title = form.querySelector('#title').value.trim(),
            options = {
                body: form.querySelector('#body').value.trim(),
                tag: form.querySelector('#tag').value.trim(),
                timeout: form.querySelector('#timeout').value.trim(),
                onShow: onShowNotificationCb,
                onClick: onClickNotificationCb,
                onError: onErrorNotificationCb,
                onClose: onCloseNotificationCb
            };

        var notify = new QBNotification(title, options);
        notify.show();
    });

    reqPermBtn.addEventListener('click', function(e) {
        e.preventDefault();

        QBNotification.requestPermission(function(state) {
            if(state === 'granted') {
                console.log('You have access yet.');
            } else {
                console.log('State is changed: ' + state);
            }
        });
    });
}(window, document));