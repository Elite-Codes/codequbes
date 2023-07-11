import "./css/hero.css";

export default function Hero() {
  return (
    <section className="hero d-flex flex-column justify-content-center">
      <div className="hero--text">
        <h1 className="primary-heading">
          {" "}
          We Provide You <span>Custom</span> <br />
          <span>Softwares</span> And <span>IT Services</span>
        </h1>
        <p className="secondary-heading">
          We are a full service technology and digital solutions company with
          over 20 years of experience in industry.
        </p>
      </div>
      <div className="button">
        <a href="#" className="btn btn--primary--animated">
          Learn More
        </a>
      </div>
    </section>
  );
}
