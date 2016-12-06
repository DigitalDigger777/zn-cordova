/**
 * Created by korman on 23.11.16.
 */

define([
    'collection/MessageCollection',
    'view/message/MessageCompositeView'
], function(MessageCollection, MessageCompositeView){
    return {
        showList: function(page){
            console.log('message list');

            var messageList = new MessageCollection();

            messageList.fetch({
                success: function(collection, response){
                    console.log(collection.toJSON());
                },
                error: function(collection, response){
                    console.log('Error');
                }
            });
            var messageListView = new MessageCompositeView({
                collection: messageList
            });
            messageListView.render();
        },
        showItem: function(id){
            //TODO: release show message
            console.log('message item');
        }
    };
});