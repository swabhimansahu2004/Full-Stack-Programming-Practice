import Post from "./Post";
import { useContext,useEffect,useState } from "react";
// import { PostList as Datas } from "../Store/PostListStore";
import WelcomeMessage from "./WelcomeMessage";
import Loading from "./Loading";
import { useLoaderData } from "react-router-dom";
const PostList =()=>{
    const postList = useLoaderData();

return (<>
{/* {<Loading></Loading>} */}
{postList.length===0 && <WelcomeMessage></WelcomeMessage>}
{postList.map((post)=>(<Post key={post.id} post={post}/>))}
</>);
};
export const PostLoader = async () => {
    const response = await fetch('https://dummyjson.com/posts');
    const data = await response.json();
    return data.posts; 
};
export default PostList;