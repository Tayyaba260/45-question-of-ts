function sandwich(...items: string[]): void {
    console.log("Sandwich order") 

    for (let i = 0; i < items.length; i++) {
        console.log(`-${items[i]}`)
    }
} 
console.log("enjoy your sandwich Tayyaba")

sandwich('Tandoori chicken', 'cheese', 'garlic Mayo')
sandwich('beef', 'cheese', 'capsicun')
sandwich('chicken', "thausan island", 'onion')
