import React from 'react'
import logo from "../../images/logo_footer.png"
import "./Rodape.css"

export default function Rodape() {
  return (
    <footer className='rodape-container'>
        <div className='conteudo-rodape'>
            <p>2016 DotLib | Todos os direitos reservados | Todos los derechos reservados | All rights reserved</p>
            <img src={logo}/>
        </div>
    </footer>
  )
}
