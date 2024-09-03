import { NavLink } from "react-router-dom"

export const Footer=()=>{
    return(
        <>
            <footer className="section-footer">
      <div className="footer-container container">
        <div className="content_1">
          {/* <img src="/public/threerspo-removebg-preview.png" alt="logo" /> */}
          <h1 style={{color:"white"}}>MHflix</h1>
          <p>
          When a young boy vanishes, a small town uncovers a mystery  involving secret experiments, terrifying supernatural forces  and one strange little girl.
          </p>
          <img src="https://i.postimg.cc/Nj9dgJ98/cards.png" alt="cards" />
        </div>
        <div className="content_2">
          <h4>SHOPPING</h4>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/movie">Movie</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
        <div className="content_3">
          <h4>Experience</h4>
          <NavLink to="./contact">Help Center</NavLink>
          <NavLink to="" target="_blank">Account</NavLink>
          <NavLink to="" target="_blank">Privacy</NavLink>
          <NavLink to="" target="_blank">Legal Notice</NavLink>
        </div>
        <div className="content_4">
          <h4>Corporate Information</h4>
          <p>Be the first to know about new<br />Go behind the scenes and learn more on Tudum.com</p>
          <div className="f-mail">
            <input type="email" placeholder="Your Email" />
            <i className="bx bx-envelope"></i>
          </div>
          <hr />
        </div>
      </div>
      <div className="f-design">
        <div className="f-design-txt">
          <p>Design and Code With Mubashar Hussain</p>
        </div>
      </div>
    </footer>

        </>
    )
}