import React from 'react';
import Container from 'react-bootstrap/Container';

// import InstagramEmbed from 'react-instagram-embed';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'

export default function Bloglandingpage(){

  return(
    <Row xs={1} md={2} className="g-4 my-5" >
    
      <Col>
        <Card >
        <iframe  height={400} src="https://www.youtube.com/embed/NvD76VM3lbI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <Card.Body>
            <Card.Title>HOW TO GET RICH WITH POWER OF COMPOUNDING USING MAGIC OF SIP (SIP का कमाल) | NO RISK | GIGL</Card.Title>
            <Card.Text>
            To is video me ham in questions ke answer denge:-
            <br/>
            Question no 1 :- Mutual funds kya hai aur kaun kaun se hai?<br/ >
            Question 2:- Ki  SIP kya hai<br/>
            Question 3:- Kaun sa mutual fund better hai? aur kisme kitne percent return 
            milega?
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card>
          {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
          <iframe  height={400} src="https://www.youtube.com/embed/whmLq3wltfc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <Card.Body>
          <Card.Title>The Ultimate Stock Market Video for Serious Investors .</Card.Title>
            <Card.Text>
            In this video, we'll be covering the basics of the stock market and how to get started as a new investor. We'll discuss the compounding benefits in the stock market, a simple strategy to become a crorepati, how to pick stocks, and the strategy that Pranjal Kamra uses. 
            Whether you're just starting out or looking to brush up on your knowledge, this video has something for everyone...
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card>
          {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
          <iframe height={400}  src="https://www.youtube.com/embed/-FP7IVNN4bI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <Card.Body>
          <Card.Title>The Ultimate Stock Market Video for Serious Investors .</Card.Title>
          <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card>
        <iframe height={400} src="https://www.youtube.com/embed/1gWwlIgua2g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <Card.Body>
            <Card.Title>13 HACKS to ENSURE YOU DONT GET POOR! </Card.Title>
            <Card.Text>
            Saving money is a lifehack and you need to know these 13 (+ the biggest lifehack) to save more money...
          </Card.Text>
          </Card.Body>
        </Card>
      </Col>
   
  </Row>
  )


}
