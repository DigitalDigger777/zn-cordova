/**
 * Created by korman on 23.11.16.
 */

define([
    'collection/StoreCollection',
    'view/store/StoreCompositeView',
    'model/StoreModel',
    'view/store/StoreDetailView'
], function(StoreCollection, StoreCompositeView, StoreModel, StoreDetailView){
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
                },
                error: function(model, response){
                    console.log('error', model, response);
                }
            });
        }
    }
});