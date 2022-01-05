import React from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeAC} from "./bll/themeReducer";

const themes = ['dark', 'red', 'some', 'blue', 'silver'];

function HW12() {
    const theme = useSelector<AppStoreType, string>(state => state.theme.color); // useSelector
    const dispatch = useDispatch();

    const onChangeCallback = (option: string) => {
        dispatch(changeThemeAC(option))
    }
    // useDispatch, onChangeCallback

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}
            <div>
                <div>
                    <SuperSelect options={themes} value={theme} onChangeOption={onChangeCallback}/>
                </div>
                <div>
                    <SuperRadio options={themes} value={theme} onChangeOption={onChangeCallback}/>
                </div>
            </div>


            <hr/>
        </div>
    );
}

export default HW12;
