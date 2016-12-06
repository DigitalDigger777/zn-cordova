/**
 * Created by korman on 28.11.16.
 */

define([
    'marionette',
    'text!template/store/list.html',
    'view/store/StoreItemView'
], function(Marionette, template, StoreItemView){

    return Marionette.CompositeView.extend({
        el: '#page-content-scroll',
        childView: StoreItemView,
        childViewContainer: '#storeList',
        template: function(){
            return _.template(template)({});
        },
        onRender: function(){
            console.log('Render Store list');
        }
    });
});