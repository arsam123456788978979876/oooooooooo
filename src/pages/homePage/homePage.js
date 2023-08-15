import {Link} from'react-router-dom'
import { useEffect} from 'react'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import './homePage.css'



export default function HomePage() {
useEffect(() =>{
    document.title="home"
} , [])

return (
    <>
    <Header/>
        <div className='part1'>
            <div className='wrapper'>
                <div className='information'>
                    <div className='skew'>
                        <h1>What kind of Movies Do you want?!</h1>
                    </div>
                    <div className='skew2'>
                        <h1>wars movie?</h1>
                    </div>
                    <div className='skew3'>
                        <h1>or horror movies?</h1>
                    </div>
                 <div className='skew4'>
                    <h1>!you can watch all of them!</h1>
                 </div>
                </div>
            </div>
        </div>
        <div className='part2'>
            <div className='background'>
                <div className='title'>
                    <h1>about movies</h1>
                    <p>The moving images of a film are created by photographing actual scenes with a motion-picture camera, by photographing drawings or miniature models using traditional animation techniques, by means of CGI and computer animation, or by a combination of some or all of these techniques, and other visual effects.

Before the introduction of digital production, series of still images were recorded on a strip of chemically sensitized celluloid (photographic film stock), usually at the rate of 24 frames per second. The images are transmitted through a movie projector at the same rate as they were recorded, with a Geneva drive ensuring that each frame remains still during its short projection time. A rotating shutter causes stroboscopic intervals of darkness, but the viewer does not notice the interruptions due to flicker fusion. The apparent motion on the screen is the result of the fact that the visual sense cannot discern the individual images at high speeds, so the impressions of the images blend with the dark intervals and are thus linked together to produce the illusion of one moving image. An analogous optical soundtrack (a graphic recording of the spoken words, music and other sounds) runs along a portion of the film exclusively reserved for it, and was not projected.</p>
                </div>
            </div>
        </div>
        <div className='part3'>
            <div className='wrapper1'>
            <div className='title'>
                <div>
                    <h1>do you wanna join us?</h1>
                    <ol>
                        <li><p>1_ you can see free movies</p></li>
                        <li><p>2_ you havent to pay any think</p></li>
                        <li><p>3_ and you can enjoy with us</p></li>
                    </ol>
                    <div className='button'>
                    <Link to="/sign-up"><button>join with us</button></Link>
                    </div>
                </div>
            </div>
            </div>
        </div>
        <Footer/>

        
    </>
    
)
}