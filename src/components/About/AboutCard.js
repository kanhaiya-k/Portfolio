import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Kanhaiya Kumar </span>
            from <span className="purple"> Indore M.P , India.</span>
            <br />I am an aspiring web developer with the ability to translate
            business requirements into technical solutions.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Everyday life is like programming, I guess.If you love something
            you can put beauty on it."{" "}
          </p>
          <footer className="blockquote-footer">Kanhaiya </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
