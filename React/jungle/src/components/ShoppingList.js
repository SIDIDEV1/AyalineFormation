import { plantList } from '../data/plantList'
import CareScale from './CareScale'

function ShoppingList() {

    function handleClick(e) {
        console.log(e)
    }

    return (
        <div>
            <ul>
                {plantList.map((plant, index) => (
                    <div className='flex' key={index}>
                        <li onClick={handleClick} className={`my-2 p-3 rounded-xl cursor-pointer ${plant.isBestSale ? 'bg-red-300' : ''} `} key={index}>{index + 1} - {plant.name} {plant.isBestSale ? <span>🔥</span> : ''}</li>
                        <CareScale data={plant.light} />
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default ShoppingList