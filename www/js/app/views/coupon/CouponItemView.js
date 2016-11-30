/**
 * Created by korman on 28.11.16.
 */

define([
    'marionette',
    'text!template/coupon/item.html'
], function(Marionette, template){

    return Marionette.View.extend({
        tagName: 'div',
        className: 'zan-card zan-container-content',
        template: function(){
            return _.template(template)({});
        },
        onRender: function(){
            console.log('Render coupon item');
        }
    });
});