export const DELIVERYCOST = 180;

<<<<<<< HEAD
export const calculatePrice = (pizza = {}) => {
  const BASEPRICE = 200;
  const SIZEADDTOPRICE = 50;
  const TOPPINGADDTOPRICE = 39;
=======
export const calculatePrice = (pizza) => {
    const BASEPRICE = 200;
    const SIZEADDTOPRICE = 50;
    const TOPPINGADDTOPRICE = 39;
>>>>>>> parent of c263b14 (use prettier)

    let newPrice = BASEPRICE;
    Object.values(pizza).map(value => {
        value === "35" ? newPrice += SIZEADDTOPRICE : newPrice += TOPPINGADDTOPRICE
        if (value === "30") newPrice -= TOPPINGADDTOPRICE
        return 0
    })
    return newPrice
}
