/**
 * Created by korman on 28.11.16.
 */

define([
    'marionette',
    'model/UserCouponModel',
    'text!template/coupon/alert_choose.html',
    'drum',
    'hammerjs',
    'jquery-hammer',
    'hammer-fakemultitouch'
], function(Marionette, UserCouponModel, template){

    return Marionette.View.extend({
        el:'#page-content-scroll',
        template: function(model){
            return _.template(template)(model);
        },
        onRender: function(){
            console.log('coupon alert setting');
            $("#zan-time-before").drum({
                onChange: function(){
                    var time = $('#zan-time-before').val();
                    var range = $('#zan-time-range').val();

                    $('#choseValue').text(time + ' ' + range + ' before');
                    window.localStorage.setItem('time', time);
                    window.localStorage.setItem('range', range);
                    console.log('change time');
                }
            });
            $("#zan-time-range").drum({
                onChange: function(){
                    var time = $('#zan-time-before').val();
                    var range = $('#zan-time-range').val();

                    $('#choseValue').text(time + ' ' + range + ' before');
                    window.localStorage.setItem('time', time);
                    window.localStorage.setItem('range', range);
                }
            });

            var _self = this;
            var token = window.localStorage.getItem('token');
            var time = window.localStorage.getItem('time');
            var range = window.localStorage.getItem('range');

            var reg = /[\w\W]+?\/([0-9]+)/;
            var hashItems = reg.exec(window.location.hash);

            if (hashItems != null) {

                var id = hashItems[1];
                var userCouponModel = new UserCouponModel();

                //var userCouponModel = new UserCouponModel({
                //    apikey: token,
                //    task: 'load',
                //    couponId: id,
                //    success: function(model, response){
                //        console.log(model);
                //        var _model = new UserCouponModel(model);
                //        _self.model = _model;
                //        console.log(_self.model.toJSON());
                //    },
                //    error: function(model, response){
                //        console.log('test');
                //    }
                //});
                //userCouponModel.set('id', id);
                //userCouponModel.fetch();

                setInterval(function () {
                    if (time != null && range != null) {

                        userCouponModel.updateNotification(function (data) {
                            console.log(data);
                        }, function (error) {
                            console.log(error);
                            //F90o0kjwe
                        });
                    }
                }, 30000);
            }
        }
    });
});