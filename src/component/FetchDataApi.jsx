import React,{useState,useEffect} from 'react'
import axios from 'axios'

const FetchDataApi = () => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [show,setShow]=useState(false)
    useEffect(() => {
        const fetchingData = async () => {
            setIsLoading(true)
            try {
                const { data: res } = await axios.get('https://jsonplaceholder.typicode.com/users')
                setData(res)
                setShow(true)
            }
            catch (err) {
                console.log(err.message)
            }
            setIsLoading(false)
        }
        fetchingData()

        return () => {
            setTimeout(()=>{
                setShow(false)
            },5000)
        }
    }, [])
    return (
        <div>
            <h3>{isLoading ? 'Loading':''}</h3>
            {
                data && show && data.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))
            }
        </div>
    )
}

export default FetchDataApi
