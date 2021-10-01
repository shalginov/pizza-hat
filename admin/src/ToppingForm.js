
export const ToppingForm = () => {
    return <form>
        <label>name:
            <input name="name" placeholder="name" />
        </label>
        <br />
        <label>slug:
            <input name="slug" placeholder="slug" />
        </label>
        <br />
        <label>price:
            <input name="price" placeholder="price" />
        </label>
        <br />
        <labe>category:
            <select name="category">
                <option value="vegetables">vegetables</option>
                <option value="sause">sause</option>
                <option value="meat">meat</option>
                <option value="cheese">cheese</option>
            </select>
        </labe>
        <br />
        <label>image:
            <input name="image" placeholder="image" type="file" />
        </label>
        <br />
        <label>thumbnail:
            <input name="thumbnail" placeholder="thumbnail" type="file" />
        </label>
        <br />
        <button>submit</button>
    </form>
}