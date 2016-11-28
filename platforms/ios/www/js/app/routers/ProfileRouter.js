/**
 * Created by korman on 23.11.16.
 */

define(['marionette', 'controller/ProfileController'], function(Marionette, ProfileController){

    var ProfileRouter = Marionette.AppRouter.extend({
        controller: ProfileController,
        appRoutes: {
            'profile':'showProfile'
        }
    });

    return new ProfileRouter();
});