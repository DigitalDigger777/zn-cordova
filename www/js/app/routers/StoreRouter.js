/**
 * Created by korman on 23.11.16.
 */

define(['marionette', 'controller/StoreController'], function(Marionette, StoreController){

    var StoreRouter = Marionette.AppRouter.extend({
        controller: StoreController,
        appRoutes: {
            'store-list/:page':'showList',
            'store-item/:id': 'showItem',
            'store-all-coupons/:id': 'allCoupons',
            'store-your-coupons/:id': 'youCoupons'
        }
    });

    return new StoreRouter();
});