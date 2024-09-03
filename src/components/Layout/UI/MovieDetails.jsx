import { NavLink, useLoaderData } from "react-router-dom"



export const MovieDetails=()=>{
    
    const movieData=useLoaderData()
    console.log(movieData)

    const {Actor,Runtime,Genre,Award,imdbRating,Poster,Title,Type,Year,Plot,BoxOffice,imdbID}=movieData

    const totalmintue=Runtime.replace("min","")
    const hours=Math.floor(totalmintue/60)
    const minutes=totalmintue%60
    console.log(hours,minutes)
    const formatedTime=`${hours}hr ${minutes}`
    console.log(formatedTime)

return(
    <>
    
    <li className="hero-container hero-movie-container" style={{backgroundColor:"#00040F"}} >
        <div className="main-container">
            <div className="poster-container">
            
                    <img src={Poster} alt="" className="title" /> 
                
            </div>
            <div className="ticket-container">
                <div className="ticket_content">
                    <h4 className="ticket_movie-title">{Title} </h4>
                    <p>{Plot} </p>
                    <p className="ticket_current-price">type:{Type} </p>
                    <p className="ticket_current-price">type:{Year} </p>
                    <NavLink to="https://themoviesflix.cn.com/about-us/Themoviesflix.mex.com">
                    <button className="ticket_buy-btn">See More</button>
                    </NavLink>
                </div>
            </div>
        </div>
    </li>
    
    </>
)
}