import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './css/form.css'


export default function Form(){

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm(
        "service_y3rbzgq",
        "template_vxhwkrj",
        form.current,
        "aMONavr7EDU_LxXT8" //this is my cred- waseem
      )
  
    //   emailjs.sendForm('service_y3rbzgq', 'template_vxhwkrj', form.current, 'aMONavr7EDU_LxXT8') - keep this commented- use this if u want to test keep the other in code
        .then((result) => {
            console.log(result.text);
            openPop()
            form.current.reset()
        }, (error) => {
            console.log(error.text);
        });

        const popUp = document.getElementById("popup")
        const removePop = document.getElementById("Rpop")
    
        function openPop(){
            popUp.classList.add("open-popup")
        }
    
        removePop.addEventListener("click", function(){
            popUp.classList.remove("open-popup")
        })
    
        function closePop(){
            popUp.classList.remove("open-popup")
        }
    };


    



    return(
        <section id='contact' className="contact--form d-flex align-items-center">
            <div className="contact-con container-lg rounded-4">
                <div className="text-center">
                    <h2>Get in Touch</h2>
                    <p className="lead">Questions to ask? Fill out the form to contact us directly...</p>
                </div>

                <div className="row justify-content-center my-5">
                    <div className="col-lg-6">
                        <form ref={form} id="form" onSubmit={sendEmail}>
                            
                        <div className="">   
                            <label htmlFor="name" className="form-label" id="username">Name</label>
                            <i class="fas fa-user"></i>
                            <input type="text" className='form-control' id='name' name='name' />
                        </div> 
                        

                        <div> 
                            <label htmlFor="email" className="form-label" id="email">Email</label>
                            <i class="far fa-envelope"></i>
                            <input type="email" className='form-control' id='email' name='email' />
                        </div> 

                        <div> 
                        <label htmlFor="phone" className="form-label">Phone no.</label>
                        <i class="fas fa-user"></i>
                        <input type="tel"  className='form-control' id='phone' name='phone' />
                        </div> 




                            <div className="mb-4 mt-5">
                            <label className="form-label" htmlFor="query">Your Query</label>
                            <textarea
                                name="message"
                                className="form-control"
                                rows="3"
                            ></textarea>
                            </div>

                            <div className="mb-4 text-center">
                                <button type="submit" id="button" className='btn btn-primary mx-0 my-4'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="popup" id='popup'>
                <img src="./404-tick.png" alt="" />
                <h2>Thank you</h2>
                <p>Your details has been succesfuly submitted. Thanks</p>
                <button className='btn m-0 btn-warning' id='Rpop' type='button'>OK</button>
            </div>
        </section>
    )
}


