import { useEffect } from "react";
import Layout from "../../components/headerAndFooterDinamic/layout";
import './contact.css'

export default function ContactUs() {
    useEffect(() =>{
        document.title="contactUs"
    } , [])

    return (
        <>
            <Layout>
                <div className="contactus">
                    <div className="wrapper">
                        <div className="bigtitle">
                            <h1>Contact</h1>
                        </div>
                        <ul className="information">
                            <li>
                                <h4><span>Email</span>: arsasarkhosh4@gmail.com</h4>
                            </li>
                            <li>
                                <h4><span>Phone</span>: 0993-900-5038</h4></li>
                            <li>
                                <h4><span>Fax</span>: 0993-900-5038</h4>
                            </li>
                        </ul>
                        <h3>Arsams Office</h3>
                        <p>tehran,satara,bebbodi,koche mostanie</p>
                        <div className="contactus-part2">
                            <h1>what will be get when you ask the question</h1>
                            <ul className="flex">
                                <li>
                                    <h4>Less than 12-hour response to yout question.</h4>
                                </li>
                                <li>
                                    <h4>
                                        you can improve yourself in your work
                                    </h4>
                                </li>
                                <li>
                                    <h4>
                                        Plan of action summerize in a Email follow you.
                                    </h4>
                                </li>
                            </ul>
                            <div className="wrapper2">
                            <div className="filling-out-the-planks">
                                
                                <ul>
                                    <li>
                                        <h3>Userame</h3>
                                        <input type="text"></input>
                                    </li>
                                    <li>
                                        <h3>lastname</h3>
                                        <input type="text1"></input>
                                    </li>
                                </ul>
                                
                                
                            </div>
                            <div className="filling-out-the-planks2">
                                <ul>
                                    <li>
                                        <h3>Email Address</h3>
                                        <input type="text"></input>
                                    </li>
                                    <li>   
                                        <h3>Phone Number</h3>
                                        <input type="text"></input>
                                    </li>
                                </ul>
                            </div>
                            <div className="nazarsanji">
                                <h3>what are you thinking about us? Rite down</h3>
                                <textarea placeholder="tipe your idia"></textarea>
                                <button>submit</button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}