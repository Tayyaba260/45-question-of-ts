//q 3
var PersonName = "tayyaba";
//in lower cse
console.log("lowecase:", PersonName.toLowerCase());
//in uppercase
console.log("uppercase:", PersonName.toUpperCase());
//in tittle case
console.log("tittlecase:", PersonName.replace(/\b\w/g, function (c) { return c.toUpperCase(); }));
