let places: string [] =["Karachi","Islamabad","Mecca","Tokyo","hunza"];

console.log(`\nORIGINAL: ` + places);

console.log(`\nALPHABETICAL ORDE OF ORIGINAL: ` +[...places].sort());
//4

console.log(`\nORIGINAL:` + places);
//5
console.log(`\nREVERSE ALPHABET:` +[...places].sort().reverse());
//6
console.log(`\nITS ORIGINAL:`+[...places].sort().reverse().reverse());
//7
console.log(`\nREVERSEAGAIN:` + places.sort());
//8
console.log(`\nREVERSE AGAIN:` + places.sort().reverse());
//9
console.log(`\nALPHABETICAL ORDER: ` + places.sort().reverse().reverse());
//10
console.log(`nREVERSE ALPHABET ORDER:`+ places.sort().reverse());