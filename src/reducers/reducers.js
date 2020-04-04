let defaultState = {
 buildings: [],
 isLoggedIn: false,
 defaultUser: {username: 'abc', password: 123}
}

const reducers = (state = defaultState, action) => {
    switch (action.type) {
        case 'EXAMPLE':
            return{
                ...state,
                examplePropOne: 'newPropOne'
            }
        case 'COMPARE':
            return{
                ...state,
                isLoggedIn: (action.payload.username == state.defaultUser.username && action.payload.password == state.defaultUser.password)
            }
         default: return state;
    }
}

export default reducers;