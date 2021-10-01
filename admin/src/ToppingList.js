import { useState, useEffect } from "react"
import { ShowOneTopping } from "./ShowOneTopping"

export const ToppingList = () => {
    const [list, setList] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch("http://localhost:8080/v1/ingredients")
            .then(response => response.json())
            .then(data => {
                console.log("data", data)
                setList(data)
                setIsLoading(false)
            })
            .catch(error => setError(error))
    }, [])

    if (error) {
        return <>
            Oops! something went wrong! {error.message}
        </>
    }

    if (isLoading) {
        return <>
            Loading spinner...
        </>
    }

    return <>
        <ol>
            {list.map(item => {
                return <li id={item.id}><ShowOneTopping {...item} /></li>
            })}
        </ol>
    </>
}