const express = require('express');
const router = express.Router();
//const MongoDB = require("mongodb");




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'myProject in Project1A' });
});

const MongoDB = require("mongodb").MongoClient,
    dbURL = "mongodb://localhost:27017",
    dbName = "usersdb";
const collectionName = "contacts";
var test = require('assert');
var col;

var usersArray = [];  // define an empty array as a placeholder

MongoDB.connect(dbURL, {useUnifiedTopology: true, 
                        useNewUrlParser: true, 
                        useCreateIndex: true },  
                (error, client) => {   
    if (error) throw error;
    let db = client.db(dbName); 
    col = db.collection(collectionName, {safe:false, useUnifiedTechnology: true}, (err, r)=> {
        if (err) {
            console.log("Somethign is wrong in db.collection");
        }
    } );
   
    col.find()
        .toArray((error, userData) => {
            if (error) throw error;
            usersArray = userData; // store all users in the array users[]
            console.log(userData);
        });
    console.log(`All users: ${usersArray}`);
});
/*
var users = [
    {
        name: "John Wayne",
        gender: "male"
    },
    {
        name: "Mary Monro",
        gender: "female"
    },
    {
        name: "Charles Bronson",
        gender: "male"
    }
];
*/
router.showUsers = (req, res) => {
    
    res.render("users", {
        allUsers: usersArray, title: "Users Lists"
    });
};

router.addUsers = (req, res) => {

    console.log("in homeController addUser");

    var newUserName = req.body.name;
    console.log("name " + newUserName);
    // var newUserGender = req.body.gender;
    var new141 = req.body.g141;
    var new142 = req.body.g142;
    var new240  = req.body.g240;
    var new241 = req.body.g241;

    /*   Add your code for adding one user to the "users" */
    /*   collection in the usersdb database               */

    function average(new141,new142,new240,new241) {
        //return(a*1 + b*1 + c*1 + d*1) /4;
        var dumb =[];
        average = (new141*1 + new142*1 + new240*1 + new241*1) /4;
        }
        if(new141=='A')
        new141 = 4.0;
        if(new141=='A-')
            new141=3.7;
        if(new141=='B+')
            new141=3.3;
        if(new141=='B')
            new141=3.0;
        if(new141=='B-')
            new141=2.7;
        if(new141=='C+')
            new141=2.3;
        if(new141=='C')
            new141=2.0;
        if(new141=='C-')
            new141=1.7;
        if(new141=='D+')
            new141=1.3;
        if(new141=='D')
            new141=1.0;
        if(new141=='D-')
            new141=0.7;
        if(new141=='F')
            new141=0.0;
        //var b = document.getElementById("userInput2").value; 


        if(new142=='A')
        new142 = 4.0;
        if(new142=='A-')
            new142=3.7;
        if(new142=='B+')
            new142=3.3;
        if(new142=='B')
            new142=3.0;
        if(new142=='B-')
            new142=2.7;
        if(new142=='C+')
            new142=2.3;
        if(new142=='C')
            new142=2.0;
        if(new142=='C-')
            new142=1.7;
        if(new142=='D+')
            new142=1.3;
        if(new142=='D')
            new142=1.0;
        if(new142=='D-')
            new142=0.7;
        if(new142=='F')
            new142=0.0;
        //var c = document.getElementById("userInput3").value;


        if(new240=='A')
            new240 = 4.0;
        if(new240=='A-')
            new240=3.7;
        if(new240=='B+')
            new240=3.3;
        if(new240=='B')
            new240=3.0
        if(new240=='B-')
            new240=2.7
        if(new240=='C+')
            new240=2.3;
        if(new240=='C')
            new240=2.0;
        if(new240=='C-')
            new240=1.7;
        if(new240=='D+')
            new240=1.3;
        if(new240=='D')
            new240=1.0;
        if(new240=='D-')
            new240=0.7;
        if(new240=='F')
            new240=0.0;


        if(new241=='A')
            new241 = 4.0;
        if(new241=='A-')
            new241=3.7;
        if(new241=='B+')
            new241=3.3;
        if(new241=='B')
            new241=3.0;
        if(new241=='B-')
            new241=2.7;
        if(new241=='C+')
            new241=2.3;
        if(new241=='C')
            new241=2.0;
        if(new241=='C-')
            new241=1.7;
        if(new241=='D+')
            new241=1.3;
        if(new241=='D')
            new241=1.0;
        if(new241=='D-')
            new241=0.7;
        if(new241=='F')
            new241=0.0;		
        // // pass the numbers to the average function
        average(new141,new142,new240,new241);

        if(average >= 2.5)
        {
            col.insertOne({name: newUserName, average: average}, function(err, r) {
                test.equal(null, err);
                test.equal(1, r.insertedCount);
                col.find({}).toArray( (err, userData) => {
                        console.log("record found: ", userData);
                        usersArray = userData;
                });
                // Finish up test
                //db.close();
            });
            usersArray.push({name: newUserName, average: average});
        res.render("users", {
        allUsers: usersArray, title: "UsersLists"
        });
        }

        
        test.col.deleteOne({average:{$lte:new average(2.49)}})
        };

/*
router.showSignUp = (req, res) => {
    
    res.render("contactForm");
};
*/
router.postSignUpForm = (req, res) => {
    console.log("in homeController postSignUpForm method");
    res.render("contactForm", {title: "Contact Us"});
};

module.exports = router;
