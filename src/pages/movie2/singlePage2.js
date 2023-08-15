import { useParams } from "react-router-dom";
import { useEffect , useState } from "react";
import axios from "axios";




export default function Parts2 () {
    const {id} = useParams();
    const [p , setP] = useState({});

    useEffect(() =>{
            axios.get(`https://moviesapi.ir/api/v1/movies/${id}`).then((response) =>{
            setP(response.data);
            });
        
    } , []);

    return (
        <>
        <img src={p.poster}/>
        <h1>{p.title}</h1>
        </>
    )
 
}