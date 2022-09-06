
import { results } from "./data/CardRick"

import CardInfo from "./CardInfo"

const PostList = () => {
    return (
        <div>
            <h1>The Rick and Morty API</h1>
            <div>
            {results.map((info)=>{
                return(
                    <CardInfo 
                    key={info.id} 
                    name={info.name}
                    status={info.status}
                    species={info.species}
                    origin={info.origin.name}
                    location={info.location.name}
                    image={info.image}
                    />

                )
            })}
            </div>
        </div>
    )
}

export default PostList