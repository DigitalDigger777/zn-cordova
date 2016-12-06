/**
 * Created by korman on 22.11.16.
 */

define([
    'marionette',
    'text!template/received/item.html'
], function(Marionette, template){
    //console.log(Marionette);
    return Marionette.View.extend({
        tagName: 'div',
        className: 'zan-card zan-container-content',
        template: function(model){
            return _.template(template)(model);
        },
        onRender: function(){
            console.log('Render received list item');
        }
    });
});