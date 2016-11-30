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
    'router/StoreRouter',
    'router/SignUpRouter'
], function(Backbone, ReceivedCompositeView, ReceivedCollection){


    var zan = Backbone.Marionette.Application.extend({

        onStart: function(options){

            var token = window.localStorage.getItem('token');
            console.log(token);
            Backbone.history.start();

            if (window.localStorage.getItem('token') !== null) {

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

                receivedListView.render();
            } else {
                //Backbone.history.navigate('#login', true);
                window.location.hash = '#login'
            }


        }
    });

    return zan;
});