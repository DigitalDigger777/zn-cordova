/**
 * Created by korman on 05.12.16.
 */

define([
    'marionette',
    'text!template/store/your_coupons/list.html',
    'view/store/your_coupons/StoreYourCouponItemView'
], function(Marionette, template, StoreYourCouponItemView){

    return Marionette.CompositeView.extend({
        el: '#tab-1',
        childView: StoreYourCouponItemView,
        childViewContainer: '#your-coupons',
        template: function(){
            return _.template(template)({});
        },
        onRender: function(){
            console.log('Render Store list');
        }
    });

});