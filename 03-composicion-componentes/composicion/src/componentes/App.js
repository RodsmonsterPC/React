
import UserCard from "./usersCard"
import users from "../data/user"
import post from "../data/post"

const App = () => {
    return (

        <div className="container">
            {post.map((post) => {
                const user = users.find((user) => post.userId === user.id)
                return <UserCard key={post.id} post={post}
                    user={user} />
            })}

        </div>
    )
}

export default App