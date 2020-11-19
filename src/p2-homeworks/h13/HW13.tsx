import React, {useCallback, useEffect} from "react";
import Request from "./Request";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../Redux/store";
import {changeRequestAC, changeRequestTC} from "../../Redux/requestReduser";

function HW13() {
    const dicpatch = useDispatch();
    const checked = useSelector<AppStoreType, boolean>(state => state.hw13.success);
    const answer = useSelector<AppStoreType, Array<string>>(state => state.hw13.message);
    const setChecked = useCallback((succes: boolean) => {
        // debugger
        dicpatch(changeRequestAC(succes))
    }, [dicpatch])
    const onChangeChecked = () => {dicpatch(changeRequestTC(checked))}

    return (
        // <h1/>
        <div>
            <hr/>
            <span>
                homeworks 13
            </span>
            <Request checked={checked} setChecked={setChecked} onChangeChecked={onChangeChecked} answer={answer}/>
            <hr/>
        </div>
    );
}

export default HW13;
