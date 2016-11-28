/**
 * Created by korman on 23.11.16.
 */

define(['marionette', 'controller/StoreController'], function(Marionette, StoreController){

    var StoreRouter = Marionette.AppRouter.extend({
        controller: StoreController,
        appRoutes: {
            'store-list/:page':'showList',
            'store-item/:id': 'showItem'
        }
    });

    return new StoreRouter();
});