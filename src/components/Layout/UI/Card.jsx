import { NavLink } from 'react-router-dom'
import './Card.css'
export const Card=({curMovie})=>{
    
    return(
        <>
          <li className="hero-container">
            <div className="main-container">

                <div className="poster-container">
                <img src={curMovie.Poster} alt={curMovie.imdbID} className="poster" />
                </div>

                <div className="ticket-container">
                    <div className="ticket_content">
                    <NavLink to={`/movie/${curMovie.imdbID}`}><button className="ticket__buy-btn">watch</button></NavLink>
                    </div>
                </div>

            </div>
          </li>  
        </>
        
    )
} 