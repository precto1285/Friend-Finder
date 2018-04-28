// You should save your application's data inside of app/data/friends.js 
// as an array of objects. Each of these objects should roughly follow the format below.

// {
//     "name":"Ahmed",
//     "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
//     "scores":[
//         5,
//         1,
//         4,
//         4,
//         5,
//         1,
//         2,
//         5,
//         4,
//         1
//       ]
//   }

// Determine the user's most compatible friend using the following as a guide:

// Convert each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
// With that done, compare the difference between current user's scores against those from other users, 
// question by question. Add up the differences to calculate the totalDifference.
// // Example:
// // User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
// // User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]
// // Total Difference: 2 + 1 + 2 = 5
// // Remember to use the absolute value of the differences. Put another way: no negative solutions!  
// Your app should calculate both 5-3 and 3-5 as 2, and so on.
// // The closest match will be the user with the least amount of difference.


var user1='';
var user2='';


var friendsArray = [
{
    name : "Booger",
    photo : "images/booger.jpg",
    scores : [1,2,3,4,5,1,2,3,4,5]
},
{
    name:"Shiner",
    photo:"images/shine.jpg",
    scores:[2,3,4,5,1,2,3,4,5,1]
},
{
    name:"Cassy",
    photo:"images/cassy.jpg",
    scores:[3,4,5,1,2,3,4,5,1,2]
},
{
    name:"Snape",
    photo:"images/snapes.jpg",
    scores:[4,5,1,2,3,4,5,1,2,3]
},
{
    name:"Clarice",
    photo:"images/clarice.jpg",
    scores:[5,1,2,3,4,5,1,2,3,4]
},
{
    name:"Stark",
    photo:"images/stark.jpg",
    scores:[5,4,3,2,1,5,4,3,2,1]
},
{
    name:"Hal",
    photo:"images/hal.jpg",
    scores:[4,3,2,1,5,4,3,2,1,5]
},
{
    name:"Chloe",
    photo:"images/chloe.jpg",
    scores:[3,2,1,5,4,3,2,1,5,4]
},
{
    name:"Charles",
    photo:"images/charles.jpg",
    scores:[2,1,5,4,3,2,1,5,4,3]
},
{
    name:"Dingo",
    photo:"images/dingo.jpg",
    scores:[1,5,4,3,2,1,5,4,3,2]
}];


module.exports = friendsArray;