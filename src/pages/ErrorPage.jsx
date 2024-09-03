import {  useNavigate, useRouteError } from "react-router-dom"


export const ErrorPage = () => {
    const Navgate=useNavigate()
    const handleGOBack=()=>{
        Navgate(-1)
    }

    const error=useRouteError()
    console.log(error)
    if(error.status===404){
        return(
            <>
                <div className="error-section">
                    <div id="error-text">
                        <figure>
                            <img src="https://cdn.dribbble.com/users/722246/screenshots/3066818/404-page.gif" alt="" />
                            
                        </figure>
                        <div className="text-center">
                            <div className="p-a">.The page you were looking for could not found</div>
                            <div className="p-b">...Back to you previous page</div>
                        </div>
                    </div>
                    {/* <NavLink className="navl" to="/">
                    go back to home pag
                    </NavLink> */}
                    <button onClick={handleGOBack} className="navl">Go Back</button>
                </div>
            </>
        )
    }
  return (
    <div style={{fontSize:"50px",display:"flex",alignItems:"center",justifyContent:"center"}}>404 error</div>
  )
}
