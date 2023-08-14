import { useSelector, useDispatch } from "react-redux";
import { setSearchTerm } from "../Reddit/redditSlice";
import { useState } from "react";
import logo from "../../media/rubber-duck2.png";
import search from "../../media/search2.png";
import "./header.css";

const Header = () => {
    const dispatch = useDispatch();
    const [searchTrm, setSearchTrm] = useState("");

    const handleTextChange = e => {
        setSearchTrm(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        alert(searchTrm);
        // dispatch(setSearchTerm(searchTrm));
        setSearchTrm("");
    }

    return (
        <header>
            <div className="logo">
                <img src={logo} alt="logo"/>
                <p>reddit patito</p>
            </div>
            <form onSubmit={handleSubmit}>
                <button type="submit"><img src={search}/></button>
                <input type="text" placeholder="Search reddit" onChange={handleTextChange} value={searchTrm}></input>
            </form>
        </header>
    );
}

export default Header;