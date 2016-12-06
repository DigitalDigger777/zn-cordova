/**
 * Created by korman on 23.11.16.
 */

define([
    'collection/CouponCollection',
    'view/coupon/CouponCompositeView',
    'view/coupon/CouponDetailView',
    'model/CouponModel',
    'view/coupon/CouponAlertSettingView',
    'view/coupon/CouponAlertChooseView'
], function(CouponCollection, CouponCompositeView, CouponDetailView, CouponModel, CouponAlertSettingView, CouponAlertChooseView){
    return {
        showList: function(page){

            console.log('coupon list');

            var couponList = new CouponCollection();

            couponList.fetch({
                success: function(collection, response){
                    console.log(collection.toJSON());

                    var couponListView = new CouponCompositeView({
                        collection: collection
                    });
                    couponListView.render();
                },
                error: function(collection, response){
                    console.log('Error');
                }
            });

        },
        showItem: function(id){
            console.log('coupon item ', id);

            var token = window.localStorage.getItem('token');

            var model = new CouponModel();
            model.set('id', id);
            model.fetch({
                data: {
                    apikey: token
                },
                dataType:'jsonp',
                success: function(model, response){

                    console.log(model.toJSON());

                    var couponView = new CouponDetailView({
                        model: model
                    });
                    couponView.render();
                },
                error: function(model, response){
                    console.log('error', model, response);
                }
            });
        },
        alertSetting: function(id){
            var alertSettingView = new CouponAlertSettingView();
            alertSettingView.render();
        },
        alertChoose: function(id){
            var alertChoose = new CouponAlertChooseView();
            alertChoose.render();
        }
    }
});