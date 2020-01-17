const initState = {count: 0}

export default function countReducer(state = initState, action) {

    const {type, payload} = action

    if(type !== 'Counter'){
        return state
    }
    
    if(payload === 'INC'){
        return {count: state.count + 1}
    } else if (payload === 'DEC') {
        return {count: state.count - 1}
    }
    
    console.log('count Reducer........', action)

    return state
}