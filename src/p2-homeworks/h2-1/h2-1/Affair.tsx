import React from "react";
import { AffairType } from "../../h2/HW2";

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id:number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)};

    return (
        <div>
            // show some text
            <p>{name}</p>
            <button onClick={deleteCallback}>X</button>
        </div>
    );
}

export default Affair;
