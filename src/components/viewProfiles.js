import React from 'react';
import { Rodbods } from './rodbods';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import {Container} from 'reactstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import {Link} from 'react-router-dom';   //change url
import { 
    ListGroupItem,  
    ListGroup,
    Button,
    
} from 'reactstrap'

class ViewProfiles extends React.Component {
//creating localised storage for api
    constructor(){
        super();
        this.state = {
            items: [],
            isLoaded: false,
          };
    }
//accessing api
    componentDidMount() {
        fetch('http://localhost:4000/api/rodsbods')
          .then(res => res.json())
          .then(result => {
            this.setState({
              isLoaded: true,
              items: result
            });
          });
      }

   
      render() {
        const { items } = this.state;
        return (
      
                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {items.map(({ name, age, weight, height,bmi,calorieCount, goal}) => (
                                //GUI outputting data from map 
                                <Card style={{ width: '28rem', marginLeft: 'auto', marginRight: 'auto', marginTop: '2rem' }} border="success" className="bg-transparent mb-2" >
                                    <Card.Header className="whiteColor">{name}'s  Profile</Card.Header>
                                    <Card.Body>
                                        <Card.Text className="whiteColor">Name:{name}</Card.Text>
                                        <Card.Text className="whiteColor">Age: {age} </Card.Text>
                                        <Card.Text className="whiteColor">Current Weight: {weight}</Card.Text>
                                        <Card.Text className="whiteColor">Height: {height}</Card.Text>
                                        <Card.Text className="whiteColor">BMI: {bmi}</Card.Text>
                                        <Card.Text className="whiteColor">Recommended Calorie Intake: {calorieCount}</Card.Text>
                                        <Card.Text className="whiteColor">Target Weight: {goal}</Card.Text>
                                    </Card.Body>
                                </Card>
                        ))}
                    </TransitionGroup>
                </ListGroup>

        )
    }
}


    export default ViewProfiles