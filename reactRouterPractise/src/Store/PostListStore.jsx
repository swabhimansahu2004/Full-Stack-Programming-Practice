import { createContext,useState,useEffect,useReducer } from "react";

export const PostList=createContext({
    postList:[],
    addPost:()=>{},
    addMultiplePost:()=>{},
    deletePost:()=>{},
});
const PostListReducer=(currPostList,action)=>{
    let newPostList=currPostList;
    if(action.type==='DELETE_POST'){
        const updatedPostList=currPostList.filter((post)=>post.id!==action.payload.postId);
        newPostList=updatedPostList;
    }
    else if(action.type==='ADD_POST'){
        newPostList=[action.payload,...currPostList,];
    }
    else if(action.type==='ADD_MULTIPLE_POST'){
        newPostList=action.payload.posts;
    }
return newPostList;
};
const PostListProvider=({children})=>{
const [postList,dispatchPostList]=useReducer(PostListReducer,[]);

const addPost=(post)=>{
    dispatchPostList({type:'ADD_POST',payload:{id:Date.now(),
        title:post.title,
        body:post.body,
        reactions:post.reactions,
        userId:post.userId,
        tags:post.tags},});    
};

const addMultiplePost=(posts)=>{
    dispatchPostList({type:'ADD_MULTIPLE_POST',
    payload:{
    posts:posts,
    },});    
};

const deletePost=(postId)=>{
dispatchPostList({type:'DELETE_POST',payload:{postId},});
};

return (<PostList.Provider value={{postList,addPost,deletePost,addMultiplePost}}>
        {children}
    </PostList.Provider>);
};


export default PostListProvider;