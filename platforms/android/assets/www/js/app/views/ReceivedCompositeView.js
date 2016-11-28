/**
 * Created by korman on 22.11.16.
 */

define([
    'marionette',
    'text!template/received/list.html',
    'view/ReceivedView'
], function(Marionette, template, ReceivedView){
    //console.log(Marionette);
    console.log(template);
    console.log(ReceivedView);
    return Marionette.CompositeView.extend({
        el: '#content',
        childView: ReceivedView,
        childViewContainer: '#receivedListView',
        template: function(){
            return _.template(template)({});
        },
        onRender: function(){
            console.log('Render received list');
        }
    });
});