import { useEffect, useState } from "react";
import logo from "../../media/rubber-duck2.png";
import { setCurrentSubreddit } from "../Reddit/redditSlice";
import { useDispatch } from "react-redux";
import "./subredditPrev.css";
const SubredditPrev = ( {subreddit} ) => {
    const dispatch = useDispatch();
    const [icon, setIcon] = useState(
        <img src={logo} />
        );

    useEffect(() => {
        if (subreddit.icon_img) {
            setIcon(<img src={subreddit.icon_img}/>)
            console.log(subreddit.icon_img);
        }
    }, [])

    const handleClick = () => {
        dispatch(setCurrentSubreddit(subreddit.display_name));
    }

    return (
        <button className="subreddit" onClick={handleClick}>
            {icon}
            <p>{subreddit.title}</p>
        </button>    
    );    
};
export default SubredditPrev;