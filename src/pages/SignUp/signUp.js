import { Link } from "react-router-dom"
import "./style2.css"
import { useEffect } from "react"

export default function SignUp() {
    useEffect(()=>{
        document.title="SignUp"
    } , [])


    return(
        <>
           <div className='picture1'>
     <div className='wrapper4'>
            <div className="signin1">
                <div className="wrapper5">
                    <div className="title1">
                        <h1>filling out the blanks</h1>
                    </div>
                    <div className="inputs-and-buttons1">
                        <input type="text" placeholder="firstname"></input>
                        <input type="text" placeholder="lastname"></input>
                        <input type="text" placeholder="username"></input>
                        <input type="password" placeholder="password"></input>
                        <input type="password" placeholder="Repeat the password"></input>
                        <button>SignUp</button>
                        <h3>Do you have an account?<Link to="/sign-in">  SignIn</Link></h3>
                    </div>
                </div>
             </div>
        </div>
</div>
        </>
    )
}