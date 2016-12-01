/**
 * Created by korman on 28.11.16.
 */

define([
    'marionette',
    'text!template/friend/list.html',
    'view/friend/FriendItemView'
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
        }
    });
});