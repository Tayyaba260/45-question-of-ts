//45

type car = {
    manufacture: string
    model: string
    [key: string]: any;
};

function createCar(manufacture: string, model: string, optional: Record<string, any>): car {
    return{
        manufacture,
        model,
        ...optional
    };
};

const myCar: car = createCar("Tesla","Model 3", {color : "silver" ,year: "2023"});
console.log(myCar);