export type initStateType = {
    show: boolean
}

const initState: initStateType = {
    show : false
}

export const loadingReducer = (state = initState, action: loadingType): initStateType => { // fix any
    switch (action.type) {
        case 'SHOW-LOADING': {
            return {...state, show: !state.show}
        }
        default: return state
    }
}

type loadingType = ReturnType<typeof loadingAC>

export const loadingAC = () => {
   return {
       type: 'SHOW-LOADING',
   }as const
} // fix any