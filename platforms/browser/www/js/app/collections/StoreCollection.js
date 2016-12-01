/**
 * Created by korman on 25.11.16.
 */

define(['backbone', 'model/StoreModel'], function(Backbone, StoreModel){

    var urlRoot = requirejs.s.contexts._.config.urlRoot;

    return Backbone.Collection.extend({
        url: function(){
            return urlRoot + 'en/pass/api/user-coupon/list?apikey=' + window.localStorage.getItem('token')
        },
        model: StoreModel,
        sync: function(method, collection, options){
            console.log(options);
            options.dataType = "jsonp";
            return Backbone.sync(method, collection, options);
        }
    });
});