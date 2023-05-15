import React from 'react'
import './Contact.css'
import emailjs from 'emailjs-com'

const Contact = () => {

    const sendEmail = (e)=>{
        e.preventDefault();

        emailjs.sendForm('service_qhu3lxe','template_sv3nmyl',e.target,'dNRK3Uj_WQXn8nnrM').then(res =>{console.log(res)}).catch(err => console.log(err))
    }
    
    

    return (
        <div className='Section_Contact bg-clr' id='contact'>
            <div className='Section_Contact_title'>
                <p> <span className='text-danger'>Get In Touch</span></p>
            </div>
            <div className='Section_Contact_Box row'>
                <div className='Contact_Left  col-8 col-lg-6'>
                    <div className='Contact_Left_Title text-danger'>Get In Touch</div>
                    <form className='Contact_Left_Form' onSubmit={sendEmail}>
                        <input type="text" name="name" id="name" placeholder='Your Name' required/>
                        <input type="text" name="user_email" id="user_email" placeholder='Your Email' required/>
                        <textarea name="message" id="message" cols="30" rows="10" placeholder='Write a Message'></textarea>
                        <div><input type="submit" className='btn send' value='SEND MESSAGE'/></div>
                        
                    </form>
                </div>
                <div className='Contact_right col-8 col-lg-4'>
                    <div className='Contact_right_Title text-danger'>My Contact Details</div>
                    <div className='Contact_right_Details'>
                        <div>
                            <h6>Email</h6>
                            <a className='text-decoration-none text-light' href='ragul031299@gmail.com'>ragul031299@gmail.com</a>
                        </div>
                        <div>
                            <h6>Phone</h6>
                            <a className='text-decoration-none text-light' href='#'>+91 9597334983</a>
                        </div>
                        <div>
                            <h6>Address</h6>
                            <div>
                                <p>TamilNadu, India</p>
                                <p>No 42 Salem Road</p>
                                <p>Musiri, Trichy</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
