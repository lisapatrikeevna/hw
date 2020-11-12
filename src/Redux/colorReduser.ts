import {themeType} from "../p2-homeworks/h12/HW12";

export type  initialStateType = {
    theme: themeType
}
type changeThemeType=ReturnType<typeof changeThemeAC>
type actionType = changeThemeType
let initialState: initialStateType = {
    theme: "some"
}
const colorReduser = (state = initialState, action: actionType):initialStateType => {
    switch (action.type) {
        case 'CHANGE-THEME':
            debugger
            return {...state,
                theme: action.theme
            }
        default:
            return state
    }
}
export const changeThemeAC = (theme:themeType) => ({type:'CHANGE-THEME',theme}as const)

export default colorReduser;