import React, { useState } from 'react';
import { Layout, Header, Navigation } from 'react-mdl';
import TextField  from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

import Logo from '../Images/logo-worktogether.png';
import auth from  './Authentication';

const CssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: 'black',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'black',
      },
      '& .MuiOutlinedInput-root': {
        '&.Mui-focused fieldset': {
          borderColor: 'black',
        },
      },
    },
  })(TextField);


export const Login = props => {
        
        const [userName, setUserName] = useState('');
        const [password, setPassword] = useState('');

        function handleUserChange(e) {
            setUserName(e.target.value);
        }

        function handlePasswordChange(e) {
            setPassword(e.target.value);
        }

        return(
            <div style={{height: '654px',  backgroundColor: '#FC8C36', opacity: '0.7'}}>
                <div style={{height: '100px', position: 'relative'}}>
                    <Layout fixedHeader>
                        <Header title={<img src={Logo} alt='logo' width='70' style={{marginTop: '10px'}} />} style={{backgroundColor: '#FFF'}}>
                            <Navigation>
                                <a href="/" style={{fontSize: '20px', position: 'relative', marginRight: '30px', color: 'black'}}>Voltar</a>
                            </Navigation>
                        </Header>
                    </Layout>
                </div>
                <div>
                    <div style={{height: '440px', width: '562px', backgroundColor: '#FFF', opacity: '1.0', marginLeft: '400px', marginTop: '45px'}}>
                        <h1 align='center' style={{fontWeight: 'bold', opacity: '1.0', color: 'black'}}>Login</h1>
                        <CssTextField
                            style={{align: 'center', marginLeft: '185px', marginTop: '30px'}}
                            label="Email"
                            variant="outlined"
                            id="custom-css-outlined-input"
                            onChange={handleUserChange}
                        />
                        <CssTextField
                            style={{marginLeft: '185px', marginTop: '30px'}}
                            label="Senha"
                            variant="outlined"
                            id="custom-css-outlined-input"
                            onChange={handlePasswordChange}
                        />
                        <a>
                            <button onClick={() => {
                                // auth.login(userName, password, () => {
                                auth.login('gui.zorzon@usp.br', 'labsoft1', () => {
                                    props.history.push("/IntegradorPage");
                                });
                            }} style={{marginLeft: '235px', marginTop: '40px', cursor: 'pointer', color: 'white', borderRadius: '10px', border: 'transparent', backgroundColor: '#F86D04', width: '100px', height: '30px', opacity: '1.0'}}>
                                Entrar
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        )
}

export default Login;