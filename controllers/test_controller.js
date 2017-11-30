var express = require("express");

var router = express.Router();

// Import the model (.js) to use its database functions.
//var burger = require("../models/index.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    res.render('login');
});

router.get("/parent", function (req, res) {

    var children = [
        {
            "name": "test01",
            "nickname": "Bobbie",
            "avatar": "assets/images/childavatars/batman.jpg"
        },
        {
            "name": "test02",
            "nickname": "Johnny",
            "avatar": "assets/images/childavatars/spiderman.jpg"
        }];

    var rewardsAppr;

    var missionsAppr;
    console.log(children);

    res.render('parent', {layout: 'parent_layout', child: children, reward_approval: rewardsAppr, mission_approval: missionsAppr});
});

router.get("/child", function (req, res) {

    var missions_assigned = [
        {
            "mName": "sample1"
        },
        {
            "mName": "sample2"
        }];

    console.log(missions_assigned);

    res.render('child', {layout: 'child_layout', child: missions_assigned});
});

// Export routes for server.js to use.
module.exports = router;
