import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC} from './bll/loadingReducer';
import s from './styles.module.css'

function HW10() {
    // useSelector, useDispatch
    const dispatch = useDispatch()
    const show = useSelector<AppStoreType,boolean>(state => state.loadingState.show)
    const loading = false

    const setLoading = () => {
        dispatch(loadingAC())
        setTimeout( () => dispatch(loadingAC()),3000)
        console.log('loading...')
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {show
                ? (
                    /*<div>крутилка...</div>*/
                    <div className={s.overlayLoader}>
                        <div className={s.loader}>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
// function useSelector<T, U>(arg0: (state: any) => any): { show: any; } {
//     throw new Error('Function not implemented.');
// }

