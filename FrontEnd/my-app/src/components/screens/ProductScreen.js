import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Row, Col, Image, ListGroup, Button, Card, Container } from "react-bootstrap";
import Rating from "../Rating";
import axios from "axios";

function ProductScreen() {
  const { id } = useParams(); // Extract ID from route params

  const [product, setProduct] = useState(null); // State for product data
  const [loading, setLoading] = useState(true); // State for loading
  const [error, setError] = useState(null); // State for errors

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true); 
        const { data } = await axios.get(`/api/product/${id}`); // Fetch product data
        setProduct(data); 
        setLoading(false); 
      } catch (err) {
        setError(err.message || "Error fetching product details"); // Set error message
        setLoading(false); 
      }
    };

    fetchProduct(); 
  }, [id]);

  if (loading) return <h2>Loading...</h2>; 
  if (error) return <h2 style={{ color: "red" }}>{error}</h2>; // Show error message if any

  return (
    <Container>
      <Link to="/" className="btn btn-dark my-3">
        Retourner
      </Link>

      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>

        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.productname}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} avis`}
                color="#f8e825"
              />
            </ListGroup.Item>
            <ListGroup.Item>Marque: {product.productbrand}</ListGroup.Item>
            <ListGroup.Item>Description: {product.productinfo}</ListGroup.Item>
          </ListGroup>
        </Col>

        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Prix:</Col>
                  <Col>
                    <strong>{product.price} €</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Statut:</Col>
                  <Col>{product.stockcount > 0 ? "In Stock" : "Out of Stock"}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  className="btn-block btn-success"
                  disabled={product.stockcount === 0}
                  type="button"
                >
                 Ajouter Au Panier
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductScreen;
