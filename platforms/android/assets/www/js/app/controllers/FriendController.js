/**
 * Created by korman on 23.11.16.
 */

define([
    'collection/FriendCollection',
    'view/friend/FriendCompositeView',
    'view/friend/FriendSendView'
], function(FriendCollection, FriendCompositeView, FriendSendView){
    return {
        showList: function(page){
            console.log('friend list');
            var friendList = new FriendCollection();

            friendList.fetch({
                success: function(collection, response){
                    console.log(collection.toJSON());
                    var friendListView = new FriendCompositeView({
                        collection: friendList
                    });
                    friendListView.render();
                },
                error: function(collection, response){
                    console.log('Error');
                }
            });
        },
        send: function(id){

            console.log('send coupon');

            var friendSendView = new FriendSendView();
            friendSendView.render();
        }
    }
});