/**
 * Created by korman on 05.12.16.
 */

define([
    'marionette',
    'text!template/store/all_coupons/list.html',
    'view/store/all_coupons/StoreAllCouponItemView'
], function(Marionette, template, StoreAllCouponItemView){

    return Marionette.CompositeView.extend({
        el: '#tab-1',
        childView: StoreAllCouponItemView,
        childViewContainer: '#all-coupons',
        template: function(){
            return _.template(template)({});
        },
        onRender: function(){
            console.log('Render Store all coupons');
        }
    });

});