// creating a guest list Array
var guestlist = ["Tayyaba", "Armeen", "Talia", "Saniya"];
//guest who was not able to attened
var dontCome = guestlist[0];
// printing the name of guest who was not able to attened
console.log(dontCome, "will not able to come");
//add and remove values from list
guestlist.splice(0, 1, "Uswah");
//message print for biggger table
console.log("Good News ! we have found a bigger table for lunch.");
//adding new value at the start of array
guestlist.unshift("Neha");
//adding new value at the end of array
guestlist.push("munazza");
//making a variable for storing a middle index of our guest list array
var middleindex = Math.floor(guestlist.length / 2);
//adding new value at the middle of array
guestlist.splice(middleindex, 0, "Hussain");
console.log("Updated list of our Guests");
//sending a invitation message to our guests one by one with thier names
guestlist.forEach(function (oneguest) { return console.log("Assalamoalaikum ".concat(oneguest, ", would you like to have lunch with us")); });
