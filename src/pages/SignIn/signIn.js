import { useEffect } from 'react'
import '../SignIn/style.css'
import { Link } from 'react-router-dom'

export default function SignIn() {
useEffect(() => {
    document.title="SingIn"
} , [])


    let password = document.getElementById("password");
    let active = document.getElementById("input-password");

    return(
 <>
 <div className='picture'>
     <div className='wrapper2'>
            <div className="signin">
                <div className="wrapper3">
                    <div className="title">
                        <h1>filling out the blanks</h1>
                    </div>
                    <div className="inputs-and-buttons">
                        <input required type="email" placeholder=" username or email"></input>
                        <div id='input-password'>
                        <input required type="password" placeholder=" password" id='password'></input>
                        <span>it is empty!!!!</span>
                        </div>
                        <button>SignIn</button>
                        <h3>you dont have an account?<Link to="/sign-up">  creat an acount</Link></h3>
                    </div>
                </div>
             </div>
        </div>
</div>
 </>
 
    )
    
}