import { useSelector, useDispatch } from "react-redux";
import { setSearchTerm } from "../Reddit/redditSlice";
import { useState } from "react";

const Header = () => {
    const dispatch = useDispatch():
    const [searchTrm, setSearchTrm] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(setSearchTerm(searchTrm));
        setSearchTrm("");
    }

    return (
        <Header>
            <img src="/public/rubber-duck2.png" alt="logo"></img>
            <input></input>
        </Header>
    );
}