var express = require("express");

var app = express();
var path = require("path");

app.disable('x-powered-by');
app.set('port', process.env.PORT || 3230);

app.get('/',function(req,res){
    res.send('Express Works');
}
);


app.listen(app.get('port'),function()
{
    console.log('Express started press Ctrl-C to terminate.')
});
