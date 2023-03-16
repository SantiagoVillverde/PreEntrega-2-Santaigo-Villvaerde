import Card from "react-bootstrap/Card";
import "./item.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

function Item({ product }) {
  return (
    <Row xs={2} md={3} className="g-1">
      <Col>
        <Card style={{ width: "16rem" }}>
          <Card.Img variant="top" src={product.image} />
          <Card.Body>
            <Card.Title>{product.name} </Card.Title>
            <Card.Text>$ {product.price}</Card.Text>
            <div className="buttons">
              <button className="normalButton"> <Link to={`/item/${product.id}`}>Detalles</Link></button>
              <button className="normalButton">Añadir al carrito</button>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default Item;
