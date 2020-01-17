const initState = {arr: []}

export default function todoReducer(state = initState, action) {
    
    const {type, payload} = action

    if(type !== 'Counter'){
        return state
    }
    
    console.log('todoReducer..........', todoReducer)

    return state
}