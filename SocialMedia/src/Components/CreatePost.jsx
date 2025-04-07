import {useRef,useContext} from 'react';
import {PostList} from '../Store/PostListStore';
function CreatePost() {

  const {addPost}=useContext(PostList);

  const userId=useRef();
  const title=useRef();
  const body=useRef();
  const reactions=useRef();
  const tags=useRef();

  const handleSubmit=(event)=>{
    event.preventDefault();

    const post={
      userId:userId.current.value,
      title:title.current.value,
      body:body.current.value,
      reactions:reactions.current.value,
      tags:tags.current.value.split(' '),
    };

    addPost(post);
    
    userId.current.value='';
    title.current.value='';
    body.current.value='';
    reactions.current.value='';
    tags.current.value='';
  };
  return (
    <div>
      <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
    <label for="userId" className="form-label">UserName</label>
    <input type="text" ref={userId} className="form-control" id="userid" placeholder="UserName..." />
  </div>
  <div className="mb-3">
    <label for="title" className="form-label">Post Title</label>
    <input type="text" ref={title} className="form-control" id="title" placeholder="How are you feeling today..." />
  </div>
  <div className="mb-3">
    <label for="body" className="form-label">Post Body</label>
    <textarea className="form-control" id="body" ref={body} rows="5" placeholder="Tell us about yourself..."></textarea>
  </div>
  <div className="mb-3">
    <label for="reactions" className="form-label">Reactions</label>
    <input type="text" ref={reactions} className="form-control" id="reactions" placeholder="How many people will react.." />
  </div>
  <div className="mb-3">
    <label for="tags" className="form-label">Post Tags</label>
    <input type="text" ref={tags} className="form-control" id="tags" placeholder="Enter Tags with space for multiple..." />
  </div>
  <button type="submit" className="btn btn-success">Post</button>
</form>
    </div>
  );
}
export default CreatePost;