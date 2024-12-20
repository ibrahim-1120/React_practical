
import { useContext, useEffect, useState } from "react"
import Post from "./Post"
import { PostListcontext } from "../store/postList-store"
import WelcomeMessage from "./WelcomeMessage"
import Loading from "./Loading"
const ListPost = () => {

    const { postlist, initPost } = useContext(PostListcontext)
    const [loading, setloading] = useState(false)
    useEffect(() => {
        setloading(true)
        fetch("https://dummyjson.com/posts").then(result => {
            return result.json()
        }).then(data => {
            initPost(data.posts);
            setloading(false)
        })

    }, [])



    return <>
        {loading && <Loading></Loading>}
        {!loading && postlist.length === 0 && <WelcomeMessage ></WelcomeMessage>}
        {!loading && postlist.map((posts) => <Post key={posts.id} posts={posts}></Post>)}
    </>
}

export default ListPost
