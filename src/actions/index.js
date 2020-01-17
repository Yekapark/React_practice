export const increase = () => {
    return {type: 'Counter', payload: 'INC'}
}

export const decrease = () => {
    return {type: 'Counter', payload: 'DEC'}
}