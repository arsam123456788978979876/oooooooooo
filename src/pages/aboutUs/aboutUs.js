import "../aboutUs/aboutUs.css"
import Layout from "../../components/headerAndFooterDinamic/layout"



export default function AboutUs() {
    return (
        <>  
            <Layout>
                <div className="aboutUs">
                    <div className="wrapper">
                        <div className="part1-aboutUs">
                            <div className="wrapper3">
                            <h1>Arsam e-commerce group</h1>
                            </div>
                            <h3>Arsam e-commerce group has now become a complete ecosystem for all online businesses. Arsam Group's approach is to complete the value creation chain for Iran's digital economy, and in this way, it has provided the necessary infrastructure to meet the needs of businesses.</h3>
                        </div>
                        <div className="part2-aboutUs">
                            <ul>
                                <li>
                                    <h1>31 milion +</h1>
                                     <h4>Monthly active user in Arsams Site</h4>
                                </li>
                                <li>
                                    <h1>28 milion +</h1>
                                    <h4>Variety of products on Arsams website</h4>

                                </li>
                                <li>
                                    <h1>50 milion +</h1>
                                    <h4>Seller on Arsams site</h4>

                                </li>
                                <li>
                                    <h1>1 milion +</h1>
                                    <h4>The title of the content in Fidibo</h4>
                                </li>
                                <li>
                                    <h1>100 milion +</h1>
                                    <h4>Personnel in Arsams Site</h4>
                                </li>
                            </ul>
                        </div>
                        <div className="part3-aboutUs">
                            <h1 className="theme">hestory</h1>
                            <h1 className="h">First of all, I welcome you to this site. This site has been active since 2023. This site was first designed as a test site and after some time it was shared for you to watch movies and series.</h1>
                            <h1 className="h">
As you know, this site was designed by a person named Arsam Sarkhosh, who did this using react to developed it. It took him about 1 week to design the site. And until now, there are changes and updates for this site and it will always be updated. In this site you can see the information of a movie and enjoy it.</h1>
                        </div>
                    </div>
                </div>
             </Layout>
        </>
    )
}