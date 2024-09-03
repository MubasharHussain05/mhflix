import { NavLink } from "react-router-dom"

export const About=()=>{
    return(
        <>
            <section className="about">
    <div className="row">

        <div className="image">
            <img src="/about-img.svg" alt="" />
        </div>

        <div className="content">
            <h3>why choose us?</h3>
            <p>You can watch Netflix on any supported smart TV, phone, tablet, streaming player, or game console that connects to the internet and offers the Netflix app, or at netflix.com using a computer.</p>
            <NavLink to="https://help.netflix.com/en/node/14361" className="btn contact-btn">our curses</NavLink>
        </div>

        <div className="box-container">

            <div className="box">
                
                <div>
                    <h3>Creator</h3>
                    <span>The Duffer Brothers</span>
                </div>
            </div>


            <div className="box">
            
                <div>
                    <h3>80s</h3>
                    <span>Sci-fi</span>
                </div>
            </div>

            <div className="box">
                
                <div>
                    <h3>4</h3>
                    <span>Seasons</span>
                </div>
            </div>

            <div className="box">
            
                <div>
                    <h3>100%</h3>
                    <span>Speed Test</span>
                </div>
            </div>
        </div>

    </div>
</section>
        </>
    )
}