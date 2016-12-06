/**
 * Created by korman on 25.11.16.
 */

define(['backbone', 'model/FriendModel'], function(Backbone, FriendModel){

    var urlRoot = requirejs.s.contexts._.config.urlRoot;

    return Backbone.Collection.extend({
        url: function(){
            return urlRoot + 'en/pass/api/user-coupon/list?apikey=' + window.localStorage.getItem('token')
        },
        model: FriendModel,
        sync: function(method, collection, options){
            console.log(options);
            options.dataType = "jsonp";
            return Backbone.sync(method, collection, options);
        }
    });
});