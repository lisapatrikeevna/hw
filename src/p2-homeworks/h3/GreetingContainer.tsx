import React, {useState, ChangeEvent} from "react";
import Greeting from "./Greeting";
import { UserType } from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType> 
    addUserCallback: (name: string)=>void
}
// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {
// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>(""); 
    const [error, setError] = useState<string|null>(null);

    const setNameCallback = (e:ChangeEvent<HTMLInputElement>) => { 
        let errorValue = e.currentTarget.value
        debugger
        if(error){setError('')}
        setName(e.currentTarget.value);
        // setName(e.currentTarget.value)
    };
    const addUser = () => {
        if(name.trim()) { 
            alert(`Hello ${name} !`)
            addUserCallback(name)
            setName('')
        } else { 
            setError('i dont see youre name:-( ');
        }
    };

    const totalUsers:number = users.length; 
    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    );
}

export default GreetingContainer;
