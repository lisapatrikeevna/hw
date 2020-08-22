import React from "react";
import Message from "./Message";
import { type } from "os";
import cl from './Message.module.css';
export type messageDataType={
    avatar: string
    name: string
    message: string
    time: string
}
// type propsType = {
//     messageData: Array<messageDataType>
// }
const messageData:messageDataType = {
    avatar: "https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",
    name: "Some Name",
    message: "some text",
    time: "22:00",
};

function HW1() {
    return (
        <div className={cl.wrap}>
            <hr/>
            {/* homeworks 1 */}
            <Message avatar={messageData.avatar} name={messageData.name} message={messageData.message} time={messageData.time} />
            
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    );
}

export default HW1;
