import React from 'react'
import './CardItem.scss';
import {useDispatch} from 'react-redux'
import {deleteCharacter} from '../../features/character/characterSlice';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import defaultImg from '../../assets/star_wars.webp'
export default function CardItem({item}) {
    
  const dispatch = useDispatch();

  return (
    <div className="item-container ">
       <Card>
        <Card.Img variant="top" src={defaultImg}/>
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>
          <ListGroup variant="flush">
       
          <ListGroup.Item> Height: {item.height}cm</ListGroup.Item>
          <ListGroup.Item> Mass: {item.mass}</ListGroup.Item>
          <ListGroup.Item>Eye Color: {item.eye_color}</ListGroup.Item>
          <ListGroup.Item>Hair Color: {item.hair_color}</ListGroup.Item>

      </ListGroup>
          
          </Card.Text>
          <Button variant="danger" onClick={()=>{dispatch(deleteCharacter(item))}}>Delete</Button>
        </Card.Body>
    </Card>


        
       
        

    </div>
  )
}
