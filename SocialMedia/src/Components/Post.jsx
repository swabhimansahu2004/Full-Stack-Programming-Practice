import { MdOutlineDeleteOutline } from "react-icons/md";
import { useContext } from "react";
import { PostList } from "../Store/PostListStore";
const Post =({post})=>{
  const {deletePost}=useContext(PostList);

  const totalReactions = post.reactions.likes + post.reactions.dislikes;

    return (
    <div className="card post-card" style={{width: "18rem"}}>
  <div className="card-body">
    <h5 className="card-title">{post.title}
    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark" onClick={()=>deletePost(post.id)}>
    <MdOutlineDeleteOutline /></span>
    </h5>
    <p className="card-text">{post.body}</p>
    {post.tags.map((tag)=>{
      return <span key={tag} className="badge text-bg-primary hashtag">{tag}</span>
    })}
    <div className="reaction-container">
    <button type="button" className="btn btn-outline-dark">
  Reactions <span className="badge text-bg-secondary">{totalReactions}</span>
</button>
</div>
  </div>
</div>
    );
};
export default Post;