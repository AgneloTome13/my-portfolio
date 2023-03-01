import img_perfil from '../img/perfil.png';
import style from './BarraFixa.module.css';
import {FaFacebookF, FaWhatsapp, FaLinkedinIn, FaGithub} from 'react-icons/fa';
import {BiEnvelope, BiPhone} from 'react-icons/bi';
import cv from '../ficheiro/curriculo.pdf';

function BarraFixa(){
    return(
       <section className={style.container_barra}>
            <img src={img_perfil} alt='Imagem Agnelo Tomé'/>
            <h2>Agnelo Tomé</h2>
            
            <div className={style.social}>
                <a href='https://m.facebook.com/profile.php?id=100004972562239'><FaFacebookF/></a>
                <a href='https://www.linkedin.com/in/agnelo-tom%C3%A9-849046262/'><FaLinkedinIn/></a>
                <a href='https://api.whatsapp.com/send?phone=244929741837&text='><FaWhatsapp/></a>
                <a href='https://github.com/AgneloTome13'><FaGithub/></a>
            </div>

            <div className={style.contacto}>
                <div className={style.email}>
                    <h3>Email</h3>
                    <p><span><BiEnvelope/></span> agnelotome09@gmail.com</p>
                </div>

                <div className={style.telefone}>
                    <h3>Telefone</h3>
                    <p><span><BiPhone/></span> +244 929741837</p>
                    <p><span><BiPhone/></span> +244 953650266</p>
                </div>
            </div>

            <a href={cv} className={style.cv}>Conferir Currículo</a>

            <p className={style.copy}>&copy; Agnelo Tomé</p>
       </section>
    );
}

export default BarraFixa;