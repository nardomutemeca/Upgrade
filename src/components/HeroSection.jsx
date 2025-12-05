import React from "react";
import img1 from '../../img/imgNardo.webp';
import '../styles/Button.css';
import Animation from "../Animation";
import img2 from '../../img/html5.svg';
import img3 from '../../img/css3.svg';
import img4 from '../../img/javascript.svg';
import img5 from '../../img/react.svg';





const HeroSection = () => {

    return (
        <>
            <Animation />
            <div className="container">
                <div className="section-hero-data">
                    <p className="text-sm
                    text-blue-400"><span className="text-3xl">Olá,</span> Sou</p>
                    <h2 className="text-3xl">Bernardo Manuel</h2>
                    <p className="text-blue-400 text-lg">Sou Desenvolvedor Front-End</p>
                    <button className="bg-blue-500">
                        <a href="/contact">Entrar em contacto</a></button>
                </div>

                <div className="img">
                    <img src={img1} alt="NardoImg" />
                </div>
            </div>

            <div className="">
                <div className="servic-Text
                text-center mt-9 text-1xl uppercase font-bold">
                    <h2>Meus serviços</h2>
                </div>
                <div className="card-container
                flex p-12">
                    <div className="Card">
                        <h2 className="Title">Desenvolvimento Web</h2>
                        <div></div>
                        <p className="text-center">
                            Tuas ideias tornam-se projectos reais.
                            Bora expandir os seus serviços e outros projectos
                            com o desenvolvimento de páginas Web e tenha mais controle sobre tudo ao seu redor...
                        </p>
                    </div>


                    <div className="Card">
                        <h2 className="Title">Social Media</h2>
                        <p className="text-center">
                            Contruimos o teu futuro na palma das mãos,
                            desde o planejamento, criação de conteúdos,
                            gerenciamentos de perfis, relatórios,
                            camapnha de anúncios e muito mais...
                        </p>
                    </div>

                    <div className="Card">
                        <h2 className="Title">UI/UX</h2>

                        <p className="text-center">
                            Procuro dar a melhor experiência aos meus clientes,
                            com interfaces bonitas e responsivas, para um modo
                            de usabilidade mais fácil e interactivo com os
                            seus usuarios...
                        </p>
                    </div>
                </div>

                <div className="ContainerTech">
                    <div className="TitleTech">
                        <h2 className="font-bold">Tecnologias</h2>
                    </div>
                    <div className="TechContect">
                        <div class="container-barra">
                            <div class="barra-progresso1">
                                90%
                            </div>
                            <div class="porcentagem"></div>
                        </div>
                        <div className="imagesTech">
                            <img src={img2} alt="Icon" />
                        </div>
                    </div>

                    <div className="TechContect">
                        <div class="container-barra">
                            <div class="barra-progresso2">
                                90%
                            </div>
                            <div class="porcentagem"></div>
                        </div>
                        <div className="imagesTech">
                            <img src={img3} alt="Icon" />
                        </div>
                    </div>

                    <div className="TechContect">
                        <div class="container-barra">
                            <div class="barra-progresso3">
                                70%
                            </div>
                            <div class="porcentagem"></div>
                        </div>
                        <div className="imagesTech">
                            <img src={img4} alt="Icon" />
                        </div>
                    </div>

                    <div className="TechContect">
                        <div class="container-barra">
                            <div class="barra-progresso4">
                                50%
                            </div>
                            <div class="porcentagem"></div>
                        </div>
                        <div className="imagesTech">
                            <img src={img5} alt="Icon" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default HeroSection;