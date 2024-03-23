var guestlist = ["Tayyaba", "Armeen", "Talia", "Saniya"];
var dontCome = guestlist[0];
console.log(dontCome, "will not able to come");
guestlist.splice(0, 1, "Uswah");
guestlist.forEach(function (guest) { return console.log("Assalamoalaikum ".concat(guest, ", would you like to have lunch with us?")); });
