/**
 * Created by korman on 23.11.16.
 */

define(['model/CouponModel', 'view/CouponView'], function(CouponModel, CouponView){
    return {
        scan: function(){
            //TODO: release scan
            console.log('scan');

            cordova.plugins.barcodeScanner.scan(
                function (result) {
                    console.log(result);
                    if(!result.cancelled)
                    {
                        if(result.format == "QR_CODE")
                        {
                            navigator.notification.prompt("Please enter name of data",  function(input){
                                var name = input.input1;
                                var value = result.text;

                                var data = localStorage.getItem("LocalData");
                                console.log(data);
                                data = JSON.parse(data);
                                data[data.length] = [name, value];

                                localStorage.setItem("LocalData", JSON.stringify(data));

                                alert("Done");
                            });
                        }

                        if (result.format == 'Fake') {
                            var model = new CouponModel();
                            model.set('id', result.text);
                            model.fetch({
                                dataType:'jsonp',
                                success: function(model, response){
                                    //console.log('success', model, response);
                                    //console.log(model.get('barcodeContent'));

                                    console.log(model.toJSON());

                                    var couponView = new CouponView({
                                        model: model
                                    });
                                    couponView.render();
                                },
                                error: function(model, response){
                                    console.log('error', model, response);
                                }
                            });
                        }
                    }
                },
                function (error) {
                    alert("Scanning failed: " + error);
                }
            );
        }
    };
});