import React, { Component } from 'react';
import { Textfield, Slider } from 'react-mdl';

const API_URL = '/talents';
const axios = require('axios');

class TalentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            contact: '',
            specialty: '',
            price: '',
            status: 'Disponível'
        };
    }

    handleSubmit = () => {
        axios({
            method: 'post',
            url: API_URL, 
            headers: {},
            data: {
                name: this.state.name,
                contact: this.state.contact,
                specialty: this.state.specialty,
                price: this.state.price, 
                status: this.state.status
            }
        })
        .then(function (response) {
                console.log("The response of the server: " + response.data);
        })
        /*fetch(API_URL, {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify({
                "name": this.state.name,
                "contact": this.state.contact,
                "specialty": this.state.specialty,
                "price": this.state.price,
          }),
        })
          .then(res => res.json())
          .then(res => console.log(res));*/
    }

    render() {
        return(
            <div style={{backgroundColor: '#FFF6E6', padding: '0', margin: '0', position: 'absolute', height: '130vh', width: '100vw'}}>
                <h1 align='center' style={{fontSize: '45px', marginBottom: '0', paddingTop: '10px'}}>Bem vindo ao WorkTogether</h1>
                <h2 align='center' style={{fontSize: '27px', marginTop: '0'}}>Explique sua ideia e te daremos o que você precisa</h2>
                <div align='center'>
                    <hr style={{borderColor: '#F86D04', width: '950px'}}/> 
                </div>
                <div align='center'>
                    <Textfield
                        onChange={(event) => {this.setState({name: event.target.value});}}
                        label="Nome"
                        floatingLabel
                        style={{width: '800px', marginTop: '20px'}}
                    /> 
                    <Textfield
                        onChange={(event) => {this.setState({contact: event.target.value});}}
                        label="E-mail"
                        floatingLabel
                        style={{width: '800px', marginTop: '20px'}}
                    /> 
                    <Textfield
                        onChange={(event) => {this.setState({specialty: event.target.value});}}
                        label="Caracteristicas e principais habilidades"
                        rows={3}
                        floatingLabel
                        style={{width: '800px', marginTop: '20px'}}
                    />
                </div>
                <div style={{marginLeft: '250px', width: '850px', marginTop: '75px', marginBottom: '25px'}}>
                    <div style={{marginLeft: '30px', marginBottom: '50px', fontSize: '16px'}}>Quanto você cobrará por hora??</div>
                    <Slider min={0} max={100} defaultValue={50} onChange={(event) => {this.setState({price: event.target.value + ",00"});}}/>
                    <div style={{marginTop: '25px'}}>
                        <span style={{fontSize: '18px', color: '#F86D04'}}>R$ 00,00</span>
                        <span style={{fontSize: '18px', color: '#F86D04', marginLeft: '300px'}}>R$ 50,00</span>
                        <span style={{fontSize: '18px', color: '#F86D04', marginLeft: '300px'}}>R$ +100,00</span>
                    </div>             
                </div>
                <div>
                    <a href="/" style={{float: 'left', margin: '0', padding: '0'}}>
                        <button style={{marginLeft: '150px', marginTop: '50px', cursor: 'pointer', color: 'white', borderRadius: '10px', border: 'transparent', backgroundColor: '#F86D04', width: '100px', height: '30px'}}>
                            Voltar
                        </button>
                    </a>
                    <button onClick ={this.handleSubmit} style={{float: 'right', marginRight: '150px', marginTop: '50px', cursor: 'pointer', color: 'white', borderRadius: '10px', border: 'transparent', backgroundColor: '#F86D04', width: '100px', height: '30px'}}>
                        <a href="/TalentSuccess" onClick ={this.handleSubmit} style={{textDecoration: 'none', color: 'white', align: 'center', margin: '0', padding: '0'}}>
                            Continuar
                        </a>
                    </button>
                </div>
            </div>
        )
    }
}

export default TalentForm;