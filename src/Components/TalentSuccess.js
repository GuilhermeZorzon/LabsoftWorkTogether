import React, { Component } from 'react';

class ClientSuccess extends Component {
    render() {
        return(
            <div style={{backgroundColor: '#FFF6E6', padding: '0', margin: '0',  width: '100%', height: '100%', position: 'fixed'}}>
                <h1 align='center' style={{fontSize: '45px', marginBottom: '0'}}>Seus dados foram registrados com sucesso</h1>
                <h2 align='center' style={{fontSize: '27px', marginTop: '0', marginLeft: '15px', marginRight: '15px'}}>Parabéns, você agora é um especialista. Agora é só esperar e em pouco tempo um projeto surgirá e um integrador entrará em contato buscando seus serviços (e o melhor de tudo: sem burocracias) :)</h2>
                <a href="/" style={{float: 'right', margin: '0', padding: '0'}}>
                    <button style={{marginRight: '150px', marginTop: '50px', cursor: 'pointer', color: 'white', borderRadius: '10px', border: 'transparent', backgroundColor: '#F86D04', width: '100px', height: '30px'}}>
                        Home
                    </button>
                </a>         
            </div>
        )
    }
}

export default ClientSuccess;