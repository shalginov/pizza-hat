export const ShowOneTopping = ({ id, name, slug, price, category, image, thumbnail }) => {
    return <fieldset>
        <legend>{name}</legend>
        <table>
            <tr>
                <th>id</th>
                <th>name</th>
                <th>slug</th>
                <th>price</th>
                <th>category</th>
                <th>thumbnail</th>
                <th>image</th>
            </tr>
            <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{slug}</td>
                <td>{price}</td>
                <td>{category}</td>
                <td><img src={`http://localhost:8080/${thumbnail}`} alt="thumbnail" /></td>
                <td><img src={`http://localhost:8080/${image}`} alt="image" /></td>
            </tr>
        </table>
    </fieldset>
}