/**
 * Created by korman on 23.11.16.
 */

define([
    'view/user/ProfileView',
    'view/user/LoginView',
    'view/user/LoginHelpView'
], function(ProfileView, LoginView, LoginHelpView){
    return {
        showProfile: function(){
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
            console.log('show login help form');
            var loginHelpView = new LoginHelpView();
            loginHelpView.render();
        }
    }
});