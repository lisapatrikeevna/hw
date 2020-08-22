import React from "react";
import cl from './Message.module.css';
import userEvent from "@testing-library/user-event";

type messageDataType={
    avatar: string
    name: string
    message: string
    time: string
}
function Message(props:messageDataType) {
    return (
        <div className={cl.messages}>
            <div className={cl.itemUser}>
                <img src={props.avatar} className={cl.ava}/>
                <div className={cl.textUser}>
                    <div>
                        <h4 className={cl.nameUser}>{props.name}</h4>
                        <p className={cl.message}>{props.message}</p>
                    </div>
                    <span className={cl.time}>{props.time}</span>
                </div>

            </div>
        </div>
    );
}

export default Message;
