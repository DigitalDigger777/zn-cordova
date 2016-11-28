/**
 * Created by korman on 24.11.16.
 */

define(['backbone'], function(Backbone){
    var CouponModel = Backbone.Model.extend({
        urlRoot: 'http://dev.xu/app_dev.php/en/pass/rest/coupon'
    });

    return CouponModel;
});