/**
 * Created by korman on 22.11.16.
 */

define([
    'backbone',
    'view/ReceivedCompositeView',
    'collection/ReceivedCollection',
    'router/CouponRouter',
    'router/FriendRouter',
    'router/MessageRouter',
    'router/ProfileRouter',
    'router/ReceivedRouter',
    'router/ScanRouter',
    'router/StoreRouter'
], function(Backbone, ReceivedCompositeView, ReceivedCollection){


    var zan = Backbone.Marionette.Application.extend({

        onStart: function(options){
            var receivedList = new ReceivedCollection();

            receivedList.fetch({
                success: function(collection, response){
                    console.log(collection.toJSON());
                },
                error: function(collection, response){
                    console.log('Error');
                }
            });
            var receivedListView = new ReceivedCompositeView({
                collection: receivedList
            });

            Backbone.history.start();

            receivedListView.render();
            receivedListView.renderChildren();

        }
    });

    return zan;
});