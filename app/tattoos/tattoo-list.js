import Tattoo from './tattoo';
import tattoos from './tattoo.json'

const TattooList = () =>{
    return (
        <div className="mb-12 mt-12">
            <ul className="flex items-center justify-center">
                {tattoos.map((tattoo) =>(
                    <Tattoo
                        key={tattoo.id}
                        tattoo={tattoo.tattoo}
                        description={tattoo.description}
                    />
                ))}
            </ul>
        </div>
    )
}

export default TattooList;