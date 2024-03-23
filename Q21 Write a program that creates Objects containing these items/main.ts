//21
interface item {
    itemName: string
    price: number
};

const book ={
itemName: "essential typescript: by Adam Freeman.",
    price: 1500
};

const pen ={
    itemName: "black pen",
    price: 30
};

console.log(`\nBook Name: ${book.itemName},\n Price: Rs ${book.price}`);
console.log(`Pen Name: ${pen.itemName},\n Price: Rs ${pen.price}`);
