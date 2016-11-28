/**
 * Created by korman on 25.11.16.
 */

define(['backbone', 'model/CouponModel'], function(Backbone, CouponModel){
    console.log(requirejs.s.contexts._.config.urlRoot );
    var urlRoot = requirejs.s.contexts._.config.urlRoot;

    return Backbone.Collection.extend({
        url: urlRoot + '/list',
        model: CouponModel
    });
});