/**
 * Created by korman on 23.11.16.
 */

define(['marionette', 'controller/MessageController'], function(Marionette, MessageController){

    var MessageRouter = Marionette.AppRouter.extend({
        controller: MessageController,
        appRoutes: {
            'message-list/:page':'showList',
            'message-item/:id': 'showItem'
        }
    });

    return new MessageRouter();
});