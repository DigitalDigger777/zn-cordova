/**
 * Created by korman on 22.11.16.
 */

require.config({
    baseUrl: './',
    paths: {
        controller: "./js/app/controllers",
        router: "./js/app/routers",
        jquery: "./vendor/jquery/dist/jquery.min",
        underscore: "./vendor/underscore/underscore-min",
        backbone: "./vendor/backbone/backbone-min",
        "backbone.radio": "./vendor/backbone.radio/build/backbone.radio.min",
        marionette: "./vendor/backbone.marionette/lib/backbone.marionette.min",
        text: "./vendor/text/text"
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
        }
    },
    waitSeconds: 10
});

require(['./js/app/main'], function(ZanApp){
    var app = new ZanApp();
    app.start();
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