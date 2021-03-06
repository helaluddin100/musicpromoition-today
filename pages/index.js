import Image from "next/image";
import image1 from "../public/assets/image-1.png";
import image2 from "../public/assets/image-2.png";

// Layout and components
import AppLayout from "@components/layout/AppLayout";
import ServiceSection from "@components/sections/ServiceSection";
import VisionSection from "@components/sections/VisionSection";
import AboutSection from "@components/sections/AboutSection";
import FaqSection from "@components/sections/FaqSection";
import ReviewSection from "@components/sections/ReviewSection";
import VideoIntroSection from "@components/sections/VideoIntroSection";
import PricingSection from "@components/sections/PricingSection";
import ImageSection from "@components/sections/ImageSection";
import EngageSection from "@components/sections/EngageSection";

// Images

const Home = () => {
  return (
    <div id="home">
      <div className="page-1">
        <div className="banner-wrapper">
          <div className="banner-inner">
            <div className="col">
              <div className="banner-content">
                <p className="sm-title">Organic & Genre</p>
                <h1 className="banner-title">
                  Targeted <span className="focus">Spotify</span> Promotion
                </h1>
                <p className="banner-des">
                  Get your songs heard by thousands of music lovers. Grow your
                  fanbase.Get featured in hot celebrity curator playlists and
                  skyrocket your Spotify channel popularity.
                </p>
                <a href="" className="custom-btn">
                  GET STARTED
                </a>
              </div>
            </div>
            <div className="col">
              <div className="banner-right">
                <div className="animated ban-a glass-bg">
                  <p className="animate-title">Follower Growth</p>
                  <div className="count-area">
                    <h4>15.7k</h4>
                    <p>New Followers</p>
                  </div>
                  <img src="/assets/home-1/img/2.png" alt="" />
                </div>
                <img
                  src="/assets/home-1/img/3.png"
                  alt=""
                  className="animated ban-b"
                />
                <img
                  src="/assets/home-1/img/4.png"
                  alt=""
                  className="animated ban-c"
                />

                <div className="animated ban-d glass-bg">
                  <div className="animated-card">
                    <p className="animate-title-lg">
                      John Doe <br /> Data
                    </p>
                    <div className="animated-inside">
                      <p>New Growth</p>
                      <h4>6,000</h4>
                    </div>
                    <img
                      src="/assets/home-1/img/5.png"
                      className="joiner-img"
                    />
                  </div>
                </div>

                <div className="animated ban-e glass-bg">
                  <div className="experience-count">
                    <h4>20+</h4>
                    <p>years of Experience </p>
                  </div>
                </div>
                <img
                  src="/assets/home-1/img/7.png"
                  alt=""
                  className="animated ban-f"
                />
                <img
                  src="/assets/home-1/img/1.png"
                  alt=""
                  className="ban-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <ServiceSection type="one" />
      <VisionSection />
      <AboutSection type="one" />
      <PricingSection data={pricingData} type="one" />
      <ImageSection />
      <EngageSection />
      <VideoIntroSection type="one" />
      <FaqSection type="one" />
      <ReviewSection type="one" />
    </div>
  );
};

Home.title = "Music Promotion Home";
Home.layout = AppLayout;

export default Home;

const pricingData = [
  {
    package_type: "basic",
    cur_price: "69",
    off_price: "139 ",
    percent: "50",
    includes: [
      "Reach 10k Audience Base",
      "Distribution To 100 Curators",
      "Distribution To 100 Playlists",
      "Distribution To 100 Radios",
      "Unlimited Revisions",
      "Start Within 24 hours",
      "2-3 Days Delivery",
    ],
    details:
      "Engagement may vary.*Typical engagements on average 5,000 streams and 700 followers organically",
  },
  {
    package_type: "Standard",
    cur_price: "119",
    off_price: "239",
    percent: "50",
    includes: [
      "Reach 10k Audience Base",
      "Distribution To 250 Curators",
      "Distribution To 250 Playlists",
      "Distribution To 250 Radios",
      "Unlimited Revisions",
      "Start Within 24 hours",
      "3-5 Days Delivery",
    ],
    details:
      "Engagement may vary.*Typical engagements on average 15,000 streams and 1800 followers organically",
  },
  {
    package_type: "premium",
    cur_price: "299",
    off_price: "499",
    percent: "50",
    includes: [
      "Reach 10k Audience Base",
      "Distribution To 550 Curators",
      "Distribution To 550 Playlists",
      "Distribution To 550 Radios",
      "Unlimited Revisions",
      "Start Within 24 hours",
      "9-10 Days Delivery",
    ],
    details:
      "Engagement may vary.*Typical engagements on average 50,000 streams and 10000 followers organically",
  },
];
