//LOAD DATA
//Esto linkea los arrays de DATA, en este caso los arrays de amigos que existen por default hasta el momento, y despues los que se vayan agregando
// Para linkearlos/agregarlos/importarlos usamos "require"

var friendsData = require("../data/friends")

// ROUTING

module.exports = function(app){
    //Esta seccion maneja que pasa cuando el usuario accede a cierta ruta, se le muestra un archivo JSON ¿?
    //Usamos GET porque obtenemos la info de algún otro lugar

    //GET

    app.get("/api/friends", function(req, res){
        res.json(friendsData)
    });

    // POSTS
    //Its important to write the routes correctly, starting at least in this case with slash "/"

    //When testing in postman itsnot quite working....
    app.post("/api/friends", function(req, res){
        friendsData.push(req.body);
        

    });

}