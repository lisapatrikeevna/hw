import React, {useState} from "react";
import {checkACT, homeWorkReducer, sortOnNameDownAC, sortOnNameUpAC} from "./bll/homeWorkReducer";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
export type initialPeopleType={
    _id:number
    name:string
    age:number
}
export const initialPeople:Array<initialPeopleType> = [
    {_id: 0, name: "Кот", age: 3},
    {_id: 1, name: "Александр", age: 66},
    {_id: 2, name: "Коля", age: 16},
    {_id: 3, name: "Виктор", age: 44},
    {_id: 4, name: "Дмитрий", age: 40},
    {_id: 5, name: "Ирина", age: 55},
]


function HW8() {
    const [people, setPeople] = useState(initialPeople);

    const finalPeople = people.map(p => (
        <div key={p._id}>
            {p.name}
            {p.age}
            {/*some name, age*/}
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, sortOnNameUpAC()))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, sortOnNameDownAC()))
    const sortAge = () => setPeople(homeWorkReducer(initialPeople, checkACT()))

    return (
        <div>
            <hr/>
            homeworks 8

            {/*should work (должно работать)*/}

            {finalPeople}
            <div><SuperButton onClick={sortUp}>sort up</SuperButton></div>
            <div><SuperButton onClick={sortDown}>sort down</SuperButton></div>
            <div><SuperButton onClick={sortAge}>sort age</SuperButton></div>


            check 18

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    );
}

export default HW8;
