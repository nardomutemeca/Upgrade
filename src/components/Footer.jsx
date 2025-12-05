import React from "react";
import facebook from '../../img/face.png';
import insta from '../../img/inst.png';
import linkedin from '../../img/link.png';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="sb_footer section_padding">
                <div className="sb_footer-links">
                    <div className="sb_footer-links-div">
                        <h2 className="font-bold uppercase mb-1 text-blue-400">Serviços</h2>
                        <a href="/">
                            <p className="hover:text-blue-400 text-gray-500">Criação de Websites</p>
                        </a>

                        <a className="colorFooter" href="/">
                            <p className="hover:text-blue-400 text-gray-500">Social Media</p>
                        </a>

                        <a className="colorFooter" href="/">
                            <p className="hover:text-blue-400 text-gray-500">UI/UX</p>
                        </a>
                    </div>

                    <div className="sb_footer-links-div">
                        <h2 className="font-bold uppercase mb-1 text-blue-400">Links</h2>
                        <a href="/">
                            <p className="hover:text-blue-400 text-gray-500">Contactos</p>
                        </a>

                        <a className="colorFooter" href="/">
                            <p className="hover:text-blue-400 text-gray-500">Termos de uso</p>
                        </a>

                        <a className="colorFooter" href="/">
                            <p className="hover:text-blue-400 text-gray-500">Privacidades</p>
                        </a>
                    </div>

                    <div className="sb_footer-links-div">
                        <h2 className="font-bold mb-1 uppercase text-blue-400">Redes Sociais</h2>
                        <div className="social_Media flex cursor-pointer">
                            <p><img width='30px' src={facebook} alt="Facebook-Logo" /></p>
                            <p><img width='30px' src={insta} alt="Instagram-Logo" /></p>
                            <p><img width='40px' src={linkedin} alt="Linkedin-Logo" /></p>
                        </div>
                    </div>
                </div>
            </div>

            <hr/>

            <div className="sb_footer-below">
                <div className="sb_footer-copyright">
                    <p>
                        © {new Date().getFullYear()}, BerNardo - Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Footer;