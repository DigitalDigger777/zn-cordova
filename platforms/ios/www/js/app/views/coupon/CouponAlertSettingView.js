/**
 * Created by korman on 28.11.16.
 */

define([
    'marionette',
    'text!template/coupon/alert_setting.html'
], function(Marionette, template){

    return Marionette.View.extend({
        el:'#page-content-scroll',
        ui: {
            chose: '[href="#alert-choose"]',
            none: '#option-1',
            beforeOneDay: '#option-2',
            beforeOneWeek: '#option-3'
        },
        events: {
            'click @ui.chose': function(e){
                e.preventDefault();
                var reg = /[\w\W]+?\/([0-9]+)/;
                var hashItems = reg.exec(window.location.hash);
                if (hashItems != null) {
                    var id = hashItems[1];
                    window.location = '#alert-choose/' + id;
                }
            },
            'click @ui.none': function(e){
                e.preventDefault();
                window.localStorage.setItem('time', 'none');
                window.localStorage.setItem('range', 'none');
            },
            'click @ui.beforeOneDay': function(e){
                e.preventDefault();
                window.localStorage.setItem('time', '1');
                window.localStorage.setItem('range', 'days');
            },
            'click @ui.beforeOneWeek': function(e){
                e.preventDefault();
                window.localStorage.setItem('time', '1');
                window.localStorage.setItem('range', 'weeks');
            }
        },
        template: function(model){
            return _.template(template)(model);
        },
        onRender: function(){
            console.log('coupon alert setting');
        }
    });
});