import { createBrowserRouter , RouterProvider} from 'react-router-dom';
import HomePage from '../pages/homePage/homePage';
import SignIn from '../pages/SignIn/signIn';
import SignUp from '../pages/SignUp/signUp';
import ContactUs from '../pages/contactUs/contactUs';
import AboutUs from '../pages/aboutUs/aboutUs';
import Singlegenres from '../pages/genres/singleGenres';
import Error from '../pages/errorPage/errorPage';
import Genres from '../pages/genres/genres';
import SinglePage from '../pages/singlePage/singlePage';

const makeSite = createBrowserRouter(
    [
        {
            path:"/",
            element:<HomePage/>
        },
        {
            path:"/sign-in",
            element:<SignIn/>
        },
        {
            path:"/sign-up",
            element:<SignUp/>
        },
        {
            path:"/contact-us",
            element:<ContactUs/>
        },
        {
            path:"/about-us",
            element:<AboutUs/>
        },
        {
            path:"/movieList",
            element:<Genres/>
        },
        {
            path:"/genres",
            element:<Genres/>
        },
        {
            path:"/genres/:genresID",
            element:<Singlegenres/>
        },
        {
            path:"/pages/:id",
            element:<SinglePage/>
        },
        {
            path:"/*",
            element:<Error/>
        }
        
    ]
)
export default function SiteRouter() {
    return(
        <RouterProvider router={makeSite} />
    )
}