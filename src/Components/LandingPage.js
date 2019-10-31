import React, { Component } from 'react';
import { Layout, Header, Navigation } from 'react-mdl';
import { Footer } from 'react-mdl'

import LandingPageImage from '../Images/landingPage.png';
import Logo from '../Images/logo-worktogether.png';
import InstagramLogo from '../Images/instagram-logo.png';
import FacebookLogo from '../Images/facebook-logo.png';
import TwitterLogo from '../Images/twitter-logo.png';
import Man from '../Images/landingpage-man.png';
import Girl from '../Images/landingpage-girl.png';


class LandingPage extends Component {
    render() {
        return(
            <div>
                <div id='home' style={{height:'500px', position: 'relative'}}>
                    <Layout style={{background: `url(${LandingPageImage}) center / cover`, opacity: '0.8', backgroundColor: '#C67E49'}}>
                        <Header transparent>
                            <img src={Logo} alt='logo' width='130' style={{marginTop: '80px'}} />
                            <Navigation style={{marginLeft: '450px'}}>
                                <a href="#home" style={{fontSize: '20px', position: 'absolute'}}>Home</a>
                                <a href="#about" style={{marginLeft: '150px', fontSize: '20px', position: 'absolute'}}>Sobre</a>
                                <a href="#contact" style={{marginLeft: '300px', fontSize: '20px', position: 'absolute'}}>Contato</a>
                                <a href="/Login" style={{marginLeft: '525px', fontSize: '20px', position: 'absolute'}}>Entrar</a>
                            </Navigation>
                        </Header>
                        <h1 style={{color: 'white', fontWeight:'bold', marginLeft: '260px', marginTop: '200px', fontSize: '100px', position: 'absolute'}}>Let's</h1>
                        <h1 style={{color: 'white', fontWeight:'bold', marginLeft: '260px', marginTop: '320px', fontSize: '100px', position: 'absolute'}}>Work Together</h1>
                    </Layout>
                </div>
                <div id='contratar' style={{backgroundColor:'#FFFAF2', opacity: '0.8'}}>
                    <h1 color='black' style={{margin: '0px', marginLeft: '150px', paddingTop: '45px',  fontSize: '30px', fontWeight: 'bold'}}>
                        Quer contratar ?
                    </h1>
                    <div style={{marginLeft: '150px', marginTop: '75px', fontSize: '20px', width: '350px'}}>
                        Nós fale que tipo de projeto você busca desenvolver e nós te juntamos com um gerente que irá escolher os melhores profissionais para realzar a sua tarefa.
                    </div>
                    <img src={Man} alt="man" width='380' position='absolute' style={{float: 'right', marginTop: '-240px'}}/>
                    <div style={{marginLeft: '150px', marginTop: '25px', fontSize: '20px', width: '350px'}}>
                        Realize seus sonhos sem ter que se preocupar em chefiar os seus funcionários.                    
                    </div>
                    <a href="/CostumerForm">
                        <button style={{cursor: 'pointer', color: 'white', borderRadius: '10px', border: 'transparent', marginLeft: '175px', backgroundColor: '#00507C', marginTop: '50px', width: '200px', marginBottom: '200px', height: '30px'}}>
                            Quero criar meu projeto
                        </button>
                     </a>
                </div>
                <div id='about' style={{backgroundColor:'#F86D04', opacity: '0.8'}}>
                    <h1 color='black' style={{margin: '0px', marginLeft: '150px', paddingTop: '45px',  fontSize: '30px', fontWeight: 'bold'}}>Sobre</h1>
                    <div style={{marginLeft: '150px', marginTop: '35px', fontSize: '20px'}}>
                        Somos uma empresa focada em unir profissionais talentosos de todo o Brasil com pessoas em busca de resolver seus problemas. 
                    </div>
                    <div style={{marginLeft: '150px', marginTop: '35px', fontSize: '20px'}}>
                        Quer abrir uma startup desruptiva e procura a plataforma correta pra se inserir no mercado?
                    </div>
                    <div style={{marginLeft: '150px', marginTop: '35px', fontSize: '20px'}}>
                        Quer criar seu portifolio online, mas não tem as habilidades necessárias para criar um site?
                    </div>
                    <div style={{marginLeft: '150px', marginTop: '35px', fontSize: '20px'}}>
                        Quer trabalhar de forma independe apenas nos projetos que te interessam?
                    </div>
                    <div style={{marginLeft: '150px', marginTop: '55px', paddingBottom: '120px', fontSize: '20px', fontWeight: 'bold'}}>
                        Nós temos a solução para seus problemas. 
                    </div>
                </div>
                <div id='talentos' style={{backgroundColor:'#FFFAF2', opacity: '0.8', height: '700px'}}>
                    <h1 color='black' align='right' style={{margin: '0px', marginRight: '250px', paddingTop: '45px',  fontSize: '30px', fontWeight: 'bold'}}>
                        Quer ser contratado?
                    </h1>
                    <div style={{marginRight: '165px', marginTop: '35px', fontSize: '20px', width: '350px', float: 'right', fontWeight: 'bold'}}>
                        Sou um especialista 
                        <div position='relative' style={{marginTop: '35px', fontSize: '20px', width: '350px', fontWeight: 'normal'}}>
                            Se junte ao nosso grupo de profissionais à procura de um serviço especializado e que atende a seus desejos pessoais.
                        </div>
                    </div>
                    <div style={{paddingBottom: '355px', marginRight: '290px'}}>
                        <img src={Girl} alt="man" width='650' position='absolute' style={{transform: 'rotateY(180deg)', float: 'left', marginTop: '37.5px', marginLeft: '50px'}}/>
                    </div>
                    <div style={{paddingBottom: '150px', marginRight: '290px'}}>
                        <a href="/TalentForm">
                            <button style={{float: 'right', cursor: 'pointer', color: 'white', borderRadius: '10px', border: 'transparent', backgroundColor: '#00507C', marginTop: '-150px', width: '200px', marginBottom: '70px', height: '30px'}}>
                                Quero ser um talento
                            </button>
                        </a>
                    </div>
                    <div style={{marginRight: '165px', fontSize: '20px', width: '350px', float: 'right', fontWeight: 'bold', marginTop: '-200px'}}>
                            Sou um gerente 
                            <div position='relative' style={{marginTop: '35px', fontSize: '20px', width: '350px', fontWeight: 'normal'}}>
                                Coordene projetos remotamente e escolha os melhores em suas áreas numa plataforma que lhe torna independente.
                            </div>
                    </div>
                    <div style={{float: 'right', marginRight: '285px', marginTop: '-32.5px'}}>
                        <a href="/Login">
                            <button style={{cursor: 'pointer', color: 'white', borderRadius: '10px', border: 'transparent', backgroundColor: '#00507C', marginBottom: '100px', width: '200px', height: '30px'}}>
                                Quero ser um integrador
                            </button>
                        </a>
                    </div>
                </div>
                <Footer id='contact' size='mega' style={{backgroundColor:'black', height: '400px'}}>
                    <div>
                        <h1 style={{color:'white', textAlign: 'center'}}>Entre em contato</h1>
                        <div position='absolute' style={{marginLeft: '212.5px'}}>
                            <a href='/'>
                                <img src={InstagramLogo} alt='Instagram logo' width='80' position='absolute' style={{marginLeft: '150px', marginTop: '50px'}}/>
                            </a>
                            <a href='/'>
                            <img src={FacebookLogo} alt='Facebook logo' width='80' position='absolute' style={{marginLeft: '150px', marginTop: '50px'}}/>
                            </a>
                            <a href='/'>
                                <img src={TwitterLogo} alt='Twitter logo' width='80' position='absolute' style={{marginLeft: '150px', marginTop: '50px'}}/>
                            </a>
                        </div>
                    </div>
                </Footer> 
            </div>
        )
    }
}

export default LandingPage;