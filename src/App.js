import './assets/App.css';
import React, { Component } from 'react';

class App extends Component{

  constructor(props){
    super(props);
    this.state={
      textoFrase:'Clique para abrir o cookie',
    };

    this.quebraCookie = this.quebraCookie.bind(this);

    this.frases = [
      'Expectativa é igual paçoca, do nada esfarela tudo.', 
      'Não se desanime com a derrota de hoje, porque amanhã tem mais.', 
      'De longe parece derrotado, de perto parece que está longe.', 
      'O segredo do sucesso é fazer o contrário do você está fazendo.',
      'Relaxa, porque daqui para frente é só para trás.',
      'Arrisque, tente, lute, mostre para você mesmo o quanto é incapaz.',
      'Então sorria, você acordou mais um dia, sorria. Mesmo derrotada, você é abençoado.',
      'Tem gente, igual a você, que é igual nuvem. A gente olha e vê um animal.',
      'O mérito da derrota é todinho seu, orgulhe-se.',
      'É só uma fase ruim, logo vai piorar.',
      'Quando a vida te derrubar, aproveite a chance e tire uma soneca.',
      'Tudo passa, até as coisas ruins vão embora para coisas terríveis chegarem.',
      'Você não pode mudar o seu passado, porém pode estragar seu futuro.',
      'Nunca subestime sua incapacidade.',
      'Pode ser que o seu propósito na vida seja servir de aviso para os outros.',
      'Relaxe, a vida é uma fonte inesgotável de frustrações.',
    ];

  }

  quebraCookie(){
    let state = this.state;
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
    state.textoFrase = '"' + this.frases[numeroAleatorio] + '"';
    this.setState(state);
  }

  render(){
    return(
      <div className='container'>
        <BotaoCookie acao={this.quebraCookie}/>
        <h1 className='textoFrase'>{this.state.textoFrase}</h1>
      </div>
    )
  }
}

class BotaoCookie extends Component{
  render(){
    return(
      <div>
          <button onClick={this.props.acao} className='button'>
            <img src={require('./assets/cookie.png')} className='img' alt='cookie'></img>
          </button>
      </div>
    )
  }
}

export default App;
