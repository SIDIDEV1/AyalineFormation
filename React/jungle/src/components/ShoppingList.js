import { plantList } from '../data/plantList'
import CareScale from './CareScale'

function ShoppingList({ panier, updatePanier }) {

    const addToPanier = (name, price) => {
        const currentData = panier.find((plant) => plant.name === name)

        if (currentData) {
            const currentDataInArray = panier.filter(plant => plant.name !== name)

            updatePanier([...currentDataInArray, { name, price, amount: currentData.amount + 1 }])
        } else {
            updatePanier([...panier, { name, price, amount: 1 }])
        }
    }

    return (
        <div>
            <ul>
                {plantList.map((plant, index) => (
                    <div className='flex justify-between' key={index}>
                        <li className={`my-2 p-3 rounded-xl ${plant.price < 50 ? 'bg-red-300' : 'bg-green-500'} `} key={index}>{index + 1} - {plant.name} {plant.price ? <span>{plant.price}€</span> : 0}</li>
                        <button onClick={() => addToPanier(plant.name, plant.price)} className="my-2 p-2 bg-red-300 rounded-xl text-white hover:bg-red-500">Ajouter au panier</button>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default ShoppingList