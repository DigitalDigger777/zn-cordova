/**
 * Created by korman on 22.11.16.
 */

define([
    'marionette',
    'text!template/coupon/item.html',
    'vendor/jquery_lazyload/jquery.lazyload'
], function(Marionette, template){
    //console.log(Marionette);
    return Marionette.View.extend({
        el: '#content',
        template: function(model){
            console.log('vm', model);
            return _.template(template)(model);
        },
        onRender: function(){
            $(".preload-image").lazyload({
                threshold : 100,
                effect : "fadeIn",
                container: $("#page-content-scroll")
            });
        }
    });
});