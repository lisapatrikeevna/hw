import React, {useState} from "react";
import Affairs from "./Affairs";

export type AffairPriorityType = 'high'|'low'|'middle'; 
export type AffairType = {
    _id: number
    name: string
    priority:FilterType
}; 
export type FilterType = "all" | AffairPriorityType;

export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType):  Array<AffairType> => { 
    if (filter === "all") return affairs;
    if(filter === "low") return affairs.filter(el => el.priority === 'low');
    if(filter === 'high') return affairs.filter(el => el.priority ==='high');
    if(filter === 'middle') return affairs.filter(el => el.priority ==='middle');
     return affairs; 
}
export const deleteAffair = (affairs: Array<AffairType>, _id: number): Array<AffairType> => {   
    return affairs.filter(el=>el._id != _id)
}

function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>([ 
        {_id: 1, name: "React", priority: "high"},
        {_id: 2, name: "anime", priority: "low"},
        {_id: 3, name: "games", priority: "low"},
        {_id: 4, name: "work", priority: "high"},
        {_id: 5, name: "html & css", priority: "middle"},
    ]); 
    const [filter, setFilter] = useState<FilterType>("all");

    const filteredAffairs = filterAffairs(affairs, filter);
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id)); 
    return (
        <div>
            <hr/>

            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            <hr/>
        </div>
    );
}

export default HW2;
