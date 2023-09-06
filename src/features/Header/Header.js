import { useSelector, useDispatch } from "react-redux";
import { setSearchTerm } from "../Reddit/redditSlice";
import { useState } from "react";
import logo from "../../media/rubber-duck2.png";
import search from "../../media/search2.png";
import "./header.css";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
const Header = () => {
    const dispatch = useDispatch();
    const [searchTrm, setSearchTrm] = useState("");

    const handleTextChange = (e) => {
        setSearchTrm(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(searchTrm);
        dispatch(setSearchTerm(searchTrm));
        setSearchTrm("");
    };

    return (
        <>
            <header>
                <Link to={"/"} className="logo">
                    <img src={logo} alt="logo" />
                    <p>reddit patito</p>
                </Link>
                <form onSubmit={handleSubmit}>
                    <button type="submit">
                        <img src={search} />
                    </button>
                    <input
                        type="text"
                        placeholder="Search reddit"
                        onChange={handleTextChange}
                        value={searchTrm}
                    ></input>
                </form>
            </header>
            <Outlet />
        </>
    );
};

export default Header;
