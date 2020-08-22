import React, { ChangeEvent } from "react";
import s from "./Greeting.module.css";

type GreetingPropsType = {
    name: string 
    setNameCallback: (e: ChangeEvent<HTMLInputElement>)=>void  
    addUser: ()=>void 
    error: string | null 
    totalUsers: number
}

const Greeting: React.FC<GreetingPropsType> = (  {name, setNameCallback, addUser, error, totalUsers} ) => {
    // const inputClass = name? s.someClass : s.error; 
    const inputClass = error? s.error : s.someClass; 
   
    return (
        <div>
            <span>{error}</span>
            <div>
            <input value={name} onChange={setNameCallback} className={inputClass}/>
            <button onClick={addUser}>add</button>
            </div>
            <span>count users: {totalUsers}</span>
        </div>
    );
}

export default Greeting;
