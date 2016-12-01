/**
 * Created by korman on 23.11.16.
 */

define([
    'collection/FriendCollection',
    'view/friend/FriendCompositeView'
], function(FriendCollection, FriendCompositeView){
    return {
        showList: function(page){
            console.log('friend list');
            var friendList = new FriendCollection();

            friendList.fetch({
                success: function(collection, response){
                    console.log(collection.toJSON());
                },
                error: function(collection, response){
                    console.log('Error');
                }
            });
            var friendListView = new FriendCompositeView({
                collection: friendList
            });
            friendListView.render();
        },
        showItem: function(id){
            //TODO: show friend
            console.log('friend item');
        }
    }
});