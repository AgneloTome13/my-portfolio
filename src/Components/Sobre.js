import style from './Sobre.module.css';
function Sobre(){
    return(
        <div className={style.sobre}>
            <h2>Sobre mim</h2>
            <p className={style.pr1}>Saiba mais sobre mim</p>
            <hr/>

            <p>Sou Agnelo Francisco Tomé, um engenheiro de informática apaixonado por tecnologia e especialmente interessado no desenvolvimento web. Estou sempre procurando maneiras de aplicar minhas habilidades através de projetos pessoais e freelancer.</p>

            <p>Sempre busco por novos desafios para ampliar minhas habilidades e conhecimentos na área de desenvolvimento web. Acredito que posso ser uma excelente adição, pois, me sinto ansioso por aplicar meus conhecimentos e habilidades para contribuir para o sucesso de uma equipe e continuar a crescer profissionalmente.</p>
        </div>
    )
}

export default Sobre;