import './index.scss'
import { useState } from 'react';

import { Link } from 'react-router-dom'

export default function Primeiro() {

    const[num1, setNum1] = useState(0)
    const[cupom, setCupom] = useState(100)
    const[res, setres] = useState(0)
    
    function Compra(){
        let valor = Number(num1)
        setres(valor)

        if(cupom == 'ANDRADE100'){
            let valor = Number(num1) - 100
            setres(valor)
        }

    }
   
    return (

        <div className='exercicio1'>


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

                    <h1>Exercício 01 - Cupom de desconto</h1>
                </div>

                <div className='amarelo'>


                </div>

                <div className='container'>

                    <p>Implementar um programa em <b>Javascript</b> para calcular o valor final de uma compra a partir do valor da compra e do cupom de desconto. <b>O cupom diz quantos reais</b> terá de desconto.</p>


                </div>


                <div className='caixa'>

                    <label htmlFor="order"><b>Informe o valor do pedido</b></label>
                    <input type="text" value={num1} onChange={e => setNum1(e.target.value)}/>


                    <div className='um'>  
                        <label htmlFor="order"><b>Informe o valor do Cupom</b></label>
                        <input type="text" placeholder = '0' onChange={ e => setCupom(e.target.value)}/>
                    </div>

                    <div className='botao'>
                     
                     <button onClick={Compra}>Executar</button>

                    </div>

                </div>

                <p className='p' ><b>Resultado: O total é R$ {res}</b></p>






            </main>






        </div>

    );
}

