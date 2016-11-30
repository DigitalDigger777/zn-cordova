/**
 * Created by korman on 28.11.16.
 */

define([
    'marionette',
    'backbone',
    'text!template/user/login.html'
], function(Marionette, Backbone, template){
    return Marionette.View.extend({
        el: '#content',
        ui: {
            loginButton: '[href="#login"]'
        },
        events: {
            'click @ui.loginButton': function(e){
                e.preventDefault();
                var urlRoot = requirejs.s.contexts._.config.urlRoot;

                console.log('click create login');

                var email = $('[name="email"]').val();
                var password = $('[name="password"]').val();

                $.ajax({
                    url: urlRoot + 'en/core-user/rest/api-auth',
                    dataType:'jsonp',
                    method: 'GET',
                    data: {
                        email: email,
                        password: password
                    },
                    success: function(data){
                        console.log(data.token);
                        window.localStorage.setItem('token', data.token);
                        window.location.hash = '#received-list/1';

                    },
                    error: function(error){
                        console.log(error);
                    }
                });
            }
        },
        template: function(model){
            return _.template(template)(model);
        },
        onRender: function(){
            console.log('Render Login', app);

        }
    });
});