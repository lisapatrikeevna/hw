import {initialPeople, initialPeopleType} from "../HW8";

type  sortOnNameACType = {
    type: "sort"
    payload: "down" | "up"
}

type checkACType = ReturnType<typeof checkACT>
type actionType = sortOnNameACType | checkACType;
export const homeWorkReducer = (state: initialPeopleType[] = initialPeople, action: actionType): any => {
        switch (action.type) {
            case "sort": {
                let sortedState: initialPeopleType[] = []
                if (action.payload === 'up') {
                    sortedState = [...state].sort((a, b) => {
                        if (a.name > b.name) {
                            return 1
                        }
                        if (a.name < b.name) {
                            return -1
                        }
                        return 0
                    })
                } else {
                    sortedState = [...state].sort((a, b) => {
                        if (a.name < b.name) {
                            return 1
                        }
                        if (a.name > b.name) {
                            return -1
                        }
                        return 0
                    })
                }
                return sortedState
            }
            case "check":
                return state.filter((i)=>i.age > action.age)
            default:
                return state
        }
    }
;
export const sortOnNameUpAC = () => ({type: "sort", payload: 'up'} as const);
export const sortOnNameDownAC = () => ({type: "sort", payload: 'down'} as const);
export const checkACT = () => ({type: "check", age:18} as const);