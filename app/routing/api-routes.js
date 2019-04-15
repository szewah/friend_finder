var friendsList = require("../data/friend");
var colors = require("colors");

module.exports = function(app) {
    //display a JSON of all possible friends.
    app.get("/api/friends", function(req, res) {
        res.json(friendsList);
    });
    app.post("/api/friends", function(req, res) {
        //grab the results
        let newFriendInput = req.body;
        let newFriendResults = req.body.surveyResults;

        //logic from angrbrd ===START====
       //https://github.com/angrbrd/friend-finder/blob/master/app/routing/apiRoutes.js 
        let matchName = "";
        let matchImage = "";
        let matchScore = 100;
        // loop through all existing friends
        for (var j = 0; j < friendsList.length; j++) {
            let scoreDiff = 0;
            //work out the differences between the results
            for (var i = 0; i < newFriendResults.length; i++) {
                scoreDiff += Math.abs(parseInt(friendsList[j].surveyResults[i])- 
                newFriendResults[i]);
            }
            if (scoreDiff < matchScore) {
                matchscore = scoreDiff;
                // console.log(matchName = friendsList[i].name)
                matchName = friendsList[i].name;
                matchImage = friendsList[i].image;
            }
        };
        // logic from angrbrd ===END====
        //add new friend input to the friendsList
        friendsList.push(newFriendInput);

        // send response message
        res.status(200).json({name: matchName, image: matchImage})
    });
};