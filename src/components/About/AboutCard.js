import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Greetings, <br/> I'm <span className="purple">Lokesh Vadla </span>
            hailing from <span className="purple"> Bengaluru, India.</span>
            <br />
            Professionally, I serve as a Software Developer.
            <br />
            My academic journey includes the completion of an Masters in Computer Science from UT Arlington.
            <br />
            <br />
            In addition to coding, I find joy in various activities!!!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
