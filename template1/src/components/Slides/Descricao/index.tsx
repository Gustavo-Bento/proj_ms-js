import Img1 from '../../../assets/negocio/header.jpg'

function Descricao() {
    return (
        <div className="w3-container">
            <div className="w3-margin w3-animate-top">
                <h4 className="w3-wide"><b><i className="fa fa-comment-o" style={{ fontSize: 24 }}></i> O que seria?</b></h4>
                <p className="w3-justify">
                    As calhas são uma parte importante de qualquer estrutura de cobertura, pois são essenciais para gerenciar o escoamento de água e evitar danos à fundação e às paredes do edifício. </p>
            </div>
            <div className="w3-margin">
                <h4 className="w3-wide"><b><i className="fa fa-comment-o" style={{ fontSize: 24 }}></i> Quais tipos?</b></h4>
                <p className="w3-justify">
                    Calhas de metal, como alumínio e aço galvanizado, são as mais comumente usadas, pois são duráveis, resistentes às intempéries e acessíveis.</p>
            </div>
            <div className="w3-margin">
                <h4 className="w3-wide"><b><i className="fa fa-comment-o" style={{ fontSize: 24 }}></i> Como são instaladas?</b></h4>
                <p className="w3-justify">
                    Essas calhas podem ter uma variedade de formas e tamanhos e podem ser instaladas de diferentes maneiras, incluindo cabides tradicionais, cabides ocultos e suportes de fáscia. </p>
            </div>
            <div className=" w3-margin w3-light-grey row">
                <div className="col-sm-6">
                    <img src={Img1} alt="manutenção no telhado" style={{ width: '100%' }} className="w3-round" />
                </div>
                <div className="col-sm-6">
                    <h4 className="w3-wide"><b><i className="fa fa-diamond" style={{ fontSize: 24 }}></i> Segue a dica!</b></h4>
                    <p className="w3-justify" >
                        Para garantir um telhado duradouro e evitar possíveis danos, é importante garantir que as calhas sejam instaladas e mantidas corretamente limpas.</p>
                        <p className="w3-justify" >
                        <b>Prizamos sempre a qualidade em nossos serviços</b>, por isso nosso clientes sempre nos indicam para novos projetos.</p>
                </div>
            </div>  
        </div>
    )
}

export default Descricao