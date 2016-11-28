/**
 * Created by korman on 23.11.16.
 */

define(['marionette', 'controller/ScanController'], function(Marionette, ScanController){

    var ScanRouter = Marionette.AppRouter.extend({
        controller: ScanController,
        appRoutes: {
            'scan':'scan'
        }
    });

    return new ScanRouter();
});