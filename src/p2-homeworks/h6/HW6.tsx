import React, {useState} from "react";
import SuperEditableSpan from "./common/c4-SuperEditableSpan/SuperEditableSpan";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {restoreState, saveState} from "./localStorage/localStorage";

function HW6() {
    const [value, setValue] = useState<string>("");
    const[error,setError]=useState<string|null>(null)
    const save = () => {
        saveState<string>("editable-span-value", value);
    };
    const restore = () => {
        const result = restoreState<string>("editable-span-value",value)
        setValue(result);
        if(value.trim()){setValue(value)}
    };

    return (
        <div>
            <hr/>
            homeworks 6

            {/*should work (должно работать)*/}
            <div>
                <SuperEditableSpan
                    value={value}
                    onChangeText={setValue}
                    spanProps={{children: value ? undefined : "enter text..."}}
                    setError={setError}
                />
            </div>
            <SuperButton onClick={save}>save</SuperButton>
            <SuperButton onClick={restore}>restore</SuperButton>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperEditableSpan/>*/}
            <hr/>
        </div>
    );
}

export default HW6;
