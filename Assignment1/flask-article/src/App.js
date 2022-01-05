import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container, Button } from 'react-bootstrap';
import Moment from 'react-moment';
import './App.css';

function App() {
  const [date, setDate] = useState(new Date());
  const [getArticle, setGetArticle] = useState([]);
  const [timecolor] = useState("clock");
  const [isActive, setActive] = useState(false);
  const [glow, setGlow] = useState('tease');

  function tick(){
    setDate(new Date())
  }

  const toggleClass = () =>{
    setActive(!isActive);
    if(!isActive){
      setGlow('shadowText')
    }
    else{
      setGlow('tease')
    }
  }

  useEffect(() => {
    fetch('/articles').then(res => res.json()).then(data => {
      setGetArticle(data); 
    })
    const interval = setInterval(tick, 1000)
    return function(){
        clearInterval(interval)
    }
  }, []);

  return (
    
    <div style={{backgroundColor:"#FAEBD7"}}>
      <h1 className ={timecolor}>{date.toLocaleTimeString()}</h1>
      <Container>
        <Card className="background">
          <Card.Header className="text-center" style={{backgroundColor:"#708090"}}>
            <h1>React Assignment 1</h1>
          </Card.Header>
          {getArticle.map((articles) => (
            <Card.Body className="m-4 bg-transparent border border-secondary" >
              <Card.Title className={glow} style={{ color: "474a52" }}>{articles.title}</Card.Title> <hr />
              <Card.Text className={glow} style={{ color: "white" }}>{articles.body}</Card.Text> <br />
              <Moment className={glow} style={{ color: "white" }} format="dddd , DD / MMM / YYYY, h:mm:ss a">{articles.date}</Moment>
            </Card.Body>
          ))}
          <Button class="btn" onClick={toggleClass}>Click me!</Button>
        </Card>
      </Container>
    </div>
  );
}

export default App;
