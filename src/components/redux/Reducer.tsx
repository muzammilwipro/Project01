import { Auth_val } from "./Constant";

const initialState = {
    authval: false
}

const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case Auth_val:
            return {
                ...state, authval: action.data,
            }
        default:
            return state;
    }
}

export default reducer;