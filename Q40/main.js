function makeAlbum(artist, tittle) {
    var dictionaries = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        tittle: tittle.charAt(0).toUpperCase() + tittle.slice(1),
    };
    return dictionaries;
}
var album = makeAlbum("Tayyaba", "fitoor");
console.log(album);
album = makeAlbum("Talia", "Husn");
console.log(album);
album = makeAlbum("Armeen", "light");
console.log(album);
