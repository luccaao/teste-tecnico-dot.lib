import React, { useEffect, useState } from 'react'
import "./Conteudo.css"
import Assunto from '../Assunto/Assunto';


export default function Conteudo() {
  const [dados, setDados] = useState([]);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/books');
        if (!response.ok) {
          throw new Error(`Erro na solicitação: ${response.status}`);
        }
        const data = await response.json();
        setDados(data);
        console.log(data);
      } catch (error) {
        console.error('Erro ao buscar dados da API:', error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <section className='container-conteudo'>
        <div className='conteudo'>
          <aside >
            <h2>
              ASSUNTOS
            </h2>
            
              <Assunto />
              
          </aside>

          <div className='conteudo-livros'>
              <p>
                Mostrando 1 até 25 de 2399 resultados.
              </p>

            <div className='card'>
              {dados.map((livro) => (
              <div key={livro.id} className='livro-item'>
                <img className='imagem-livro' src={livro.image} alt={livro.title} />
                <h2 className='titulo-livro'>{livro.title}</h2>
                <p>{livro.editor}</p>
                <p>{livro.year}</p>
                <button className='botao-conteudo'>Ler</button>
                
            </div>
                        ))}
            
            </div>
              
          </div>
        </div>

    </section>
  )
}

              