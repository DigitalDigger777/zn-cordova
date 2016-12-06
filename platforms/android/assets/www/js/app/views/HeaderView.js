/**
 * Created by korman on 01.12.16.
 */

define([
    'marionette',
    'backbone',
    'text!template/header.html'
], function(Marionette, Backbone, template){
    //console.log(Marionette);
    return Marionette.View.extend({
        el: '#header',
        ui: {
            back: '#history_back'
        },
        events: {
            'click @ui.back': function(e){
                e.preventDefault();
                console.log(window.history);
                window.history.back();
            }
        },
        template: function(model){
            return _.template(template)(model);
        },
        onRender: function(){
            $(window).on('hashchange', function() {

                console.log('url change ' + window.location.hash);
                //coupon-item/19
                //store-item/6
                //send/6
                var reg = /(coupon-item|store-item|send|alert-setting|alert-choose)\/[0-9]+/;

                if (reg.test(window.location.hash)) {
                    $('#history_back').fadeIn(10);
                } else {
                    $('#history_back').fadeOut(10);
                }

            });
        }
    });
});
