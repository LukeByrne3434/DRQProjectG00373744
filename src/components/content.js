import { get } from 'mongoose';
import React from 'react';
import './content.css';


export class Content extends React.Component {

      render() {

            return (
                  <div>
                        <h1>Welcome to BODYCHECK™! </h1>

                        <div style={{
                              backgroundImage: `url(${process.env.PUBLIC_URL + 'https://img.redbull.com/images/w_3000/q_auto,f_auto/redbullcom/2017/01/12/2889b109-1133-40b4-9745-3e077af617e2/ashling-thompson-russian-twist'})`,

                              backgroundPosition: 'center',
                              backgroundSize: 'cover',
                              backgroundRepeat: 'no-repeat',
                              width: '100vw',
                              height: '100vh'

                              
                        }}>
                        </div>
                  </div>

            );
      }
}