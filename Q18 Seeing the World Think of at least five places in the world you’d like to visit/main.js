var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var places = ["Karachi", "Islamabad", "Mecca", "Tokyo", "hunza"];
console.log("\nORIGINAL: " + places);
console.log("\nALPHABETICAL ORDE OF ORIGINAL: " + __spreadArray([], places, true).sort());
//4
console.log("\nORIGINAL:" + places);
//5
console.log("\nREVERSE ALPHABET:" + __spreadArray([], places, true).sort().reverse());
//6
console.log("\nITS ORIGINAL:" + __spreadArray([], places, true).sort().reverse().reverse());
//7
console.log("\nREVERSEAGAIN:" + places.sort());
//8
console.log("\nREVERSE AGAIN:" + places.sort().reverse());
//9
console.log("\nALPHABETICAL ORDER: " + places.sort().reverse().reverse());
//10
console.log("nREVERSE ALPHABET ORDER:" + places.sort().reverse());
