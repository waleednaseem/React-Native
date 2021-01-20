const initialState = {
    userName: "",
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "SET_USER":
            return state = {
                ...state,
                userName: action.userName
            }

        default:
            return state;
    }
}