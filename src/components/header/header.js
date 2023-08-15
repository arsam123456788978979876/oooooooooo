import {Link} from 'react-router-dom'
import './header.css'
import axios from 'axios'
import { useState } from 'react'
import debounce from 'lodash/debounce'

export default function Header() {
   let [result , setResult] = useState([]) 
    const javad = debounce(onSerch , 200)

    function click() {
        let downClick = document.getElementById("downmenu")
        let width = document.getElementById("hamberger")
        
        width.classList.toggle("active2")
        downClick.classList.toggle("active")
    }





    function onSerch(e){
        const value = e.target.value
        if(value === "") {
            setResult(result = [])
        }else {
            axios.get("https://moviesapi.ir/api/v1/movies" , { params: {q : value} }).then((response) =>{
            setResult(response.data.data)
        })
        }

    }








    function renderFarm() {
        return result.map((movie , i) =>{
            const {id , poster } = movie
            return(
                <li key={id}>
                    <Link to={`/pages/${id}`}>
                    <img src={poster}/>
                    </Link>
                </li>
            )
        })
    }
    return(
        
        <div className="header">
            <div className='wrapper'>
                <div className='father'>
                        <div id='hamberger' onClick={click}>
                            <div></div>
                            <div></div>
                            <div></div>
                                <div id='downmenu'>
                                    <Link to="/contact-us">contactUs</Link>
                                    <Link to="/about-us">aboutUs</Link>
                                </div>
                        </div>
                        
                    <div className='logo'>
                        <h1>arsams website</h1>
                    </div>
                    <div className='menu'>
                        <Link to="/sign-in">
                        <div><h3>Sing In</h3></div>
                        </Link>
                        <Link to="/MovieList">
                        <div><h3>movies</h3></div>
                        </Link>
                    </div>
                </div>
                <div className='search-input'>
                        <input
                        
                        onChange={(e) => javad(e)} type='text' placeholder='type your movies name'

                        />
                        <div className='desgin-wrapper'>
                        <div className='result'>
                            <ul>
                                {renderFarm()}
                            </ul>
                            </div>
                        </div>
                </div>
            </div>
        </div>
        
    )
}