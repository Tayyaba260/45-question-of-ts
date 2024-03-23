//q 3
let PersonName:string="tayyaba"
//in lower cse
console.log("lowecase:", PersonName.toLowerCase());
//in uppercase
console.log("uppercase:", PersonName.toUpperCase());
//in tittle case
console.log("tittlecase:", PersonName.replace(/\b\w/g,c=> c.toUpperCase()));