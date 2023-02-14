import { useEffect, useState } from "react"

function Cart({ panier, updatePanier }) {
    const [isOpen, setIsOpen] = useState(false)
    const total = panier.reduce((acc, planteType) => (acc + planteType.amount * planteType.price), 0)

    useEffect(() => {
        document.title = `ayaline : ${total}`
    }, [total])

    return isOpen ? (<div>
        <h2 className="text-2xl font-bold underline mb-5">Panier</h2>
        <ul>
            {panier.map(({ name, price, amount }, index) =>
            (<div key={`${name}-${index}`}>
                {name} {price}€ x {amount}
            </div>))}
        </ul>
        <div className="mt-10">
            <h2>
                Total : {total}€
            </h2>
            <button onClick={() => updatePanier([])} className="bg-green-300 p-2 rounded-xl">Vider panier</button>
        </div>

    </div>)
        :
        (
            <div>
                <ul>
                    <button onClick={() => setIsOpen(true)} className="p-2 bg-red-300 rounded-xl text-white hover:bg-red-500">Afficher le panier</button>
                </ul>
            </div>
        )
}

export default Cart