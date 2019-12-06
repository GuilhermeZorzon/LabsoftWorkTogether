import React, { Component } from 'react';

import noProf from '../Images/no_profile.png';

class CostumerPage extends Component {
    render() {
        return(
            <div style={{height: '200px', backgroundColor: '#fff'}}>
              <img src={noProf} width='50' style={{position: 'absolute', marginTop: '15px', marginLeft: '15px'}} />
              <div style={{position: 'absolute', marginTop: '15px', marginLeft: '85px',  fontSize: '17px'}}>
                <div style={{display: 'inline-block', fontWeight: 'bold'}}> Maria </div>
                <div> App </div>                  
              </div>
              <div style={{position: 'absolute', marginTop: '90px', marginLeft: '15px',  fontSize: '17px', fontWeight: 'bold'}}> Contato: </div>
              <div style={{display: 'inline-block', position: 'absolute', marginTop: '90px', marginLeft: '92px',  fontSize: '17px'}}>m.aria@usp</div>
              <div style={{position: 'absolute', marginTop: '125px', marginLeft: '15px',  fontSize: '17px', fontWeight: 'bold'}}> Investimento: </div>
              <div style={{display: 'inline-block', position: 'absolute', marginTop: '125px', marginLeft: '133px',  fontSize: '17px'}}>R$ 50.000</div>
              <div style={{position: 'absolute', marginTop: '160px', marginLeft: '15px',  fontSize: '17px', fontWeight: 'bold'}}> Status: </div>
              <div style={{display: 'inline-block', position: 'absolute', marginTop: '160px', marginLeft: '80px',  fontSize: '17px'}}>Em andamento</div>
            </div>
        )
    }
}

export default CostumerPage;