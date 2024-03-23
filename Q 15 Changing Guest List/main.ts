let guestlist = ["Tayyaba" ,"Armeen" , "Talia" ,"Saniya"];

let dontCome = guestlist[0];

console.log(dontCome, "will not able to come");

guestlist.splice(0, 1, "Uswah");

guestlist.forEach(guest => console.log(`Assalamoalaikum ${guest}, would you like to have lunch with us?`));