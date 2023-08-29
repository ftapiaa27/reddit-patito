import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import "./postPrev.css";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setPostPermalink } from "../Post/postSlice";

const PostPrev = ({ post }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [postAge, setPostAge] = useState("");
  const [media, setMedia] = useState(<></>);
  useEffect(() => {
    const currentDate = new Date();
    const currentDateUTC =
      Date.UTC(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate()
      ) / 1000;
    const diffHrs = (currentDateUTC - post.created_utc) / (60 * 60) + 29;
    if (diffHrs < 24) {
      setPostAge(`${Math.floor(diffHrs)} hr. ago`);
    } else {
      setPostAge(`${Math.floor(diffHrs / 24)} days ago`);
    }
    // else if (post.secure_media) {
    //     setMedia(
    //         <video controls>
    //             <source src={post.secure_media.reddit_video.fallback_url}/>
    //         </video>
    //     );
    // }
    if (post.link_flair_css_class == "video") {
      setMedia(
        <video controls>
          <source src={post.media.reddit_video.fallback_url} />
        </video>
      );
    } // if (post.preview)
    else {
      setMedia(
        // <img src={post.preview.images[0].source.url}/>
        <img src={post.url_overridden_by_dest} />
      );
    }
    // else if(post.link_flair_css_class == "l-i") {
    //     setMedia(
    //         <img src={post.url_overridden_by_dest}/>
    //     );
    // }
  }, []);

  const handleClick = (e) => {
    // e.preventDefault();
    // alert(post.permalink);
    dispatch(setPostPermalink(post.permalink));
    navigate(`post/${post.id}`);
  };

  return (
    // <Link to={`post${post.permalink}`} className="postPrev" onClick={handleClick}>
    <a className="postPrev" onClick={handleClick}>
      <div className="author">
        <h3>u/{post.author}</h3>
        <p className="divider">-</p>
        <p>{postAge}</p>
      </div>
      <h2>{post.title}</h2>
      <div className="media">{media}</div>
      <div className="interactions">
        <p>upvotes: {post.ups}</p>
        <p>comments: {post.num_comments}</p>
      </div>
    </a>
    // </Link>
  );
};

export default PostPrev;
