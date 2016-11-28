/**
 * Created by korman on 23.11.16.
 */

define(['marionette', 'controller/ReceivedController'], function(Marionette, ReceivedController){

    var ReceivedRouter = Marionette.AppRouter.extend({
        controller: ReceivedController,
        appRoutes: {
            'received-list/:page':'showList',
            'received-item/:id': 'showItem'
        }
    });

    return new ReceivedRouter();
});