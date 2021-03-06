export const DELIVERYCOST = 180;

export const calculatePrice = (pizza = {}) => {
    const BASEPRICE = 200;
    const SIZEADDTOPRICE = 50;
    const TOPPINGADDTOPRICE = 39;

    let newPrice = BASEPRICE;
    Object.values(pizza).map(value => {
        if (value) {
            value === "35" ? newPrice += SIZEADDTOPRICE : newPrice += TOPPINGADDTOPRICE
            if (value === "30") newPrice -= TOPPINGADDTOPRICE
        }
        return 0
    })
    return newPrice
}

export const makePizzaObject = (ingredientsNamesArray = [], ingredientsValuesArray = []) => {
    let pizzaObject = {}
    ingredientsNamesArray.forEach((nameIngredient, index) => {
        pizzaObject[nameIngredient] = ingredientsValuesArray[index]
        return 0
    });
    return pizzaObject
}
