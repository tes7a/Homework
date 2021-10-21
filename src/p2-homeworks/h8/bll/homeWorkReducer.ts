import {initialPeople, UserType} from '../HW8'

type cheAgeType = ReturnType<typeof checkAge>
type sortNames = ReturnType<typeof sortNames>

type ActionType = cheAgeType | sortNames

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'SORT-NAMES': {
            const newState = [...state].sort((a, b) => {
                if(a.name> b.name) return 1
                else if(a.name < b.name) return -1
                else return 0
            })
            return action.payload === "up"? newState: newState.reverse()
        }
        case 'CHECK-AGE': {
            return state.filter(f => f.age >= action.payload)
        }
        default: return state
    }
}

const checkAge = (payload: number) => {
    return{
        type: 'CHECK-AGE',
        payload
    } as const
}
const sortNames = (payload: "up" | "down") => {
    return{
        type: 'SORT-NAMES',
        payload
    } as const
}