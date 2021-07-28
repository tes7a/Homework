import React from 'react'
import style from '../Message.module.css';

type MessageType = {
    avatar: string
    name: string
    message: string
    time: string
}

export function Message(props: MessageType) {
    return (
        <div className={style.wrapper}>
            <div className={style.avatar}>
                <img src={props.avatar}/>
            </div>
            <div className={style.common}>
                <div className={style.name}>{props.name}</div>
                <div className={style.message}>{props.message}</div>
                <div className={style.time}>{props.time}</div>
                <div className={style.endWrapper}></div>
            </div>
        </div>
    );
}