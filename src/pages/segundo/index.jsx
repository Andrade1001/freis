import { useState } from 'react';
import './index.scss'

import { Link } from 'react-router-dom'

export default function Segundo() {

    const[num1, setNum1] = useState(0)
    const[res, setres] = useState(0)

    function Converter(){
        let gramas = Number(num1)
        let conversao = gramas / 1000
        setres(conversao)
    }

    return (

        <div className='exercicio2'>
            

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

                    <h1>Exercício 02 - Converter Kg/gramas</h1>
                </div>

                <div className='verde'>


                </div>

                <div className='container'>

                    <p>Implementar um programa em Javascript para <b>converter kilos em gramas.</b></p>


                </div>

                
                <div className='caixa'>

                    <label htmlFor="order"><b>Valor em grama</b></label>
                    <input type="text"  value={num1} onChange={e => setNum1(e.target.value)}/>

                    <div className='botao'>
                     
                     <button onClick={Converter}>Executar</button>

                    </div>

                </div>

                <p className='p'><b>Resultado: O total é {res}</b></p>

                 





            </main>






        </div>

    );
}
