import React,{useState} from "react";
import { NavLink } from "react-router-dom";
import cl from "./Header.module.css"


function Header() {
    return (
        <div >
            <Nav title={"menu"}/>
        </div>
    );
}

export default Header;
type NavType={
    title:string
}
function Nav(props:NavType){
    let[collaps, setCollaps]= useState<boolean>(true)
    return (
        <div className={cl.nav}>
            <NavTile titleValue={props.title} onClick={()=>{setCollaps(!collaps)}}/>
            {!collaps && <NavBody/>}
        </div>
       
    );
}
type NavTileType={
    titleValue :string
    onClick:()=>void
}
function NavTile(props:NavTileType){
    return(
    <h2 onClick={props.onClick}>{props.titleValue}</h2>
    )
}
function NavBody(){
    return(
        <ul >
            <li><NavLink to="/hw1">HW1</NavLink></li>
            <li><NavLink to="/HW2">HW2</NavLink></li>
            <li><NavLink to="/HW3">HW3</NavLink></li>
            <li><NavLink to="/HW4">HW4</NavLink></li>
            <li><NavLink to="/HW6">HW6</NavLink></li>
            <li><NavLink to="/HW7">HW7</NavLink></li>
            <li><NavLink to="/HW8">HW8</NavLink></li>
            <li><NavLink to="/HW9">HW9</NavLink></li>
            <li><NavLink to="/HW10">HW10</NavLink></li>
            <li><NavLink to="/HW11">HW11</NavLink></li>
            <li><NavLink to="/pre-junior">PreJunior(Home)</NavLink></li>
            <li><NavLink to="/PreJuniorPlus">PreJunior+</NavLink></li>
            <li><NavLink to="/PrePreJunior">Pre-PreJunior</NavLink></li>
        </ul>
    )
}
