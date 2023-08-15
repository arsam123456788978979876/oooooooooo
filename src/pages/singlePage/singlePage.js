import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "../singlePage/singlePage.css"

export default function SinglePage() {
    const {id} = useParams()
    const [page , setPage] = useState({})
    useEffect(() =>{

        axios.get(`https://moviesapi.ir/api/v1/movies/${id}`).then((response) =>{
            setPage(response.data)
        })
        
    } , [])
    function renderImages() {
        return page.images?.map((image, i) => {
           return( 
            <li key={i}>
                <img src={image}/>
            </li>
            
           )
        })
    }

    const {poster , title , genres , year , released , runtime , director,  images , actors , writer , awards , imdb_rating} = page

    function onClick1() {
        let down = document.getElementById("p1");
        down.classList.toggle("active")
    }
    function onClick2() {
        let down1 = document.getElementById("p2");
        down1.classList.toggle("active")
    }
    function onClick3() {
        let down2 = document.getElementById("p3");
        down2.classList.toggle("active")
    }
    return (
        <>  
        <div className="header-singlepage">
        <div className="backgrounds">
                <img src={poster}/>
            </div>
            <div className="wrapper">
            <div className="partx">
                <div className="poster">
                    <img src={poster}/>
                    <div className="moreInfo">
                        <div className="sq">
                            <div></div>
                        </div>
                    </div>
                </div>
                <div className="more-information">
                    <h1><span>Name:  </span>{title}</h1>
                    <h1>Genres: {genres}</h1>
                    <h1>Year:  {year}</h1>
                    <h1>Released:  {released}</h1>
                    <h1>Runtime:  {runtime}</h1>
                    <h1>Director:  {director}</h1>
                    <h1>rates:  {imdb_rating}</h1>
                </div>
            </div>
            <div className="firstTitle">
                <h1>More Info : click on it </h1>
            </div>
            <div className="images">
            <ul className="ul">
            {renderImages(images)}
            </ul>
            </div>
            <div className="up-down">
                <div onClick={onClick1} id="p1">
                    <h1>actors</h1>
                    <div id="down">
                        <h1>{actors}</h1>
                    </div>
                </div>
                <div onClick={onClick2} id="p2">
                    <h1>writer</h1>
                    <div id="down2">
                        <h1>{writer}</h1>
                    </div>
                </div>
                <div onClick={onClick3} id="p3">
                    <h1>awards</h1>
                    <div id="down3">
                        <h1>{awards}</h1>
                    </div>
                </div>
            </div>
            </div>
        </div>

        </>
    )
}