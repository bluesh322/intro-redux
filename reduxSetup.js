const INITIAL_STATE = { face: 'ಠ╭╮ಠ' }

function rootReducer(state = INITIAL_STATE, action) {
    switch(action.type){
        case "MAD":
        return { ...state, face: state.face = 'ಠ╭╮ಠ'}
        case "HAPPY":
            return {...state, face: state.face = 'ヾ(･ω･｀)'}
        case "CLAP":
            return {...state, face: state.face = '(･ω･ﾉﾉﾞ'}
        case "EMBARRASSED":
            return {...state, face: state.face = '(^_^;)'}
        case "CUTE":
            return {...state, face: state.face = '༼☯﹏☯༽'}
    }
}

const store = Redux.createStore(rootReducer);