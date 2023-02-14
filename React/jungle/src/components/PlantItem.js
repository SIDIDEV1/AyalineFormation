import CareScale from "./CareScale"

function PlantItem({ id, cover, name, water, light }) {
    return (
        <li key={id} className=''>
            <img className='' src={cover} alt={`${name} cover`} />
            {name}
            <div>
                <CareScale careType='water' scaleValue={water} />
                <CareScale careType='light' scaleValue={light} />
            </div>
        </li>
    )
}

export default PlantItem