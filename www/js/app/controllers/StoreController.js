/**
 * Created by korman on 23.11.16.
 */

define([
    'collection/StoreCollection',
    'view/store/StoreCompositeView'
], function(StoreCollection, StoreCompositeView){
    return {
        showList: function(page){
            console.log('store list');

            var storeList = new StoreCollection();

            storeList.fetch({
                success: function(collection, response){
                    console.log(collection.toJSON());
                },
                error: function(collection, response){
                    console.log('Error');
                }
            });
            var storeListView = new StoreCompositeView({
                collection: storeList
            });
            storeListView.render();
        },
        showItem: function(id){
            //TODO: release show item list
            console.log('store item');
        }
    }
});