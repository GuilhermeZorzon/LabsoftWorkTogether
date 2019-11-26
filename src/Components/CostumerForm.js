import React, { Component } from 'react';

import { Textfield, Slider } from 'react-mdl';

class CostumerForm extends Component {
    render() {
        return(
            <div style={{backgroundColor: '#FFF6E6', padding: '0', margin: '0',  width: '100%', height: '820px', marginTop: '-25px'}}>
                <h1 align='center' style={{fontSize: '45px', marginBottom: '0', paddingTop: '10px'}}>Bem vindo ao WorkTogether</h1>
                <h2 align='center' style={{fontSize: '27px', marginTop: '0'}}>Explique sua ideia e te daremos o que você precisa</h2>
                <div align='center'>
                    <hr style={{borderColor: '#F86D04', width: '950px'}}/> 
                </div>
                <div align='center'>
                    <Textfield
                        onChange={() => {}}
                        label="Nome"
                        floatingLabel
                        style={{width: '800px', marginTop: '20px'}}
                    />   
                    <Textfield
                        onChange={() => {}}
                        label="E-mail"
                        floatingLabel
                        style={{width: '800px', marginTop: '20px'}}
                    /> 
                    <Textfield
                        onChange={() => {}}
                        label="Descrição do projeto"
                        rows={3}
                        floatingLabel
                        style={{width: '800px', marginTop: '20px'}}
                    />
                </div>
                <div style={{marginLeft: '250px', width: '850px', marginTop: '75px', marginBottom: '25px'}}>
                    <div style={{marginLeft: '30px', marginBottom: '50px', fontSize: '16px'}}>Quanto você está disposto a investir?</div>
                    <Slider min={0} max={100} defaultValue={50}/>
                    <div style={{marginTop: '25px'}}>
                        <span style={{fontSize: '18px', color: '#F86D04'}}>R$ 10.000,00</span>
                        <span style={{fontSize: '18px', color: '#F86D04', marginLeft: '250px'}}>R$ 50.000,00</span>
                        <span style={{fontSize: '18px', color: '#F86D04', marginLeft: '250px'}}>R$ +110.000,00</span>
                    </div>   
                </div>
                <div>
                    <a href="/" style={{float: 'left', margin: '0', padding: '0'}}>
                        <button style={{marginLeft: '150px', marginTop: '50px', cursor: 'pointer', color: 'white', borderRadius: '10px', border: 'transparent', backgroundColor: '#F86D04', width: '100px', height: '30px'}}>
                            Voltar
                        </button>
                    </a>
                    <a href="/ClientSuccess" style={{float: 'right', margin: '0', padding: '0'}}>
                        <button style={{marginRight: '150px', marginTop: '50px', cursor: 'pointer', color: 'white', borderRadius: '10px', border: 'transparent', backgroundColor: '#F86D04', width: '100px', height: '30px'}}>
                            Continuar
                        </button>
                    </a>
                </div>
            </div>
        )
    }
}

export default CostumerForm;