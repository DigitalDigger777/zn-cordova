/**
 * Created by korman on 28.11.16.
 */

define([
    'marionette',
    'text!template/message/list.html',
    'view/message/MessageItemView'
], function(Marionette, template, MessageItemView){

    return Marionette.CompositeView.extend({
        el: '#page-content-scroll',
        childView: MessageItemView,
        childViewContainer: '#messageList',
        template: function(){
            return _.template(template)({});
        },
        onRender: function(){
            console.log('Render Message list');
        }
    });
});