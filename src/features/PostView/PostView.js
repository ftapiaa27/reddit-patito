import { useEffect, useState } from "react";
import "./postView.css";
const PostView = ({ post }) => {
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
    if (post.link_flair_css_class == "video") {
      setMedia(
        <video controls>
          <source src={post.media.reddit_video.fallback_url} />
        </video>
      );
    } // if (post.preview)
    else {
      setMedia(<img src={post.url_overridden_by_dest} />);
    }
  }, []);

  return (
    <div className="postView">
      <div className="source">
        <h3>{post.subreddit}</h3>
        <p className="divider">-</p>
        <p>{postAge}</p>
      </div>
      <h4 className="author">by u/{post.author}</h4>

      <h2>{post.title}</h2>
      <div className="media">{media}</div>
    </div>
  );
};

export default PostView;
