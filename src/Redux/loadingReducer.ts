export type  initialStateType = {
    loading: boolean
}
type loadProcessType=ReturnType<typeof loadProcessAC>
type actionType = loadProcessType
let initialState: initialStateType = {
    loading: false
}
const loadingReducer = (state = initialState, action: actionType):initialStateType => {
    switch (action.type) {
        case "LOADING":
            return {...state,
                loading: action.load
            }
        default:
            return state
    }
}
export const loadProcessAC = (load:boolean) => ({type:'LOADING',load}as const)

export default loadingReducer;