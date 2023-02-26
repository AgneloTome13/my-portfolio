import style from './Tecnologias.module.css';
import {FaPhp, FaLaravel, FaJs, FaHtml5, FaCss3} from 'react-icons/fa';
import {DiMysql, DiBootstrap, DiReact} from 'react-icons/di';

function Tecnologias(){
    return(
        <div className={style.tecnologias}>
            <h2>Tecnologias que uso</h2>
            <p className={style.pr1}>Segue abaixo algumas das tecnologias que uso para desenvolvimento</p>
            <hr/>
            <div className={style.cards}>
                <div>
                    <span className={style.html}><FaHtml5/></span>
                    <h4>HTML</h4>
                    <p>Conhecimento das tags e atributos necessários para estruturar e semantizar o conteúdo</p>
                </div>

                <div>
                    <span className={style.css}><FaCss3/></span>
                    <h4>CSS</h4>
                    <p>Habilidades de estilização em CSS para criar layouts visualmente atraentes e responsivos</p>
                </div>

                <div>
                    <span className={style.bootstrap}><DiBootstrap/></span>
                    <h4>Bootstrap</h4>
                    <p>Uso da estrutura do Bootstrap para criar layouts e componentes responsivos rapidamente</p>
                </div>

                <div>
                    <span className={style.js}><FaJs/></span>
                    <h4>JavaScript</h4>
                    <p>Escrever código JavaScript para manipular elementos HTML e criar interatividade na página web</p>
                </div>

                <div>
                    <span className={style.php}><FaPhp/></span>
                    <h4>PHP</h4>
                    <p>Habilidade em escrever código PHP para criar páginas web dinâmicas e interativas</p>
                </div>

                <div>
                    <span className={style.laravel}><FaLaravel/></span>
                    <h4>Laravel</h4>
                    <p>Habilidade em usar o framework Laravel para desenvolver aplicativos web robustos e escaláveis</p>
                </div>

                <div>
                    <span className={style.mysql}><DiMysql/></span>
                    <h4>MySQL</h4>
                    <p>Conhecimento da linguagem SQL para criar, atualizar e excluir registros em um banco de dados MySQL</p>
                </div>

                <div>
                    <span className={style.react}><DiReact/></span>
                    <h4>React</h4>
                    <p>Habilidade em usar o framework React para criar interfaces de usuário interativas e responsivas</p>
                </div>
            </div>
        </div>
    )
}

export default Tecnologias;  