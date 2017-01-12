/**
 * Created by korman on 22.11.16.
 */

require.config({
    urlRoot: 'http://xu.joinppcg.com/',
    baseUrl: './',
    paths: {
        vendor: "./vendor",

        controller: "./js/app/controllers",
        model: "./js/app/models",
        view: "./js/app/views",
        router: "./js/app/routers",
        template: "./js/app/templates",
        collection: "./js/app/collections",

        jquery: "./vendor/jquery/dist/jquery.min",
        underscore: "./vendor/underscore/underscore-min",
        backbone: "./vendor/backbone/backbone-min",
        "backbone.radio": "./vendor/backbone.radio/build/backbone.radio.min",
        marionette: "./vendor/backbone.marionette/lib/backbone.marionette.min",
        text: "./vendor/text/text",
        "backbone-local-storage": './vendor/backbone-localstorage/backbone-localstorage',

        drum: "./scripts/ios_7_drums/lib/drum.min",

        hammerjs: "./vendor/hammerjs/hammer.min",
        "jquery-hammer": "./vendor/jquery-hammerjs/jquery.hammer",
        "backbone-hammer": "./vendor/backbone.hammer/backbone.hammer.js",
        "hammer-fakemultitouch": "./vendor/hammerjs/plugins/hammer.fakemultitouch"
    },
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [ "underscore", "jquery"],
            exports: "backbone"
        },
        marionette: {
            deps: ["backbone", "backbone.radio"],
            exports: 'marionette'
        },
        "backbone-local-storage": {
            deps: ["backbone"],
            exports: "Backbone.localStorage"
        },
        drum: {
            deps: ["jquery"],
            exports: 'Drum'
        }
    },
    waitSeconds: 10
});

require(['./js/app/main'], function(ZanApp){
    app.zan = new ZanApp();
    app.zan.start();
});

define(['hammerjs'], function(Hammer){
    window.Hammer = Hammer;
});

//require([
//
//    'text!js/app/templates/received.html'
//], function(mainTemplate){
//    console.log(mainTemplate);
//
//
//
//    $(function(){
//        //console.log(Backbone);
//        //window.BackboneRouter = new Backbone.Router();
//        //
//        //var zan = new Marionette.Application();
//        //zan.on('start', function(){
//        //    Backbone.history.start({
//        //        pushState: false
//        //    });
//        //    //
//        //    //var mainView = new ReceivedView({
//        //    //    template: function(){
//        //    //        return _.template(mainTemplate)({});
//        //    //    }
//        //    //});
//        //    //mainView.render();
//        //});
//
//
//    });
//
//});