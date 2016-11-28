/**
 * Created by korman on 22.11.16.
 */

define([
    'backbone',
    './views/ReceivedView',
    'text!js/app/templates/received.html',
    'router/CouponRouter',
    'router/FriendRouter',
    'router/MessageRouter',
    'router/ProfileRouter',
    'router/ReceivedRouter',
    'router/ScanRouter',
    'router/StoreRouter'
], function(Backbone, ReceivedView, mainTemplate){


    var zan = Backbone.Marionette.Application.extend({

        onStart: function(options){
            var receivedView = new ReceivedView({
                template: function(){
                    return _.template(mainTemplate)({});
                }
            });
            Backbone.history.start();
            //var receivedRouter = new ReceivedRouter(options);
            receivedView.render();

        }
    });

    return zan;
});