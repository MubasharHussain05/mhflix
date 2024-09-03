import { Form } from "react-router-dom"

export const contactData=async({request})=>{

    try{
        const res=await request.formData();
        
        const data= Object.fromEntries(res);
        console.log(data)
        return null

    }catch(error){
        console.log(error)
    }
}

export const Contact=()=>{
    return (
        <>
            <section className="container2 section-contact">
                <div >
                    <h2 className="section-common--heading"></h2>
                    <p className="section-common--subheading">Get in with us.We are always here to help you.</p>
                </div>


                <div className="grid grid-two--col">
                    <div className="contact-content">
                        <Form post="POST" action="/contact" className="form">
                        <div className="grid grid-two--col mb-3">
                        <div>
                            <label htmlFor="username">Full Name</label>
                            <input type="text"
                            name="username"
                            id="username"
                            className="input"
                            required
                            autoComplete="off"
                            placeholder="Enter Full Name"
                             />
                             </div>

                             <div>
                            <label htmlFor="email">E-mail</label>
                            <input type="email"
                            name="email"
                            id="email"
                            required
                            className="input"
                            autoComplete="off"
                            placeholder="mubasharhussain26@gmail.com"
                             />
                             </div>

                        </div>

                        <div className="mb-3">
                            <label htmlFor="message">Message</label>
                            <textarea name="message" id="message"
                            cols="30"
                            rows="10"
                            placeholder="we are always here to help you."></textarea>

                        </div>

                        <div className="mt-3">
                            <button type="submit" className="btn contact-btn">Send Me</button>
                        </div>

                        </Form>
                    </div>

                    <div className="contact-image">
                        <figure>
                            <img src="/main_hero_pic.png" alt="contact pic" className="contact_image" />
                        </figure>
                    </div>
                </div>
            </section>
        </>
    )
}