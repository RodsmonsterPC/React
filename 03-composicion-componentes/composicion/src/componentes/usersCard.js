import Title from "./title"
import Body from "./body"
import Name from "./nameUser"
import Email from "./emailUser"
import Logo from "./logo"



const UserCard = (props) => {

    return (
        <div className="card">
            <Title text={props.post.title} />
            <Body text={props.post.body} />
            <Name text={props.user.name} />
            <Email text={props.user.email} />
            <Logo/>
            
        </div>
    )

}

export default UserCard