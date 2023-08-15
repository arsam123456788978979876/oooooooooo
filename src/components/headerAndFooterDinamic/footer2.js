import { Link } from "react-router-dom";
import img1 from "./../image/instagram.svg"
import img2 from "./../image/discord.svg"
import img3 from "./../image/whatsapp.svg"
import img4 from "./../image/twitter.svg"
import img5 from "./../image/youtube.svg"

export default function Footer2() {
    return( 
    <> 
     <div className="dad">
            <div className="wrapper">
            <div className="icons">
                <div className="instagram g">
                    <Link to="#">
                        <img src={img1}/>
                    </Link>
                </div>
                <div className="discord g">
                <Link to="#">
                    <img src={img2}/>
                </Link>
                </div>
                <div className="whatsapp g">
                <Link to="#">
                    <img src={img3}/>
                </Link>
                </div>
                <div className="youtub g">
                <Link to="#">
                    <img src={img5}/>
                </Link>
                </div>
                <div className="twiter g">
                <Link to="#">
                    <img src={img4}/>
                </Link>
                </div>
            </div>
            <div className="title">See you soon!</div>
            </div>
        </div>
    </>
    )
}