import {createBrowserRouter, RouterProvider} from "react-router-dom"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Movie } from "./pages/Movie"
import { Contact, contactData } from "./pages/Contact"
import { AppLayout } from "./components/Layout/AppLayout"
import { ErrorPage } from "./pages/ErrorPage"
import { ApiData } from "./API/GetApiData"
import { MovieDetails } from "./components/Layout/UI/MovieDetails"
import { GetMovieDetail } from "./API/GetMovieDetails"
import { SignIn } from "./pages/SignIn"
import { SignUp } from "./pages/SignUp"
const App=()=>{
  const router=createBrowserRouter([
    {
       path:"/",
      element:<AppLayout/>,
      errorElement:<ErrorPage/>,
      children:[
        {
          path:"/signin",
          element:<SignIn/>,
        },
        {
          path:"/signup",
          element:<SignUp/>,
        },
        {
          path:"/",
          element:<Home/>,
        },
        {
          path:"/about",
          element:<About/>,
        },
        {
          path:"/movie",
          element:<Movie/>,
          loader:ApiData,
        },
        {
          path:"/movie/:movieID",
          element:<MovieDetails/>,
          loader:GetMovieDetail,
          
        },
        {
          path:"/contact",
          element:<Contact/>,
          action:contactData,
        },

      ]
    },
    
  ]) 
  return(
    <>
     <RouterProvider router={router}/>
    </>
  )
}
export default App