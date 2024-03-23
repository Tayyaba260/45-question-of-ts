function sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich order");
    for (var i = 0; i < items.length; i++) {
        console.log("-".concat(items[i]));
    }
}
console.log("enjoy your sandwich Tayyaba");
sandwich('Tandoori chicken', 'cheese', 'garlic Mayo');
sandwich('beef', 'cheese', 'capsicun');
sandwich('chicken', "thausan island", 'onion');
