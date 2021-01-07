import React from 'react';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';   //change url
import { 
    ListGroupItem,  
    ListGroup,
    Button
} from 'reactstrap' // delete button
import axios from 'axios';


export class BodyItem extends React.Component {

    constructor(){
        super();
        this.DeleteRodBod = this.DeleteRodBod.bind(this);
    }

    DeleteRodBod(e){ 
        e.preventDefault(); //stops multiple deletes
        console.log("Delete: "+this.props.rodsbod._id); // log rodbod id to console
        console.log("TEEEEST " +this.props.rodsbod._id)
        axios.delete("http://localhost:4000/api/rodsbods/"+this.props.rodsbod._id)
        .then(()=>{
            this.props.ReloadData();
        })
        .catch();

    }
   
    render() {
        return (
            <div>
                <Card style={{ width: '30rem',marginTop:'2rem' }}>
                <Card.Body>
                <Card.Title>Body Profile</Card.Title>
                    <Card.Text>
                        This is your profile created in order to give you an overview of your physique and health level
                    </Card.Text>
             </Card.Body>
                 <ListGroup className="list-group-flush">
                    <ListGroupItem>Name: {this.props.rodsbod.name}</ListGroupItem>
                     <ListGroupItem>Age: {this.props.rodsbod.age}</ListGroupItem>
                    <ListGroupItem>Weight:{this.props.rodsbod.weight}</ListGroupItem>
                    <ListGroupItem>Height:{this.props.rodsbod.height}</ListGroupItem>
                    
                    
                    </ListGroup>
                    <Card.Body>
                    <Link to={"/goals/"+ this.props.rodsbod._id} className="btn btn-primary">Goals</Link>
                <Button variant="danger" onClick={this.DeleteRodBod}>Delete</Button>  
            </Card.Body>
            </Card>
         

        </div>


               


        );
    }
}   {/* <Card>
                <Card.Header>{this.props.rodsbod.name}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                    <label>Age</label>
                        {this.props.rodsbod.age}
                        <footer className="blockquote-footer">
                        <label>Weight</label>
                            {this.props.rodsbod.weight}
                        <label>Height</label>
                            {this.props.rodsbod.height}
                        </footer>
                    </blockquote>
                </Card.Body>
                <Link to={"/edit/"+ this.props.rodsbod._id} className="btn btn-primary">Edit</Link>
                <Button variant="danger" onClick={this.DeleteRodBod}>Delete</Button>  
            </Card> */}