import "./css/hero_04.css";

export default function Hero04() {
  return (
    <section className="hero04">
      <div className="container">
        <div className="row justify-content-center">
          <div className="hero04-img col-md-6">
            <img src="./analytics.webp" alt="" />
          </div>
          <div className="hero04--rhs col-md-6 mt-5">
            <div className="hero04--rhs-text">
              <p className="title--wrapper">Audience source monitoring</p>
              <h2>
                Advanced analytics tools to keep you in control & customizable
              </h2>
              <p className="title--describe">
                Pick one of our stock themes, or create your custom theme with
                the most advanced theme editor on any online survey building
                tool.
              </p>
              <ul className="list-rhs p-0">
                <li>
                  <img src="./svgexport-7.svg" alt="" /> Chat prompt module
                  supported
                </li>
                <li>
                  <img src="./svgexport-7.svg" alt="" /> Enjoy unlimited
                  features by paid plans
                </li>
                <li>
                  <img src="./svgexport-7.svg" alt="" /> Manage ultimate
                  conversation
                </li>
              </ul>
              <a href="#" className="btn mx-0 mb-sm-5">
                Explore more &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
