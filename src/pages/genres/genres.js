import axios from "axios";
import { useEffect, useState } from "react";
import { Link , useNavigate } from "react-router-dom";
import "../genres/genres.css"
import Layout from "../../components/headerAndFooterDinamic/layout";

export default function Genres() {
    const [showGenres , setGenres] = useState([])
    const navigate = useNavigate();

    useEffect(() =>{
        genres()
    } , [])

    function genres() {
        axios.get("https://moviesapi.ir/api/v1/genres").then((response) => {
            setGenres(response.data)
        })

        .catch(function (error) {
            navigate("/")
        });
    }
    function renderFarm() {
        return showGenres.map((i) =>{
            const { name , id } = i
            return(
                
                        <li key={id}>
                            <Link to={`/genres/${id}`}>
                                <h2>{name}</h2>
                            </Link>
                        </li>
            
            )
        })
    }

    return(
    <>  
        <Layout>
            <div className="background1">
                <div className="wrapper">
                    <ul className="width">{renderFarm()}</ul>
                </div>
            </div>
        </Layout>
    </>
    )
}