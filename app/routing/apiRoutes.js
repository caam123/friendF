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
    //Solved. It wasn't working 'cause I wasn't sending any res.end() o res.json(XXX) :s jaja
    app.post("/api/friends", function(req, res){
      
        //user createad from the survey
        var user = req.body;

        //turn into integers the results stored in scores array
        for (var i = 0; i < user.scores.length; i++) {
            user.scores[i] = parseInt(user.scores[i]);            
        }

        //temporary variables

        var bestMatchIndex = 0;
        var minDiff = 100;

        //Looping inside another loop. Compare user vs friend[i] score, one at a time to get the one with minimun difference.
        //Add that subtract to the total each time
        //We'll use Math.abs(----) for absolute numbers, no matter if they're negative or positive.}
        //Letter "s" for Scores index, just to have it on my mind and quite clear.

        for (var i = 0; i < friendsData.length; i++) {
            var totalDiff =0;
            
            for (var s = 0; s < friendsData[i].scores.length; s++) {
                var difference = Math.abs(user.scores[s] - friendsData[i].scores[s]);
                totalDiff += difference;
            }

            if(totalDiff < minDiff){
                bestMatchIndex = i;
                minDiff = totalDiff;
            }
        }

        console.log(bestMatchIndex);
        console.log(minDiff);
        //friendsData.push(user)
        res.json(friendsData[bestMatchIndex]);
        //res.json(friendsData[bestMatchIndex]);

    });
};