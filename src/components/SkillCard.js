import React,{useEffect} from "react";
import {Card} from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";
function SkillCard(props) {
  useEffect(() => {
    Aos.init({ duration: 1100});
  }, []);
  return (
    <Card style={{ width: "20rem" }} className="skill-card" data-aos="zoom-in">
      <div className="image-section">
      <Card.Img variant="top" src={props.image} className="card-image" />
      </div>
      <Card.Body>
        <Card.Title className="card-title">{props.title}</Card.Title>
        <Card.Text className="card-content">
          <p>{props.content}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
export default SkillCard;
