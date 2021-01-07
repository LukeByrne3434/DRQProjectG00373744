import React from 'react';
import { Rodbods } from './rodbods';
import axios from 'axios';

export class EditProfile extends React.Component {

    constructor(){
        super();
        this.ReloadData = this.ReloadData.bind(this);
    }
    state = {
        rodsbods: []

    };

    componentDidMount() {
        axios.get('http://localhost:4000/api/rodsbods')
            .then(
                (response) => {
                    this.setState({ rodsbods: response.data })
                    console.log(this.state.rodbods)
                })
            .catch(
                (error) => {
                    console.log(error)
                });
    }

    ReloadData(){
        axios.get('http://localhost:4000/api/rodsbods')
        .then(
            (response) => {
                this.setState({ rodsbods: response.data })
            })
        .catch(
            (error) => {
                console.log(error)
            });
    }

    render() {
        return (
            <div>
                
                <Rodbods rodsbods={this.state.rodsbods} ReloadData={this.ReloadData} ></Rodbods>
            </div>

        );
    }
}