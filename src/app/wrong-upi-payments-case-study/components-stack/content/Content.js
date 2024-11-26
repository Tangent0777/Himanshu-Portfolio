import "./content.css";
import Image from "next/image";
// import upi from "../../../../../public/upi.png";
import upipersona1 from "../../../../../public/upipersona1.jpg";
import upipersona2 from "../../../../../public/upipersona2.jpg";
import sitemap from "../../../../../public/sitemap.png";
import solution1 from "../../../../../public/solution1.png";
import solution2 from "../../../../../public/solution2.png";
import solution3 from "../../../../../public/solution3.png";
import solution4 from "../../../../../public/solution4.png";
import solution5 from "../../../../../public/solution5.png";

export default function Content() {
  return (
    <div className="content-container">
      <div className="stack-section section1">
        <div className="stack-textbox button-textbox">
          <div className="heading-box">
            <h2 className="stack-heading">Preventing Wrong UPI Transactions</h2>
          </div>
          {/* <div className="button-container">
            <a href="https://www.notedown.in/" target="_blank">
              <div className="site-button">
                <p className="site-button-text">Live Site</p>
                <Image src="/arrow.png" width="19" height="19" />
              </div>
            </a>
          </div> */}
        </div>
        {/* <Image className="section1-video" src={upi} alt="image"/> */}
      </div>
      <div className="stack-section section2">
        <div className="stack-textbox">
          <p className="stack-subtext">Introduction</p>
          <p className="stack-text">
            Out of 8400 crore UPI transactions in 2023, around 1.5
            crore&#40;0.017%&#41; transactions were sent to the wrong UPI
            address, which can value upto ₹1400 crores. I designed a feature
            which can be integrated in the current UPI interface to prevent
            wrong transactions.
          </p>
          <div className="intro-box">
            <div className="intro-box-inner">
              <p className="intro-subtext">My Role</p>
              <p className="intro-text">
                Product Designer, Research, Prototyping
              </p>
            </div>
            <div className="intro-box-inner">
              <p className="intro-subtext">Tools</p>
              <p className="intro-text">Figma</p>
            </div>
            <div className="intro-box-inner">
              <p className="intro-subtext">Timeline</p>
              <p className="intro-text">2 days- Sprint</p>
            </div>
          </div>
        </div>
        {/* <Image className="section2-img" src={section2} alt="image" /> */}
      </div>
      <div className="stack-section section3">
        <div className="stack-textbox">
          <p className="stack-subtext">Problem Statement</p>
          <h2 className="stack-heading">
            No feasible way to reverse wrong transactions.
          </h2>
          <p className="stack-text spacer">
            Once the payment is transferred to the wrong bank account.
            <ul>
              <li>Transaction cannot be reversed from the UPI application</li>
              <li>You have to contact the bank and file a complaint.</li>
              <li>
                If the receiver&#39;s account is in a different bank, you have
                to physically go over to that branch.
              </li>
              <li>
                The money can be only reversed if the receiver also agrees.
              </li>
            </ul>
          </p>
        </div>
      </div>
      <div className="stack-section-minor section4">
        <div className="stack-textbox">
          <p className="stack-subtext">User Research</p>
          <p className="stack-text short">
            I conducted an online survey with 40 participants, and interviews
            with 2 participants to gain insights into the specifics and reasons
            for the problem.
          </p>
        </div>
        <div className="section4-graphic">
          <div className="section4-graphic-innerbox">
            <p className="inner-heading">Analysis</p>
            <p className="inner-text">
              <ul>
                <li>
                  30% of people have faced wrong UPI transactions once in their
                  life.&#40;13 out of 40&#41;
                </li>
                <li>100% of these are P2P transactions.</li>
                <li>10 out of 13 are due to mistyping.</li>
                <li>0 wrong transactions in QR based payments.</li>
              </ul>
            </p>
          </div>
          <div className="section4-graphic-innerbox">
            <p className="inner-heading">Findings</p>
            <p className="inner-text">
              <ul>
                <li>
                  Majority of errors occur in P2P payments&#40;between 2
                  persons&#41;.
                </li>
                <li>
                  The main reason is adding an incorrect UPI id or number or
                  mistakently selecting a similar name.
                </li>
                <li>
                  Cases where an incorrect payment amount was entered are also
                  present.
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
      <div className="stack-section-minor section5">
        <div className="stack-textbox">
          <p className="stack-subtext">User Persona</p>
          <p className="stack-text short">
            The User Group includes everyone who uses UPI for payments.
          </p>
        </div>
        <div className="section5-graphic">
          <div className="section5-graphic-innerbox">
            <div className="persona-name-box">
              <div className="persona-img-box">
                <Image className="persona-img" src={upipersona1} alt="image" />
              </div>
              <div className="perosna-name-text-box">
                <p className="persona-heading">Rahul&#40;22&#41;</p>
                <p className="persona-subheading">
                  People who enter wrong details
                </p>
              </div>
            </div>
            <div className="persona-box">
              <p className="persona-inner-heading">about</p>
              <p className="persona-inner-text">
                Rahul is a college student who lives in an urban city. He&#39;s
                doing his bachelors in technology.
              </p>
            </div>
            <div className="persona-box">
              <p className="persona-inner-heading">problems</p>
              <p className="persona-inner-text">
                He has often encountered issues with wrong payments caused by
                typing errors.
              </p>
            </div>
          </div>
          <div className="section5-graphic-innerbox">
            <div className="persona-name-box">
              <div className="persona-img-box">
                <Image className="persona-img" src={upipersona2} alt="image" />
              </div>
              <div className="perosna-name-text-box">
                <p className="persona-heading">Rajesh&#40;50&#41;</p>
                <p className="persona-subheading">
                  People who fall into online scams
                </p>
              </div>
            </div>
            <div className="persona-box">
              <p className="persona-inner-heading">about</p>
              <p className="persona-inner-text">
                Rajesh is a teacher who lives in a small town and sends money
                through UPI to his daughter every month.
              </p>
            </div>
            <div className="persona-box">
              <p className="persona-inner-heading">problems</p>
              <p className="persona-inner-text">
                He has been scammed once and is hesitant to use UPI and prefers
                to visit bank for transactions.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="stack-section-minor section5">
        <div className="stack-textbox">
          <p className="stack-subtext">Site Mapping</p>
          <p className="stack-text">
            Deciding and organizing the content structure of the website.
          </p>
        </div>
        <div className="section6-graphic">
          <Image className="sitemap-img" src={sitemap} alt="image" />
        </div>
      </div> */}
      <div className="stack-section section6">
        <div className="stack-textbox">
          <p className="stack-subtext">Proposed Solution</p>
          <h2 className="stack-heading">
            UPI Suraksha Kavach - undo transactions for a specified time.
          </h2>
        </div>
      </div>
      <div className="stack-section-minor section7">
        {/* <div className="stack-textbox">
          <p className="stack-subtext">ReBranding</p>
        </div> */}
        <div className="section6-graphic">
          <Image className="rebrand-img" src={solution1} alt="image" />
        </div>
        <div className="section6-graphic">
          <Image className="rebrand-img" src={solution2} alt="image" />
        </div>
        <div className="section6-graphic">
          <Image className="rebrand-img" src={solution3} alt="image" />
        </div>
        <div className="section6-graphic">
          <Image className="rebrand-img" src={solution4} alt="image" />
        </div>
        <div className="section6-graphic">
          <Image className="rebrand-img" src={solution5} alt="image" />
        </div>
        {/* <div className="stack-textbox">
          <p className="stack-subtext">NoteDown Website</p>
        </div>
        <div className="section7-graphic">
          <Image className="rebrand-img" src={websitedisplay} alt="image" />
        </div> */}
      </div>
      {/* <div className="stack-section-minor section8">
        <div className="stack-textbox ">
          <p className="stack-subtext">Project Outcomes</p>
          <p className="stack-text short">
            Leads through website increased by 200%
          </p>
        </div>
        <div className="section4-graphic res900">
          <div className="section4-graphic-innerbox">
            <p className="inner-heading">
              200% increase in leads within 2 weeks of launch.
            </p>
            <p className="inner-text">
              NoteDown saw a direct increase in clients inquiring about their
              services through the website.
            </p>
          </div>
          <div className="section4-graphic-innerbox">
            <p className="inner-heading">45% NPS increase after launch</p>
            <p className="inner-text">
              Direct improvement in brand perception and positive response from
              the target audience.
            </p>
          </div>
          <div className="section4-graphic-innerbox">
            <p className="inner-heading">
              Greater brand awareness and discoverability
            </p>
            <p className="inner-text">
              NoteDown website visitors saw a wider variety of demographics from
              clients, to theatre students, and video content enthusiasts.
            </p>
          </div>
        </div>
      </div> */}
      <div className="stack-section-minor section9">
        <div className="stack-textbox">
          <p className="stack-subtext">Next Steps</p>
          <p className="stack-text short">
            By collaborating with banks and UPI, a more robust method to undo
            transactions can be implemented.
          </p>
        </div>
        <div className="section9-graphic">
          <div className="section9-graphic-innerbox">
            <p className="inner-heading">01</p>
            <p className="inner-text">
              Making a permanent undo feature to solve the issue of wrong
              transactions.
            </p>
          </div>
          <div className="section9-graphic-innerbox">
            <p className="inner-heading">02</p>
            <p className="inner-text">
              Implementing features to reduce and prevent the ever-increasing
              frauds and scams.
            </p>
          </div>
          <div className="section9-graphic-innerbox">
            <p className="inner-heading">03</p>
            <p className="inner-text">
              Conduct better research and testing to furthur iterate and refine
              the feature.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
