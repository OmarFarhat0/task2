import "./App.css";
import Properties from "./components/properties/Properties";
import Navbar from "./components/navbar/Navbar";
import Slider from "./components/slider/Slider";
import VideoView from "./components/videoView/VideoView";
import Footer from "./components/footer/Footer";
import Form from "./components/form/Form";
import GoogleMap from "./components/googleMap/GoogleMap";
import ContactUs from "./components/contactUs/ContactUs";
import ContactCard from "./components/contactCard/ContactCard";
import BestDeal from "./components/bestDeal/BestDeal";
import Featured from "./components/featured/Featured";

function App() {
  return (
    <>
      <nav className="navbar">
        <Navbar
          nameWebsite="VILLA"
          menuItem={["Home", "Properties", "Property Details", "Conatct Us"]}
          indexLinkActive={0}
          contentBtn="Schedule a visit"
        />
      </nav>

      <section className="slider">
        <Slider
          city="Tornoto"
          country="Canada"
          text="HURRY! GET THE BEST VILLA FOR YOU"
          imagesLinks={[
            "../../../public/images/Slider/banner-01.jpg",
            "../../../public/images/Slider/banner-02.jpg",
            "../../../public/images/Slider/banner-03.jpg",
          ]}
        />
      </section>

      <section className="featured">
        <Featured
          questions={[
            { qusestion: "question example", answer: "answer example" },
          ]}
          features={[
            {
              whatFeature: "Total Flat Space",
              valFeature: "185m",
              srcLogo: "../../../public/images/info-icon-01.png",
            },
            {
              whatFeature: "Total Flat Space",
              valFeature: "185m",
              srcLogo: "../../../public/images/info-icon-01.png",
            },
            {
              whatFeature: "Total Flat Space",
              valFeature: "185m",
              srcLogo: "../../../public/images/info-icon-01.png",
            },
          ]}
          srcImage="../../../public/images/featured/featured.jpg"
          nameSection="FEATURED"
          title="Best Appartment & Sea View"
        />
      </section>

      <section className="videoView">
        <VideoView
          nameSection="VIDEO VIEW"
          title="Get Closer View & Different Feeling"
          srcImage="../../../public/images/videoView/background.jpg"
          srcPoster="../../../public/images/videoView/video-frame.jpg"
          srcVideo="../../../public/videos/video.mp4"
        />
      </section>

      <section className="bestDeal">
        <BestDeal
          nameSection="BEST DEAL"
          title="Find Your Best Deal Right Now!"
          opetions={["Appartment", "Villa House", "Penthouse"]}
        />
      </section>

      <section className="properties">
        <Properties
          nameSection="PROPERTIES"
          title="We Provide The Best Property You Like"
        />
      </section>

      <section className="contactUs">
        <ContactUs
          srcImage="../../../public/images/videoView/background.jpg"
          nameSection="Contact Us"
          title="Get In Touch With Our Agents"
        />
      </section>

      <footer className="footer">
        <Footer text="Copyright © 2048 Villa Agency Co., Ltd. All rights reserved. Design: TemplateMo" />
      </footer>
    </>
  );
}

export default App;
