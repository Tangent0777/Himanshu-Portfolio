import "./content.css";
import Image from "next/image";
import section2 from "../../../../../public/section2.png";
import persona1 from "../../../../../public/persona1.png";
import persona2 from "../../../../../public/persona2.png";
import sitemap from "../../../../../public/sitemap.png";
import rebrand from "../../../../../public/rebrand.png";
import sitar1 from "../../../../../public/sitar1.png";
import sitar2 from "../../../../../public/sitar2.png";

export default function Content() {
  return (
    <div className="content-container">
      <div className="stack-section section1">
        <div className="stack-textbox button-textbox">
          <div className="heading-box">
            <h2 className="stack-heading">
              Landing Page and Online Course Website Design for Ratna Lahiri
              Sitar Classes
            </h2>
          </div>
        </div>
        {/* <video
          className="section1-video"
          preload="none"
          autoPlay
          muted={true}
          loop
        >
          <source src="/medias/website.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
      </div>
      <div className="stack-section section2">
        <div className="stack-textbox">
          <p className="stack-subtext">Introduction</p>
          <p className="stack-text">
            I designed a landing page and an online course website for a free
            online Sitar Course launched by Ratna Lahiri, a sitar teacher with
            decades of experience. The landing page focuses of converting
            audience directed from social media platforms.
          </p>
          <div className="intro-box">
            <div className="intro-box-inner">
              <p className="intro-subtext">My Role</p>
              <p className="intro-text">
                Product Analyst and Designer, Research,
                <br /> Prototyping
              </p>
            </div>
            <div className="intro-box-inner">
              <p className="intro-subtext">The Team</p>
              <p className="intro-text">1 Designer, 1 developer</p>
            </div>
            <div className="intro-box-inner">
              <p className="intro-subtext">Timeline</p>
              <p className="intro-text">6 weeks</p>
            </div>
          </div>
        </div>
        {/* <Image className="section2-img" src={section2} alt="image" /> */}
      </div>

      <div className="stack-section-minor section7">
        <div className="section7-graphic">
          <Image className="rebrand-img" src={sitar1} alt="image" />
          <Image className="sitar-img" src={sitar2} alt="image" />
        </div>
      </div>
      {/* <div className="stack-section-minor section9">
        <div className="stack-textbox">
          <p className="stack-subtext">Next Steps</p>
          <p className="stack-text short">
            Given less timeline and budget restrictions, the project could be
            furthur refined by utilising a bigger research group
          </p>
        </div>
        <div className="section9-graphic">
          <div className="section9-graphic-innerbox">
            <p className="inner-heading">01</p>
            <p className="inner-text">
              Add social proof in the form of testimonials and projects to
              improve lead generation and conversion rate.
            </p>
          </div>
          <div className="section9-graphic-innerbox">
            <p className="inner-heading">02</p>
            <p className="inner-text">
              Cater to a wider audience by adding content not directly aimed at
              lead-generation and service conversion.
            </p>
          </div>
          <div className="section9-graphic-innerbox">
            <p className="inner-heading">03</p>
            <p className="inner-text">
              Conduct better research and testing to furthur iterate and refine
              the structure, content and visuals.
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
}
