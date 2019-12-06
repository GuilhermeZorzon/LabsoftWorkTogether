import React, { Component } from 'react';
import { Layout, Header, Navigation } from 'react-mdl';

import Logo from '../Images/WTG_profile.png';

import TalentTable from './TalentTable.js';
import CostumerCard from './CostumerCard';

class IntegradorPage extends Component {
    render() {
        return(
            <div style={{height: '654px', backgroundColor: '#FC8C36'}}>
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
                    <TalentTable/>
                </div>
                <div style={{width: '25%', float: 'left', display: 'inline-block', marginLeft: '30px', marginTop: '-28px', marginBottom: '35px'}}>
                    <CostumerCard/>
                </div>
                <div style={{width: '25%', float: 'left', display: 'inline-block', marginLeft: '30px', marginTop: '-28px', marginBottom: '35px'}}>
                    <CostumerCard/>
                </div>
            </div>
        )
    }
}

export default IntegradorPage;