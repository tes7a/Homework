import React from 'react'
import '../Message.module.css';

type MessageType = {
    avatar: string
    name: string
    message: string
    time: string
}

export function Message(props: MessageType) {
    return (
        <div>
            <img src={props.avatar}/>
            <div>{props.name}</div>
            <div>{props.message}</div>
            <div>{props.time}</div>
        </div>
);
}