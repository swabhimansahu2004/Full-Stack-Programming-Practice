import Post from "./Post";
import { useContext,useEffect,useState } from "react";
import { PostList as Datas } from "../Store/PostListStore";
import WelcomeMessage from "./WelcomeMessage";
import Loading from "./Loading";
const PostList =()=>{
const  {postList,addMultiplePost}=useContext(Datas);
const  [fetching,setfetching]=useState(false);
useEffect(()=>{
    setfetching(true);
    const abortCont=new AbortController();
    const signal=abortCont.signal;
    fetch('https://dummyjson.com/posts',{signal})
    .then(res => res.json())
    .then((data)=>{addMultiplePost(data.posts);
        setfetching(false);
    });

    return ()=>{
        abortCont.abort();//Clean Up by aborting
    }
    },[]);//here useEffect will be called only on first renderring.
return (<>
{fetching &&  <Loading></Loading>}
{/* {!fetching && postList.length===0 && <WelcomeMessage></WelcomeMessage>} */}
{!fetching &&  postList.map((post)=>(<Post key={post.id} post={post}/>))}
</>);
};
export default PostList;