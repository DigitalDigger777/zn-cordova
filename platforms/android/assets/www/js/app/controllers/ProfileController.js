/**
 * Created by korman on 23.11.16.
 */

define([
    'view/user/ProfileView',
    'view/user/LoginView',
    'view/user/LoginHelpView',
    'view/user/ChangePassView',
    'view/user/MyQrView',
    'model/CurrentUserModel'
], function(ProfileView, LoginView, LoginHelpView, ChangePassView, MyQrView, CurrentUserModel){
    return {
        showProfile: function(){
            console.log('show profile');
            var token = window.localStorage.getItem('token');
            var currentUserModel = new CurrentUserModel();

            currentUserModel.set('id', 0);
            currentUserModel.fetch({
                dataType: 'jsonp',
                data: {
                    apikey: token
                },
                success: function(model, response){
                    console.log(model.toJSON());
                    var profileView = new ProfileView({
                        model: model
                    });
                    profileView.render();
                },
                error: function(model, response){
                    console.log('Error' + response.responseJSON.message);
                }
            });


        },
        changePass: function(){
            var changePassView = new ChangePassView();
            changePassView.render();
        },
        myQrCode: function(){

            console.log('show profile');
            var token = window.localStorage.getItem('token');
            var currentUserModel = new CurrentUserModel();

            currentUserModel.set('id', 0);
            currentUserModel.fetch({
                dataType: 'jsonp',
                data: {
                    apikey: token
                },
                success: function(model, response){
                    console.log(model.toJSON());
                    //var profileView = new ProfileView({
                    //    model: model
                    //});
                    //profileView.render();

                    var myQrView = new MyQrView({
                        model: model
                    });
                    myQrView.render();
                },
                error: function(model, response){
                    console.log('Error' + response.responseJSON.message);
                }
            });
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