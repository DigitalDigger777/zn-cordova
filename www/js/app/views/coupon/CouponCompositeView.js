/**
 * Created by korman on 28.11.16.
 */

define([
    'marionette',
    'text!template/coupon/list.html',
    'view/coupon/CouponItemView'
], function(Marionette, template, CouponItemView){

    return Marionette.CompositeView.extend({
        el: '#content',
        childView: CouponItemView,
        childViewContainer: '#couponList',
        template: function(){
            return _.template(template)({});
        },
        onRender: function(){
            console.log('Render Coupon list');
        }
    });
});