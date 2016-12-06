/**
 * Created by korman on 28.11.16.
 */

define([
    'marionette',
    'text!template/message/item.html'
], function(Marionette, template){

    return Marionette.View.extend({
        tagName: 'div',
        template: function(){
            return _.template(template)({});
        },
        onRender: function(){
            console.log('Render message item');
        }
    });
});