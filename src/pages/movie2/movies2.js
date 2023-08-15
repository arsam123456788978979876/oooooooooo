import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



export default function MoviesList2 () {
    const [show , showSet] = useState([])
    const [loading , setLoading] = useState(false)
    useEffect(() =>{
        movies()
    } , [])


    function movies (){
        setLoading(true)
        axios.get('https://moviesapi.ir/api/v1/movies/').then((response) =>{
            showSet(response.data.data);
        setLoading(false)
        })
    }
    function renderFarm() {
        return show.map((i) =>{
            const {poster , title , id} = i
           return(
             <li>
                <Link to={`/safhe/${id}`}>
                <img src={poster}/>
                <h2>{title}</h2>
                </Link>
            </li>
           )
        })
    }


    return (
        <>
        {loading ===true ? "loading...."  : <ul>{renderFarm()}</ul>}
        </>
    )
}