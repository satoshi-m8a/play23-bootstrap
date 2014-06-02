/*global require, requirejs */

requirejs.config({
    paths: {
        jquery: '../lib/jquery/jquery',
        bootstrap: '../lib/bootstrap/js/bootstrap'
    },
    shim: {
        jquery: {
            exports: '$'
        },
        bootstrap: {
            deps: ['jquery']
        }
    }
});

require(["jquery", "bootstrap"], function ($) {
    "use strict";

    console.log($.fn.jquery);
});