import React from 'react'
import {connect} from 'react-redux'

const CountDisplay = (props) => {

    return(
        <div>
            <h2>Count {props.count}</h2>
        </div>
    )
}

const mapStateToProps = ({countReducer}) => {

    console.log('mapStateToProps: ', countReducer)

    return countReducer
}

export default connect(mapStateToProps)(CountDisplay)