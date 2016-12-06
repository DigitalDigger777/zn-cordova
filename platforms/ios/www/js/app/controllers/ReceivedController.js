/**
 * Created by korman on 23.11.16.
 */

define([
    'collection/ReceivedCollection',
    'view/ReceivedCompositeView'
], function(ReceivedCollection, ReceivedCompositeView){
    return {
        showList: function(page) {

            console.log('received list');
            var receivedList = new ReceivedCollection();

            receivedList.fetch({
                success: function(collection, response){
                    console.log(collection.toJSON());
                    var receivedListView = new ReceivedCompositeView({
                        collection: receivedList
                    });
                    receivedListView.render();
                },
                error: function(collection, response){
                    console.log('Error');
                }
            });

        },
        showItem: function(id) {
            //TODO: show item
            console.log('received item');
        }
    }
});