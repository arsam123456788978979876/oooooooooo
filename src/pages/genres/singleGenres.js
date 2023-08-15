import axios from "axios";
import { useEffect, useState } from "react";
import { Link , useNavigate, useParams } from "react-router-dom";
import "../genres/singleGenres.css"
import Layout from "../../components/headerAndFooterDinamic/layout";
import debounce from 'lodash/debounce'

export default function Singlegenres() {
    const {genresID} = useParams()
    const [result , chooseResult] = useState([])
    const [showGenres , setGenres] = useState([])
    const navigate = useNavigate();
    const javad2 = debounce( onSearch, 200)

    useEffect(() =>{
        genres()
    } , [genresID])

    function genres() {
        axios.get(`https://moviesapi.ir/api/v1/genres/${genresID}/movies`).then((response) => {
            setGenres(response.data.data)
        })

        .catch(function (error) {
            navigate("/")
        });
    }
    function renderFarm() {
        return showGenres.map((i) =>{
            const { poster , id , title , genres , year , imdb_rating} = i
            
            return(
                    <li key={id}>
                        <Link to={`/pages/${id}`}>
                            <div className="inf">
                                <img src={poster}/>
                                <div className="moreInfo">
                                    <h2>Name:<span> {title}</span></h2>
                                    <h3>Genres: {genres}</h3>
                                    <h3>Year: {year}</h3>
                                    <h3>Rait: {imdb_rating}</h3>
                                </div>
                            </div>
                        </Link>
                    </li>
            )
        })
    }
        function onSearch(e){
            const value = e.target.value
            if(value === ""){
                chooseResult([])
            }else {
                axios.get("https://moviesapi.ir/api/v1/movies" , { params: {q : value} }).then((response) =>{
                chooseResult(response.data.data)
                })
            }
            
        }
        function renderFarm2() {
            return result.map((a) =>{
                const {poster , id} = a
                return(
                        <Link to={`/pages/${id}`}>
                        <div>
                            <img src={poster}/>
                        </div>
                        </Link>
                        

                )
            })
        }
        var input = document.getElementById("input");
    return(
        <>
            <Layout>
                <div className="background-image">
                    <div className="wrapper">
                        <div className="useFlex">
                        <div className="input">
                                <input id="input1" onChange={(e) => javad2(e) } placeholder="enter your movies name" type="search" ></input>
                                <div className="map">{renderFarm2()}</div>
                            </div>
                            <div className="title2">
                                <h1>Movies Page</h1>
                            </div>
                            <div className="arsamsWebsite">
                                <Link to="/about-us">
                                    <h1>ArsamsWebsite</h1>
                                </Link>
                            </div>
                        </div>
                        <ul>{renderFarm()}</ul>
                    </div>
                </div>
                        
            </Layout>
        </>
    )
    
}
