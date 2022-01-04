const initState: initState = {
    color: "red",
};

export const themeReducer = (state = initState, action: ActionsType): initState => { // fix any
    switch (action.type) {
        case "COLOR/CHANGE-THEME": {
            debugger;
            return {...state, color: action.color};
        }
        default: return state;
    }
};

// action
export const changeThemeAC = (color: string) =>
    ({type: 'COLOR/CHANGE-THEME', color} as const); // fix any

// type
export type initState = {
    color: string
}

type ActionsType = ReturnType<typeof changeThemeAC>