import Sobre from "./Sobre";
import Tecnologias from "./Tecnologias";
import Projetos from "./Projetos";

function BarraConteudo(){
    return(
        
        <>
            <Sobre/>
            <Tecnologias/>
            <Projetos/>

            <footer>
                <p className="copy" style={{textAlign:"center"}}>&copy; Agnelo Tomé</p>
            </footer>
        </>
    );
}

export default BarraConteudo;