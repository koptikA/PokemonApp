import React from 'react'
import "./Product.css";
import { Col, Card } from 'react-bootstrap';
import { ROUTE_NAMES } from '../../../../routes/routeNames';
import { Link } from 'react-router-dom';


export const Product = ({ product }) => {
    
  return (
    <Col className="mb-3 col-md-4 col-lg-3 col-6">
        <Link className="product-link" to={`${ROUTE_NAMES.PRODUCTS}/${product.id}`}>
            <Card className="product">
                <div className="product-image">
                    <Card.Img variant="top" src={product.image} />
                </div>
                    
                    <Card.Body>
                        <Card.Title className="product-title">{product.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                            $ {product.price}
                            </Card.Subtitle>
                        <div>
                            <div className="product-stats">
                                {product.stats.map((stat) => {
                                    return (
                                        <div key={stat.title} className="product-stat">
                                        
                                            <div className="product-stat-title">
                                                {stat.title}
                                            </div>
                                            <div className="product-stat-value">
                                                {stat.value}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                            
                        </div>
                    </Card.Body>
                </Card>  
        </Link>
              
    </Col>
  );
};