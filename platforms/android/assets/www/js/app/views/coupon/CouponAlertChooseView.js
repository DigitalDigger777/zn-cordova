/**
 * Created by korman on 28.11.16.
 */

define([
    'marionette',
    'text!template/coupon/alert_choose.html',
    'drum',
    'hammerjs',
    'jquery-hammer',
    'hammer-fakemultitouch'
], function(Marionette, template){

    return Marionette.View.extend({
        el:'#page-content-scroll',
        template: function(model){
            return _.template(template)(model);
        },
        onRender: function(){
            console.log('coupon alert setting');
            $("#zan-time-before").drum();
            $("#zan-time-range").drum();
        }
    });
});