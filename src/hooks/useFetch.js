import axios from "axios"
import { useState } from "react"

const useFetch = (url) => {
    const [response, setResponse] = useState()
    const [haserror, setHaserror] = useState(true)

    const getApi = () => {
        axios.get(url)
        .then(res => {
            setResponse(res.data)
            console.log("SUCCESS")
            setHaserror(false)
        })
        .catch(err =>{
            console.log("Error fetching data:" , err)
            setHaserror(true)
        })
    }
return[ response, getApi, haserror]

}

export default useFetch