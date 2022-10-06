
export const Type_Reducer = {
    startFetch: "START_FETCH",
    doneFetch: "DONE_FETCH",
    errorFetch: "ERROR_FETCH",
    addUser: "ADD_USER"
}

function HomeReducers(state, action) {
    let nextState
    switch (action.type) {
        case Type_Reducer.startFetch:
            return ({ ...state, loading: true })
        case Type_Reducer.doneFetch:
            return ({ ...state, loading: false, data: action.payload })
        case Type_Reducer.errorFetch:
            return ({ ...state, loading: false, data: '', error: true, message: action.payload })
        case Type_Reducer.addUser:
            nextState = { ...state, data: [...state.data, action.payload] }
            return state = nextState

        default:
            return state;
    }

}

export default HomeReducers