let food = {
    chicken : 'bburingkle',
    detail : {
        company : 'BHC',
        taste : 'not spicy',
        price : '19000'
    }
}

const recursiveFunction = (objData) => {
    for(let key in objData){
        console.log(objData[key]);

    }
}

recursiveFunction(food)