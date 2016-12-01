/**
 * Created by korman on 24.11.16.
 */

define(['backbone'], function(Backbone){
    var urlRoot = requirejs.s.contexts._.config.urlRoot;

    var StoreModel = Backbone.Model.extend({
        urlRoot: urlRoot + 'en/pass/rest/coupon'
    });

    return StoreModel;
});