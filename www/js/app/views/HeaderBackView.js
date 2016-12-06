/**
 * Created by korman on 01.12.16.
 */

define([
    'marionette',
    'backbone',
    'text!template/header_back.html'
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

        }
    });
});
