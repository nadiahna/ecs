import React, {useState, useEffect} from 'react';
import {Card, Button, Row, Container} from 'react-bootstrap';
import {FiShoppingCart as Cart} from 'react-icons/fi';
import logo from './logo.svg';
import './App.css';

function App() {

  // const ListLoading = withListLoading(List);
  const [product, setAppState] = useState([]);

  useEffect(() => {
    // setAppState({loading: true});
    const prod = `https://fakestoreapi.com/products`;
    fetch("https://fakestoreapi.com/products/")
            .then(res=>res.json())
            .then(product=>{
              setAppState(product)
              
            })
            .catch(err=>{
              setAppState([]);
            })
  }, [setAppState]);
  console.log(product);

  return (
    <Container>
    <Row>
    {product.map((item, index) =>{
      return(
      <Card style={{ width: '18rem' }} key={index}>
        <Card.Img variant="top" src={item.image} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>{item.description}</Card.Text>
          <Button variant="primary">Add to cart <Cart/></Button>
        </Card.Body>
      </Card>
      )
    })}
      
      </Row>
    </Container>
  );
}

export default App;
