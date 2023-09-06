
import { useState, useEffect } from "react";

const Comment = ({comment}) => {
    const [postAge, setPostAge] = useState("");
    useEffect(() => {
        const currentDate = new Date();
        const currentDateUTC =
          Date.UTC(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            currentDate.getDate()
          ) / 1000;
        const diffHrs = (currentDateUTC - comment.created_utc) / (60 * 60) + 29;
        if (diffHrs < 24) {
          setPostAge(`${Math.floor(diffHrs)} hr. ago`);
        } else {
          setPostAge(`${Math.floor(diffHrs / 24)} days ago`);
        }
      }, []);
    return (
        <div className="comment">
            <h4>{comment.author}</h4>
            <p>{postAge}</p>
            <p>{comment.body}</p>
        </div>
    )
}

export default Comment;