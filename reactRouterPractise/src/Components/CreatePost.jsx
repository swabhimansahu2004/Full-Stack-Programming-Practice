import {useRef,useContext} from 'react';
import {PostList} from '../Store/PostListStore';
import { useNavigate } from 'react-router-dom';
import { Form,redirect } from 'react-router-dom';

function CreatePost() {

  // const {addPost}=useContext(PostList);
  // const navigate=useNavigate();
  // const userId=useRef();
  // const title=useRef();
  // const body=useRef();
  // const reactions=useRef();s
  // const tags=useRef();

  // const handleSubmit=(event)=>{
  //   event.preventDefault();
  //   const post={
  //     userId:userId.current.value,
  //     title:title.current.value,
  //     body:body.current.value,
  //     reactions:reactions.current.value,
  //     tags:tags.current.value.split(' '),
  //   };
    
    
      // userId.current.value='';
      // title.current.value='';
      // body.current.value='';
      // reactions.current.value='';
      // tags.current.value='';
//in case we use form , we will use ref instead of name and all the above commented code with the fetch part.
  return (
    <div>
      <Form method="POST" className="create-post" > 
      <div className="mb-3">
    <label htmlFor="userId" className="form-label">UserName</label>
    <input type="text" name="userId" className="form-control" id="userid" placeholder="UserName..." />
  </div>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Post Title</label>
    <input type="text" name="title" className="form-control" id="title" placeholder="How are you feeling today..." />
  </div>
  <div className="mb-3">
    <label htmlFor="body" className="form-label">Post Body</label>
    <textarea className="form-control" id="body" name="body" rows="5" placeholder="Tell us about yourself..."></textarea>
  </div>
  <div className="mb-3">
    <label htmlFor="reactions" className="form-label">Reactions</label>
    <input type="text" name="reactions" className="form-control" id="reactions" placeholder="How many people will react.." />
  </div>
  <div className="mb-3">
    <label htmlFor="tags" className="form-label">Post Tags</label>
    <input type="text" name="tags" className="form-control" id="tags" placeholder="Enter Tags with space for multiple..." />
  </div>
  <button type="submit" className="btn btn-success">Post</button>
</Form>
    </div>
  );
};

export async function createPostAction(data) {
  const formData=await data.request.formData();
  const postData=Object.fromEntries(formData);
  postData.tags=postData.tags.split(" ");
  fetch('https://dummyjson.com/posts/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(postData),
  })
  .then(res => res.json())
  .then(post => {
    console.log(post);
  });
  return redirect("/");
};

export default CreatePost;