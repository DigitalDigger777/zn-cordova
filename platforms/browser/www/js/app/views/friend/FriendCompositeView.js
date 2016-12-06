/**
 * Created by korman on 28.11.16.
 */

define([
    'marionette',
    'text!template/friend/list.html',
    'view/friend/FriendItemView',
    'vendor/jquery_lazyload/jquery.lazyload'
], function(Marionette, template, FriendItemView){

    return Marionette.CompositeView.extend({
        el: '#page-content-scroll',
        childView: FriendItemView,
        childViewContainer: '#friendList',
        template: function(){
            return _.template(template)({});
        },
        onRender: function(){
            console.log('Render Friend list');
            $(".preload-image").lazyload({
                threshold : 100,
                effect : "fadeIn",
                container: $("#page-content-scroll")
            });
        }
    });
});