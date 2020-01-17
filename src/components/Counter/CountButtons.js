import React from 'react'
import {useDispatch} from 'react-redux'
import {increase} from '../../actions'
import {decrease} from '../../actions'

const CountButtons = () => {

    const dispatch = useDispatch()

    console.log(dispatch)

    const handleInc = () => {
        dispatch(increase())
    }

    const handleDec = () => {
        dispatch(decrease())
    }

    return(
        <div>
            <button onClick={handleInc}>+</button>
            <button onClick={handleDec}>-</button>
        </div>
    )
}

export default CountButtons