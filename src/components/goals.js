import React from 'react';
import axios from 'axios'; //http client
import './createProfile.css';


export class Goals extends React.Component {

    constructor() {
        super();//setting instance variables and functions 
        this.onSubmit = this.onSubmit.bind(this);
        this.onSetGoal = this.onSetGoal.bind(this);
        
        //storing instance versions of data
        this.state = {
            Height: '',
            Weight:'',
            Goal: '',
            BMI: '',
            CalorieCount: '',
            test: ''
          
        }

        
    }
    //function for stoing data
    componentDidMount(){
        

        axios.get('http://localhost:4000/api/rodsbods/'+this.props.match.params.id)
        .then(response => {
            this.setState({
               
                Height:response.data.height,
                Weight:response.data.weight 
                 
            })
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    //set goal weight
    onSetGoal(e) {
        this.setState({
            Goal: e.target.value
           
        });

        console.log("teeest2" +e.target.value)
    }
    //function for button 
    onSubmit() {
            //calc bmi
            this.state.BMI = ((this.state.Weight/((this.state.Height/100)*this.state.Height/100))).toFixed(2);

            var calc = this.state.Weight - this.state.Goal

            const calCount1 = 2200;
            const calCount2 = 2000;
            const calCount3 = 1800;
            //calculations for recommended cal count
            if(calc<=5)  {
                this.state.CalorieCount = calCount1;
            }
            if(calc>=5 && calc<=10 ) {
                this.state.CalorieCount = calCount2;
            }
            else if(calc>=10){
                this.state.CalorieCount = calCount3; 
            }else{
                this.state.CalorieCount = 1000; 
            }

         
            //formatting data for api
            const newGoal ={
                Goal: this.state.Goal,
                BMI: this.state.BMI,
                CalorieCount: this.state.CalorieCount                 
            }
            //adding data to api
            axios.put('http://localhost:4000/api/rodsbods/'+this.props.match.params.id , newGoal)// passing up an object
            .then((res)=>{
                console.log(res);
            })
            .catch((err)=>{
                console.log(err);
            });
    }
    render() {//GUI
        return (

<div style={{
                              backgroundImage: `url(${process.env.PUBLIC_URL + 'https://m0.joe.co.uk/wp-content/uploads/2018/12/07120549/iStock-915116594.jpg'})`,

                              backgroundPosition: 'center',
                              backgroundSize: 'cover',
                              backgroundRepeat: 'no-repeat',
                              width: '100vw',
                              height: '100vh'}}>


            <div className="wrapper">
                <div className="form-wrapper">
                    <h1>Enter Goal Weight (KG)</h1>
                    <form onSubmit={this.onSubmit}>
                        <div className='goal'>                          
                            <input
                                type='text'
                                className='form-control'
                                value={this.state.Goal}
                                onChange={this.onSetGoal}
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