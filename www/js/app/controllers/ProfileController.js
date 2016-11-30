/**
 * Created by korman on 23.11.16.
 */

define([
    'view/user/ProfileView',
    'view/user/LoginView'
], function(ProfileView, LoginView){
    return {
        showProfile: function(){
            //TODO: release show profile
            console.log('show profile');
            var profileView = new ProfileView();
            profileView.render();
        },
        login: function(){
            console.log('login');
            var loginView = new LoginView();
            loginView.render();
        },
        loginHelp: function(){

        }
    }
});