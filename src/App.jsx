import React, { useState } from "react";
import FurnitureLoader from "./component/laodingPage/LoadingPage";
import Home from "./component/home/Home";
import Header from "./component/header/Header";
import Project from "./component/project/Project";
import About from "./component/about/About";
import Contact from "./component/contactUs/ContactUs";
import Work from "./component/work/Work";
import Services from "./component/services/Services";
import WhyChooseUs from "./component/whyChooseUs/WhyChooseUs";
import OurClient from "./component/ourClients/OurClient";
import Footer from "./component/footer/Footer";

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div>
      {loading ? (
        <FurnitureLoader onComplete={() => setLoading(false)} />
      ) : (
        <>
          <Header />
          <div id="home">
            <Home />
          </div>
          <div id="our-sites">
            <Project />
          </div>
          <div id="our-work">
            <Work />
          </div>
          <Services />
          <WhyChooseUs />
          <OurClient />
          <Footer />
          {/* <div id="about">
            <About />
          </div>
          <div id="contact">
            <Contact />
          </div> */}
        </>
      )}
    </div>
  );
};

export default App;
