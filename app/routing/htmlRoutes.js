//Aqui lo que se hace es que te envía al html que te corresponde segun la direccion que escribas en la barra, puede ser en este caso al home o al formulario i guess
//Se require el de package path 

var path = require("path");

//Exportamos en este caso una funcion que hace determinadas acciones, en este caso no es info como tal sino un caso diferente segun la direccion que se visite. 
module.exports = function(app){

    app.get("/survey", function(req,res){
        res.sendFile(path.join(__dirname,"../public/survey.html"))
    });

    app.get("*", function(req, res){
        res.sendFile(path.join(__dirname,"../public/home.html"));
    })



}
