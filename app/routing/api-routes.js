var friendsList = require("../data/friend");

module.exports = function(app) {
    //display a JSON of all possible friends.
    app.get("/api/friends", function(req, res) {
        res.json(friendsList);
    });
    app.post("/api/friends", function(req, res) {
        //push the newFriend into the friendsList
        friendsList.push(req.body);
        //grab the results
        let newFriend = req.body.surveyResults;
        console.log(newFriend);
        //create a new array to store the string numeric results
        let scoreArray = [];
        let friendCount = 0;
        let bestMatch = 0;
        // iterate over the length of the friends list
        for (var j = 0; j < friendsList.length; j++) {
            let scoreDiff = 0;
            // then iterate over the surveyResults to compare
            for (var i = 0; i < newFriend.length; i++) {
                scoreDiff += (Math.abs(parseInt(friendsList[j].surveyResults[i])- 
                parseInt(newFriend[i])
                ));
                scoreArray.push(scoreDiff);
            }
            //find the best match

        };
    })
};