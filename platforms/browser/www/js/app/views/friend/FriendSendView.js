/**
 * Created by korman on 28.11.16.
 */

define([
    'marionette',
    'text!template/coupon/send.html'
], function(Marionette, template){

    return Marionette.View.extend({
        el:'#page-content-scroll',
        template: function(){
            return _.template(template)({});
        },
        onRender: function(){
            console.log('Render send coupon');
        }
    });
});