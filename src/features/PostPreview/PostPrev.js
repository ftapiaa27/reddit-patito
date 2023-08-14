import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import "./postPrev.css";
import { useEffect } from "react";
const PostPrev = ( {post} ) => {
    const [postAge, setPostAge] = useState("");
    const [media, setMedia] = useState(<></>);
    useEffect(() => {
        const currentDate = new Date();
        const currentDateUTC = Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate())/1000;
        const diffHrs = (currentDateUTC - post.created_utc)/(60*60) + 7;
        if (diffHrs < 24) {
            setPostAge(`${Math.floor(diffHrs)} hr. ago`)
        } else {
            setPostAge(`${Math.floor(diffHrs / 24)} days ago`)
        }

        if(post.link_flair_css_class == "l-i") {
            setMedia(
                <img src={post.url_overridden_by_dest}/>
            );
        } else if (post.link_flair_css_class == "video") {
            setMedia(
                <video controls>
                    <source src={post.media.reddit_video.fallback_url}/>
                </video>
            );
        }
    });

    return (
        <a className="postPrev">
            <div className="author">
                <h3>u/{post.author}</h3>
                <p className="divider">-</p>
                <p>{postAge}</p>
            </div>
            <h2>{post.title}</h2>
            <div className="media">
                {media}
            </div>
            <div className="interactions">
                <p>upvotes: {post.ups}</p>
                <p>comments: {post.num_comments}</p>
            </div>
        </a>
    );
}

export default PostPrev;