
import UserCard from "./usersCard"
// import users from "../data/user"
import post from "../data/post"

const App = () => {
    return (

        <div className="container">
           {post.map((post)=>  <UserCard key={post} post={post} />)} 
           
        </div>
    )
}

export default App