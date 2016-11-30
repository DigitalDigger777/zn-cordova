/**
 * Created by korman on 23.11.16.
 */

define([
    'collection/CouponCollection',
    'view/coupon/CouponCompositeView'
], function(CouponCollection, CouponCopositeView){
    return {
        showList: function(page){

            console.log('coupon list');

            var couponList = new CouponCollection();

            couponList.fetch({
                success: function(collection, response){
                    console.log(collection.toJSON());
                },
                error: function(collection, response){
                    console.log('Error');
                }
            });
            var couponListView = new CouponCopositeView({
                collection: couponList
            });
            couponListView.render();
        },
        showItem: function(id){
            //TODO: release show item list
            console.log('coupon item');
        }
    }
});