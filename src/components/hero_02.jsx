import './css/hero_02.css'

export default function Hero02(){
    return(
        <section className='hero02'>
            <div className="container text-center">
            <div className="hero2--cover-text"> <h1>Software Developement & <span className='underline'>IT Services</span> </h1> </div>
            <div className="row justify-content-around">
                <div className="feat col-md-4">
                    <img src="/icon_design.svg" alt="" />
                    <h4 className='feat-title'>Web design</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="feat col-md-4">
                    <img src="/icon_branding.svg" alt="" />
                    <h4 className='feat-title'>Branding</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="feat col-md-4">
                    <img src="/icon_webdev.svg" alt="" />
                    <h4 className='feat-title'>Development</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
            <div className="row justify-content-around">
                <div className="feat col-md-4">
                    <img src="/icon_marketing.svg" alt="" />
                    <h4 className='feat-title'>Marketing</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="feat col-md-4">
                    <img src="/icon_bisconsul.svg" alt="" />
                    <h4 className='feat-title'>Strategy</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="feat col-md-4">
                    <img src="/icon_trp.svg" alt="" />
                    <h4 className='feat-title'>ERP</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem10</p>
                </div>
            </div>
            </div>
        </section>
    )
}
