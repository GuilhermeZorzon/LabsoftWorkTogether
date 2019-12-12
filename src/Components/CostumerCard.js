import React, { Component } from 'react';

import noProf from '../Images/no_profile.png';

export const CostumerCard = (props) => {
        return(
            <div style={{height: '200px', backgroundColor: '#fff'}}>
              <img src={noProf} width='50' style={{position: 'absolute', marginTop: '15px', marginLeft: '15px'}} />
              <div style={{position: 'absolute', marginTop: '15px', marginLeft: '85px',  fontSize: '17px'}}>
                <div style={{display: 'inline-block', fontWeight: 'bold'}}> {props.name} </div>
                <div> {props.project} </div>                  
              </div>
              <div style={{position: 'absolute', marginTop: '90px', marginLeft: '15px',  fontSize: '17px', fontWeight: 'bold'}}> Contato: </div>
              <div style={{display: 'inline-block', position: 'absolute', marginTop: '90px', marginLeft: '92px',  fontSize: '17px'}}>{props.contact}</div>
              <div style={{position: 'absolute', marginTop: '125px', marginLeft: '15px',  fontSize: '17px', fontWeight: 'bold'}}> Investimento: </div>
              <div style={{display: 'inline-block', position: 'absolute', marginTop: '125px', marginLeft: '133px',  fontSize: '17px'}}>{props.price}</div>
              <div style={{position: 'absolute', marginTop: '160px', marginLeft: '15px',  fontSize: '17px', fontWeight: 'bold'}}> Status: </div>
              <div style={{display: 'inline-block', position: 'absolute', marginTop: '160px', marginLeft: '80px',  fontSize: '17px'}}>{props.status}</div>
            </div>
        )
}

export default CostumerCard;