import Navbar from "../components/Navbar";
import Hero from "../components/hero";
import Hero02 from "../components/hero_02";
import Hero03 from "../components/hero_03";
import Hero04 from "../components/hero_04";
import Footer from "../components/footer";
import Aboutus from "../components/aboutus";
import Form from "../components/form";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Hero02 />
      <Hero03 />
      <Aboutus />
      <Hero04 />
      <Form />
      <Footer />
    </div>
  );
}
