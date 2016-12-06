/**
 * Created by korman on 23.11.16.
 */

define([
    'collection/StoreCollection',
    'view/store/StoreCompositeView',
    'model/StoreModel',
    'view/store/StoreDetailView',
    'view/store/all_coupons/StoreAllCouponCompositeView',
    'view/store/your_coupons/StoreYourCouponCompositeView',
    'collection/StoreAllCouponCollection',
    'collection/StoreYourCouponCollection'
], function(StoreCollection, StoreCompositeView, StoreModel,
            StoreDetailView, StoreAllCouponCompositeView, StoreYourCouponCompositeView,
            StoreAllCouponCollection, StoreYourCouponCollection){

    return {
        showList: function(page){
            console.log('store list');

            var storeList = new StoreCollection();

            storeList.fetch({
                success: function(collection, response){
                    console.log('fetch collection');

                    var storeListView = new StoreCompositeView({
                        collection: collection
                    });
                    storeListView.render();
                },
                error: function(collection, response){
                    console.log('Error');
                }
            });

        },
        showItem: function(id){

            console.log('store item', id);
            var token = window.localStorage.getItem('token');

            var model = new StoreModel();
            model.set('id', id);
            model.fetch({
                data: {
                    apikey: token
                },
                dataType:'jsonp',
                success: function(model, response){

                    console.log(model.toJSON());

                    var storeView = new StoreDetailView({
                        model: model
                    });
                    storeView.render();

                    var token = window.localStorage.getItem('token');
                    var allCouponsCollection = new StoreAllCouponCollection();

                    allCouponsCollection.fetch({
                        data: {
                            shopperId: id,
                            apikey: token
                        },
                        success: function(collection){
                            var allCouponsView = new StoreAllCouponCompositeView({
                                collection:collection
                            });
                            allCouponsView.render();
                        },
                        error: function(collection, response){
                            console.log('load coupons error');
                        }
                    });
                },
                error: function(model, response){
                    console.log('error', model, response);
                }
            });
        },
        allCoupons: function(id){
            var token = window.localStorage.getItem('token');
            var allCouponsCollection = new StoreAllCouponCollection();

            allCouponsCollection.fetch({
                data: {
                    shopperId: id,
                    apikey: token
                },
                success: function(collection){
                    var allCouponsView = new StoreAllCouponCompositeView({
                        collection:collection
                    });
                    allCouponsView.render();
                },
                error: function(collection, response){
                    console.log('load coupons error');
                }
            });

        },
        youCoupons: function(id){
            var token = window.localStorage.getItem('token');
            var allCouponsCollection = new StoreYourCouponCollection();

            allCouponsCollection.fetch({
                data: {
                    apikey: token
                },
                success: function(collection){
                    var yourCouponsView = new StoreYourCouponCompositeView({
                        collection:collection
                    });
                    yourCouponsView.render();
                },
                error: function(collection, response){
                    console.log('load coupons error');
                }
            });

        }
    }
});