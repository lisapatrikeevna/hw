import React, {ChangeEvent, useState} from "react";
import SuperInputText from "./common/c1-SuperInputText/SuperInputText";
import s from "./HW4.module.css";
import SuperButton from "./common/c2-SuperButton/SuperButton";
import SuperCheckbox from "./common/c3-SuperCheckbox/SuperCheckbox";

function HW4() {
    const [text, setText] = useState<string>("");
    const[error,setError]=useState<string>("");
    const showAlert = () => {
        text ? setError('') : setError("error")
        if (error) {
            alert("введите текст...");
            
        } else {
            alert(text); 
            setText('')
        }
    }
    //как не создавая setError с useState cделать error-false
    // const error = text ? "" : "error";
    const [checked, setChecked] = useState<boolean>(false);
    const testOnChange = (e: ChangeEvent<HTMLInputElement>) => setChecked(e.currentTarget.checked);
    let red = false;
    if(error){red = true}
    return (
        <div>
            <hr/>
            homeworks 4

            <div className={s.column}>
                <SuperInputText
                    value={text}
                    onChangeText={setText}
                    onEnter={showAlert}
                    error={error}
                    setError={setError}
                    // className={s.blue} // проверьте, рабоет ли смешивание классов
                />

                {/*should work (должно работать)*/}
                <SuperButton
                    red = {red} // пропсу с булевым значением не обязательно указывать true
                    onClick={showAlert}
                >
                    delete {/*// название кнопки попадёт в children*/}
                </SuperButton>

                {/*should work (должно работать)*/}
                <SuperCheckbox
                    checked={checked}
                    onChangeChecked={setChecked}
                >some text {/*// этот текст попадёт в children*/}
                </SuperCheckbox>
                <SuperCheckbox checked={checked} onChange={testOnChange}/>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperInputText/>*/}
            {/*<AlternativeSuperButton/>*/}
            {/*<AlternativeSuperCheckbox/>*/}
            <hr/>
        </div>
    );
}

export default HW4;
