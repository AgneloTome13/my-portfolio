import style from './Projetos.module.css';
import p1 from '../img/p1.png';
import p2 from '../img/p2.png';
import p3 from '../img/p3.png';
import { FaLink } from 'react-icons/fa';

function Projetos(){
    return(
        <div className={style.projetos}>
            <h2>Projetos</h2>
            <p className={style.pr1}>Confira alguns dos meus trabalhos recente</p>
            <hr/>
            <div className={style.cards}>
                <div className={style.card}>
                    <img src={p1} alt='Boa Imagem'/>
                    <div>
                        <p>Landing page fictícia para um estúdio fotográfico que utiliza HTML, CSS e JavaScript para desenvolver um layout atrativo sem o uso de frameworks.</p>
                        <a href='https://boa-imagem.vercel.app/'><FaLink/> Vizualizar</a>
                    </div>
                </div>

                <div className={style.card}>
                    <img src={p2} alt='Boa Imagem'/>
                    <div>
                        <p>Restaurante Etiópe conhecido como Mesob Habesha. HTML, CSS, JavaScript, PHP e Mysql são as tecnologias usadas no desenvolvimento do site.</p>
                        <a href='https://www.restaurantmesobhabesha.com/'><FaLink/> Vizualizar</a>
                    </div>
                </div>

                <div className={style.card}>
                    <img src={p3} alt='Boa Imagem'/>
                    <div>
                        <p>TST - Soluções tecnológicas, página institucional de serviços tecnológicos desenvolvido utilizando o framework Laravel, banco de dados MySQL.</p>
                        <a href='https://tst.ao/'><FaLink/> Vizualizar</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projetos;