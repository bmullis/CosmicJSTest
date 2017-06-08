(function () {
    'use strict';

    var app = angular
                .module('main');

    app.constant('BUCKET_SLUG', 'first-sample-project');
    app.constant('URL', 'https://api.cosmicjs.com/v1/');
    app.constant('MEDIA_URL', 'https://api.cosmicjs.com/v1/first/media');
    app.constant('READ_KEY', 'qMfNZvZ744LFE7sjHa4Icz5QCGZghRszpOVJIEfQ9CEqRWEkAI');
    app.constant('WRITE_KEY', 'e3q5GLn6HTlqIPRMgHcaD55jbeqOHhz0e00bL6lEaLNpRd02uh');
    app.constant('DEFAULT_EVENT_IMAGE', 'https://cosmicjs.com/uploads/ce6ed110-31da-11e7-aef2-87741016d54e-no_image.png');

})();
