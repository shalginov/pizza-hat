export const calculatePrice = (pizza) => {
    const BASEPRICE = 200;
    const SIZEADDTOPRICE = 50;
    const TOPPINGADDTOPRICE = 39;

    let newPrice = BASEPRICE;
    Object.values(pizza).map(value => {
        value === "35" ? newPrice += SIZEADDTOPRICE : newPrice += TOPPINGADDTOPRICE
        if (value === "30") newPrice -= TOPPINGADDTOPRICE
        return 0
    })
    return newPrice
}
