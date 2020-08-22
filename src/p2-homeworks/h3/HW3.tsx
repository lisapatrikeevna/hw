import React, {useState} from "react";
import GreetingContainer from "./GreetingContainer";
import { v1 } from "uuid";

// types
export type UserType = {
    _id: string 
    name: string 
}

function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([]); 

    const addUserCallback = (name: string) => { 
        let newName:UserType = {name: name , _id: v1()}
        setUsers([newName, ...users]); 
    }

    return (
        <div>
            <hr/>
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
            <hr/>
        </div>
    );
}

export default HW3;
