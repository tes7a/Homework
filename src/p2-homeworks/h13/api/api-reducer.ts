import {api} from "./api";
import {Dispatch} from "redux";

const initialState: InitialStateType = {
    success: false
}

export const apiReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "api/CHANGE-SUCCESS":
            return {...state, success: action.success}
        default:
            return state
    }
}

// action
const changeSuccessAC = (success: boolean) => ({type: 'api/CHANGE-SUCCESS', success}as const )

//type
type ActionType = ReturnType<typeof changeSuccessAC>
type InitialStateType = {success: boolean}

// thunk
export const changeSuccessTC = (success: boolean) => (dispatch: Dispatch) => {
    api.post(success)
        .then(res => {
            dispatch(changeSuccessAC(success))
        })
        .catch(err => {
            console.log(`some ${err}`)
        })
}