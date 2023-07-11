import './css/form.css'

export default function Form(){
    return(
        <section className="contact--form d-flex align-items-center">
            <div className="contact-con container-lg rounded-4">
                <div className="text-center">
                    <h2>Get in Touch</h2>
                    <p className="lead">Questions to ask? Fill out the form to contact us directly...</p>
                </div>

                <div className="row justify-content-center my-5">
                    <div className="col-lg-6">
                        <form action="#">
                            <label htmlFor="email" className="form-label">Email Address</label>
                            <input type="email" className='form-control' id='email' placeholder='e.g mario@example.com' />

                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className='form-control' id='name' placeholder='e.g mario' />

                            <label htmlFor="subject" className="form-label">What is your Question?</label>
                            <select className="form-select form-select-lg" id="subject">
                                <option value="Pricing" selected>Pricing query</option>
                                <option value="Content" >Content query</option>
                                <option value="Other">Other query</option>
                            </select>

                            <div className="form-floating mb-4 mt-5">
                                {/* <textarea name="" id="query" className='form-control' rows="3"></textarea> */}
                                <textarea class="form-control" id="exampleFormControlTextarea1 " rows="3"></textarea>
                                <label htmlFor="query">Your Query...</label>
                            </div>

                            <div className="mb-4 text-center">
                                <button type='submit' className='btn btn-primary mx-0 my-4'>Submit</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}


