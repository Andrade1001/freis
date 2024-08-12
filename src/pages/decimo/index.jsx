import './index.scss'
import { useState } from 'react';

import { Link } from 'react-router-dom'

export default function Decimo() {

    
    return (

        <div className='exercicio10'>


            <header>

                <img src='/assets/images/logo.png' />
                <h2>React FreiS</h2>


                <nav>

                    <Link className='inicio' to='/'>Inicio</Link>
                    <Link className='sobre' to='/sobre'>Sobre</Link>

                </nav>

            </header>

            <main>


                <div className='titulo'>
                    <Link className='voltar' to= '/'>
                        <img src= '/assets/images/voltar.png' />
                    </Link>

                    <h1>Exercício 10 - IMC</h1>
                </div>

                <div className='cinza'>


                </div>

                <div className='container'>

                    <p>Implemente um programa em Java que a partir da altura e do peso de uma pessoa, <b>calcule o IMC </b>e avalie a faixa correspondente a tabela. Ao final, apresente o IMC e a situação. </p>


                </div>


                <div className='caixa'>

                    <label htmlFor="order"><b>Informe a altura:</b></label>
                    <input type="text"  placeholder='0'/>

                    <label htmlFor="order"><b>Informe o peso:</b></label>
                    <input type="text"  placeholder='0'/>


                    <div className='botao'>
                        <button>Executar</button>
                    </div>

                </div>

                <p className='p'><b> Seu IMC é: <br />
                 <br />Sua classificação é:  </b></p>






            </main>






        </div>

    );
}

