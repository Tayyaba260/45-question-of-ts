function makeShirt(size: string = 'large', text: string = 'I love typescript'): void {

    console.log(`you have order a ${size}, shirt that says ${text}`)
}

makeShirt();
makeShirt('medium')

//diffferent message
makeShirt('small', 'I need a big shirt to wear')