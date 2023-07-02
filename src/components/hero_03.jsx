import './css/hero_03.css'

export default function Hero03() {
    return(
        <section className="hero03">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h1>Keep Your Business Safe & <br />Ensure  high Availbility.</h1>
                        <img src="./Rectangle 21.png" alt="" />
                        </div>
                    <div className="hero03--rhs col-md-6">
                        <div className="hero03--rhs">
                            <ul>

                                <li><img src="./checkmark.png" alt="" /> Delivered more than 4k client interaction</li>
                                <li><img src="./checkmark.png" alt="" /> Provided by experts to help challenge activities</li>
                                <li><img src="./checkmark.png" alt="" /> Completed with peer perspectives and advice</li>
                            </ul>
                            <button className="btn">More About us</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}