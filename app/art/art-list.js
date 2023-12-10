import Art from "./art";
import artData from "./art.json"

const ArtList = () =>{

    return(
        <div className="m-12">
            <ul className="grid grid-cols-2">
                {artData.map((art) =>(
                    <Art
                        key={art.id}
                        art={art.art}
                        description={art.description}
                    />
                ))}
            </ul>
        </div>
    )
}

export default ArtList;