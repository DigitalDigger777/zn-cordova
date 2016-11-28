/**
 * Created by korman on 22.11.16.
 */

define(['marionette', 'text!template/received/collection_item.html'], function(Marionette, template){
    //console.log(Marionette);
    return Marionette.View.extend({
        tagName: 'div',
        className: 'zan-card zan-container-content',
        template: function(){
            return _.template(template)({});
        },
        onRender: function(){
            console.log('Render received list item');
        }
    });
});