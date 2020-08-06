var express = require("express");
var app = express();
app.get("/uiplz", (req, res) => {
    res.status(200).send({
        screen: {
            name: "home-screen",
            uiElements:[{
                type:"list",
                style:"horizontal-scroll",
                data:[{
                    type:"banner",
                    title:"title 1",
                    subtitle:"Subtitle 1",
                    backgroundImage:"https://i.imgur.com/BF3ty6o.jpg",
                    buttonText: "Button 1"
                },{
                    type:"banner",
                    title:"title 2",
                    subtitle:"Subtitle 2",
                    backgroundImage:"https://i.imgur.com/rel7mXd.jpg",
                    buttonText: "Button 2"
                }
            ]
            },{
                type:"button-row",
                data:{
                    leftButtonText:"Order Delivery",
                    rightButtonText:"Order Pickup"
                }
            }
        ]
        }
    })
})
var server = app.listen(8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
});