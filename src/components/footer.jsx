import './css/footer.css'

export default function Footer() {
    return(
        <footer>
            <div className="container">
                <div className="row justify-content-around">
                    <div className="col-md-6 order-1">
                        <img src="./codeqube_logo.svg" alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ipsam atque porro? Dolores, quam quisquam!</p>
                        </div>
                    <div className="col-md-3 order-3">
                        <h3>Useful Links</h3>
                        <ul>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Terms and Conditions</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                        </div>
                    <div className="col-md-3 order-2">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="">Website Development</a></li>
                            <li><a href="">Ecommerce Website Development</a></li>
                            <li><a href="">Search Engine Optimization</a></li>
                            <li><a href="">Digital Marketing</a></li>
                            <li><a href="">Website Security and Maintenance</a></li>
                        </ul>
                        </div>
                </div>
            </div>
        </footer>
    )
}
