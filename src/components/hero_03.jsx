import './css/hero_03.css'

export default function Hero03() {
    return(
        <section className="hero03">
            <div className="container">
                <div className="row">
                    <div className="hero03--rhs col-md-6">
                        <div className="hero03--rhs d-flex justify-content-sm-center ">
                        <h1>Keep Your Business Safe & <br />Ensure  high Availbility.</h1>
                        <p className='title--describe'>Invest in custom website design & development with marketing solutions for a successful online presence and increased traffic.</p>
                            <ul className='p-0'>
                                <li><img src="./svgexport-7.svg" alt="" /> Delivered more than 4k client interaction</li>
                                <li><img src="./svgexport-7.svg" alt="" /> Provided by experts to help challenge activities</li>
                                <li><img src="./svgexport-7.svg" alt="" /> Completed with peer perspectives and advice</li>
                            </ul>
                            <button className="btn mx-0 hero03--btn mb-sm-5">Explore More &rarr;</button>
                        </div>
                    </div>
                    <div className="hero03-img col-md-6">
                        <img src="./dashboard.webp" alt="" />
                        </div>
                </div>
            </div>
        </section>
    )
}