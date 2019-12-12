import React, { useState, useEffect } from 'react';
import { Layout, Header, Navigation } from 'react-mdl';

import Logo from '../Images/WTG_profile.png';
import WTG_Logo from '../Images/logo-worktogether.png';

import { TalentTable } from './TalentTable.js';
import CostumerCard from './CostumerCard';

const TALENTS_API_URL = '/talents'
const CLIENTS_API_URL = '/clients'

export default function IntegradorPage() {
    const [rows, setRows] = useState([]);
    const [hasLoadedTalent, setHasLoadedTalent] = useState(false);
    const [hasLoadedClient, setHasLoadedClient] = useState(false);

    useEffect(() => {
        const fetchTalent = async () => {
          const response = await fetch(
            TALENTS_API_URL
          );
          const jsonRows = await response.json();
          setRows(jsonRows);
          setHasLoadedTalent(true)
        };
        const fetchClient = async () => {
          const response = await fetch(
            CLIENTS_API_URL
          );
          const jsonRows = await response.json();
          setHasLoadedClient(true)
        };
        fetchTalent();
        fetchClient();
      }, []);
   
    if (hasLoadedTalent && hasLoadedClient) {
        return(
            <div style={{position: 'absolute', height: '100vh', width: '100vw', backgroundColor: '#FC8C36'}}>
                <div style={{height: '100px', position: 'relative'}}>
                    <Layout fixedHeader>
                        <Header title={<img src={Logo} alt='logo' width='60' style={{marginLeft: '-35px'}}/>} style={{backgroundColor: '#FFF'}}>
                            <Navigation>
                                <a href="/" style={{fontSize: '20px', position: 'relative', marginRight: '30px', color: 'black'}}>Voltar</a>
                            </Navigation>
                        </Header>
                    </Layout>
                </div>
                <div style={{width: '49%', float: 'right', display: 'inline-block', marginRight: '10px', marginTop: '-28px'}}>
                    <TalentTable rows = {rows}/>
                </div>
                <div style={{width: '25%', float: 'left', display: 'inline-block', marginLeft: '30px', marginTop: '-28px', marginBottom: '35px'}}>
                    <CostumerCard name={'Maria'} project={'App'} contact={'maria@usp'} price={'15.000'} status={'Em andamento'}/>
                </div>
                <div style={{width: '25%', float: 'left', display: 'inline-block', marginLeft: '30px', marginTop: '-28px', marginBottom: '35px'}}>
                    <CostumerCard/>
                </div>
            </div>
        )
    } else {
        return (
        <div align='center' style={{position: 'absolute', backgroundColor: '#FFF6E6', height: '100vh', width: '100vw'}}>
            <img src={WTG_Logo} alt='logo' width='180' style={{marginTop: '25vh'}}/>
            <h1>Carregando dados</h1>
        </div>
        )
    }
}

//export default IntegradorPage;