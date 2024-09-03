import { Form } from "react-router-dom"

export const SignUp=()=>{
    return(
        <>
            <section className="form-container">
        <Form className="Form" action="" method="post" enctype="multipart/form-data">
            <h3>Register New</h3>
            <p>your name <span>*</span></p>
            <input type="text" name="name" placeholder="enter your name" required maxlength="100" className="box"/>
            <p>your email <span>*</span></p>
            <input type="text" name="email" placeholder="enter uoyr email" required maxlength="100" className="box"/>
            <p>your passward <span>*</span></p>
            <input type="password" name="pass" required placeholder="enter old passward" maxlength="50" className="box"/>
            <p>comfirm passward <span>*</span></p>
            <input type="password" name="c_pass" required placeholder="enter confirm password" maxlength="50" className="box"/>
            <p>select pic <span>*</span></p>
            <input type="file" name="image" required accept="image/*" className="box"/>
            <input type="submit" name="submit" value="register now" className="btn"/>
            
        </Form>
       </section>

      
        </>
    )
}