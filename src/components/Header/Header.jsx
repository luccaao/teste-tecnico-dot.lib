import React, { useEffect, useState } from 'react'
import logo from "../../images/logo_dotlib.png"
import "./Header.css"
import pesquisa from "../../images/icons8-lupa-50.png"

export default function Header() {
  const [menu, setMenu] = useState([])

 
  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch('http://localhost:3000/menu');
        if (!response.ok) {
          throw new Error(`Erro na solicitação: ${response.status}`);
        }
        const data = await response.json();
        setMenu(data);
        console.log(data);
      } catch (error) {
        console.error('Erro ao buscar dados da API:', error.message);
      }
    };

    fetchMenu();
  }, []);

  return (
    <header className='container' >
        <nav className='navbar'>
            <img src={logo}/>
            <ul className='lista'>
            {menu.map((men) => (
              <li key={men.id}>{men.title}</li>
            ))}
            </ul>
            <div className='search-control'>
                <input className='inputPesquisa'/>
                <button className='botao'><img className='pesquisa' src={pesquisa}/></button>
            </div>
        </nav>

            
       
    </header>
  )
}
