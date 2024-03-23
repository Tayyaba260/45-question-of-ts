function makeAlbum (artist:string, tittle: string): { artist: string; tittle: string} {
    const dictionaries = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        tittle: tittle.charAt(0).toUpperCase() + tittle.slice(1),
    };
    return dictionaries;
}

let album = makeAlbum("Tayyaba" , "fitoor")
console.log(album)

album = makeAlbum("Talia" , "Husn")
console.log(album)

album = makeAlbum("Armeen" , "light")
console.log(album)