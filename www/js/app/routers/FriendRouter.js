/**
 * Created by korman on 23.11.16.
 */

define(['marionette', 'controller/FriendController'], function(Marionette, FriendController){

    var FriendRouter = Marionette.AppRouter.extend({
        controller: FriendController,
        appRoutes: {
            'friend-list/:page':'showList',
            'friend-item/:id': 'showItem'
        }
    });

    return new FriendRouter();
});