import React, { ChangeEvent } from "react";
import {useDispatch} from "react-redux";
import { changeSuccessTC } from "./api/api-reducer";

export const HW13 = () => {
    const dispatch = useDispatch();
    const checkBoxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeSuccessTC(e.currentTarget.checked))
    }

    return <div>
        <input type='checkbox' onChange={checkBoxHandler} style={{height: '50px', width: '50px'}}/>
    </div>
}