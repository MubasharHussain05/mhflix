import { Form } from "react-router-dom"
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

export const SignIn=()=>{
    return(
        <>
         <section className="form-container">
        <Form className="Form" action="" method="post" >
            <h3>Wellcome Back</h3>
            <p className="para">your email <span>*</span></p>
            <input type="text" name="email" placeholder="enter uoyr email" required maxlength="100" className="box"/>
            <p className="para">your passward <span>*</span></p>
            <input type="password" name="pass" required placeholder="enter old passward" maxlength="50" className="box"/>
            <input type="submit" name="submit" value="Login now" className="btn" />
            <p className="or">-------------------or-------------------</p>
        <div className="icons">
        <FaFacebookF />
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
        <FaGoogle />
           
        </div>
        <div className="links">
            <p className="al">Already Have Acount?</p>
            <button id="signInButton" className="btn">Sign In</button>
        </div>
        </Form>
        
       </section>

        </>
    )
}