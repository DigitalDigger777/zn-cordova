/**
 * Created by korman on 28.11.16.
 */

define([
    'marionette',
    'text!template/store/detail.html'
], function(Marionette, template){

    return Marionette.View.extend({
        el:'#content',
        template: function(model){
            return _.template(template)(model);
        },
        onRender: function(){
            console.log('Render store detail');
        }
    });
});