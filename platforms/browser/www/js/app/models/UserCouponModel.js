/**
 * Created by korman on 24.11.16.
 */

define(['backbone'], function(Backbone){
    var urlRoot = requirejs.s.contexts._.config.urlRoot;



    return Backbone.Model.extend({
            urlRoot: urlRoot + 'en/pass/api/user-coupon',
            sync: function(method, model, options){
                return $.ajax({
                    method: 'GET',
                    dataType: 'jsonp',
                    url: this.urlRoot,
                    data: {
                        apikey: this.get('apikey'),
                        task: this.get('task'),
                        couponId: this.get('couponId')
                    }
                });
            }
        });
});