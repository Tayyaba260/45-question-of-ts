// EXERCISE 41
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
    ;
}
;
var magicians = ["Aladin", "Spider man", "Danial", "harry potter"];
show_magicians(magicians);
// EXERCISE 42
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the great";
    }
    ;
}
;
var magicians2 = ["harry potter", "hermoine", "dante", "azura"];
make_great(magicians2);
show_magicians(magicians2);
// EXERCISE 43
function make_great2(magicians) {
    var greatMagicians = [];
    for (var i = 0; i < magicians.length; i++) {
        greatMagicians.push(magicians[i] + " the Great");
    }
    return greatMagicians;
    var magicians3 = ["harry potter", "hermoine", "dante", "azura"];
    var greatMagicians2 = make_great2(magicians3);
    show_magicians(magicians3);
    show_magicians(greatMagicians2);
}
;
