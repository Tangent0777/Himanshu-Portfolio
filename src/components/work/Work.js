import "./work.css";
import Image from "next/image";


import project3 from "../../../public/project3.png";
import project4 from "../../../public/project4.png";

export default function Work() {
  return (
    <div className="work mainbox">
     
     
      <a href="/wrong-upi-payments-case-study">
        <div className="work-box project3">
          <div className="work-box-text">
            <div className="inner-text">
              <div className="work-label">
                <p className="label-text ">App Design - Sprint</p>
              </div>
              <h2 className="work-heading">Preventing Wrong UPI Payments</h2>
              <p className="work-subtext">
                New UPI feature to solve the issue of accidentaly sending money
                to wrong person
              </p>
            </div>
          </div>
          <div className="work-box-img">
            <Image className="project-image" src={project4} alt="image" />
          </div>
        </div>
      </a>
      <a href="/sitar-classes">
        <div className="work-box project4">
          <div className="work-box-text">
            <div className="inner-text">
              <div className="work-label whitebg">
                <p className="label-text black">Web Design</p>
              </div>
              <h2 className="work-heading white">Ratna Lahiri Sitar</h2>
              <p className="work-subtext white">
                Landing page and Website Design
              </p>
            </div>
          </div>
          <div className="work-box-img">
            <Image className="project-image" src={project3} alt="image" />
          </div>
        </div>
      </a>
    </div>
  );
}
