import Title from "./title"
import Body from "./body"


const UserCard = (props) => {

    return (
        <div className="card">
            <Title text={props.post.title} />
            <Body text={props.post.body} />
            
        </div>
    )

}

export default UserCard