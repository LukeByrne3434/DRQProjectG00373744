import React from 'react';
import { BodyItem } from './bodyItem';


export class Rodbods extends React.Component{

    render(){
        return this.props.rodsbods.map( (rodsbod)=>{
            return <BodyItem key={rodsbod._id} rodsbod={rodsbod}
            ReloadData={this.props.ReloadData}></BodyItem>
            });    
           

    }
   
}
 