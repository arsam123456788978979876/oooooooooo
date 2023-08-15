import { Link } from "react-router-dom";
import './style.css'


export default function Header2() {
    return(
        <>
            <div className="header2">
                <div className="wrapper">
                <div className="father2">
                <Link to="/"><h1>back to home</h1></Link>
                <Link to="/sign-in"><h1>SignIn</h1></Link>
                <Link to="/sign-up"><h1>SignUp</h1></Link>
                </div>
                </div>
            </div>
        </>
    )
}