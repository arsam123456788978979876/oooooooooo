import Header2 from "./header2";
import Footer2 from "./footer2";

export default function Layout(props) {
    return(
        <>
        <Header2/>
            {props.children}
        <Footer2/>
        </>
    )
}