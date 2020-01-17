import React, {useEffect, useState} from 'react'
import axios from 'axios'

const TodoList = () => {

    const [page, setPage] = useState(1)
    const [arr, setArr] = useState([])

    useEffect(() => {

        console.log("axios run.............")
        axios.get("http://192.168.0.15:8080/todos/list?page=" + page)
        .then(res => setArr(res.data.content))

        return function cleanup(){
            console.log("Clean up")
        }
    }, [page])

    const handleNext = () => {
        setPage(page + 1)
    }

    const list = arr.map(t => <li key={t.tno}>{t.tno} === {t.title}</li>)

    return(
        <div>
            <ul>
                {list}
            </ul>
            <button onClick={handleNext}>NEXT</button>
        </div>
    )
}

export default TodoList