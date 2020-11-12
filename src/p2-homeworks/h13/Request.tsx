import React from "react";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";

type propsType = {
    checked: boolean
    setChecked: (succes: boolean) => void
    onChangeChecked: () => void
    answer:any
}

function Request(props: propsType) {

    const onChangeChecked = () => {props.onChangeChecked()}

    return (
        <div>
            <button onClick={onChangeChecked}>btn</button>
            <SuperCheckbox
                checked={props.checked}
                onChangeChecked={props.setChecked}/>
                <p>{props.answer}</p>
        </div>
    )
}

export default Request;
