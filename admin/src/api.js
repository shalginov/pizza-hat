export const getToppings = () => { }

export const addTopping = (newTopping) => {
    return fetch("http://localhost:8080/v1/ingredient",
        {
            method: "POST",
            body: {
                ...newTopping
            }
        })
        .then(response => response.json())
}