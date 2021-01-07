import React from 'react';
import axios from 'axios'; //http client
import './createProfile.css';


export class CreateProfile extends React.Component {

    constructor() {
        super();//setting instance variables and functions 
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeAge = this.onChangeAge.bind(this);
        this.onChangeWeight = this.onChangeWeight.bind(this);
        this.onChangeHeight = this.onChangeHeight.bind(this);

        this.state = {
            Name: '',
            Age: '',
            Weight: '',
            Height: ''
        }
    }

    onChangeName(e) {//functions for taking in values
        this.setState({
            Name: e.target.value
        });
    }

    onChangeAge(e) {
        this.setState({
            Age: e.target.value
        });
    }

    onChangeWeight(e) {
        this.setState({
            Weight: e.target.value
        })
    }

    onChangeHeight(e) {
        this.setState({
            Height: e.target.value
        })
    }

    onSubmit() {//submission alert
        alert('Your body has been recorded! '
                + 'Name:'
                + this.state.Name + ' Age:'
                + this.state.Age + ' Weight:'
                + this.state.Weight + ' Height:' +
                +this.state.Height);

        const newBod = {
            name: this.state.Name,
            age: this.state.Age,
            weight: this.state.Weight,
            height: this.state.Height
        }
        axios.post('http://localhost:4000/api/rodsbods', newBod)// passing up an object
            .then((res) => {
                console.log(res);
                
            })
            .catch((err) => {
                console.log(err);
            });
    }
    render() {//GUI
        return (

            <div style={{
                backgroundImage: `url(${process.env.PUBLIC_URL + 'https://imgix.bustle.com/uploads/shutterstock/2020/1/2/3bbb41da-a48c-48d4-9953-d5920c71c21b-shutterstock-1519653725.jpg?w=800&fit=crop&crop=faces&auto=format%2Ccompress'})`,

                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                width: '100vw',
                height: '100vh'
            }}>
                <div className="wrapper">
                    <div className="form-wrapper">
                        <h1>Create Profile</h1>
                        <form onSubmit={this.onSubmit}>
                            <div className='bodName'>
                                <label>Enter Name</label>
                                <input
                                    type='text'
                                    className='form-control'
                                    value={this.state.Name}
                                    onChange={this.onChangeName}
                                ></input>
                            </div>
                            <div className='bodAge'>
                                <label>Enter Age</label>
                                <input
                                    type='text'
                                    className='form-control'
                                    value={this.state.Age}
                                    onChange={this.onChangeAge}
                                ></input>
                            </div>
                            <div className='bodWeight'>
                                <label>Enter Weight</label>
                                <input
                                    type='number'
                                    className='form-control'
                                    value={this.state.Weight}
                                    onChange={this.onChangeWeight}
                                ></input>
                            </div>
                            <div className='bodHeight'>
                                <label>Enter Height</label>
                                <input
                                    type='number'
                                    row='3'
                                    className='form-control'
                                    value={this.state.Height}
                                    onChange={this.onChangeHeight}
                                ></input>
                            </div>
                            <div className='createBod'>
                                <button type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}