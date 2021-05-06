import {useState} from 'react';

const Car = () => {

    const [brand, setBrand] = useState('Audi');
    const [model, setModel] = useState('a1');

    return (
        <> 
            <p>The car is {brand} and {model}</p>

            <form>
                <label>
                    Model:
                </label>
                <input name="model"
                type="text"
                value={model}
                onChange={e => setModel(e.target.value)}></input>

<label>
                Brand:
                </label>
                <input name="brand"
                type="text"
                value={brand}
                onChange={e => setBrand(e.target.value)}></input>
            </form>
        </>
    )

}

export default Car;