//40
function makeAlbum (artist: string , title: string): {artist: string; title: string} {
    const dictionaries = {
        artist: artist.charAt(0) + artist.slice(0),
        title: title.charAt(0) + title.slice(0)
    };
    return dictionaries;
}


let album = makeAlbum("Map of the soul","BTS")
console.log(album)

album = makeAlbum("Jack in the box","J hope")
console.log(album)

album = makeAlbum("Indigo","RM")
console.log(album);