import React from "react";
import Swal from 'sweetalert2';

const Contact = () => {

    

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "c46dfa26-f37d-43d1-807b-3d3a0f11e724");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error"); 
  };

    return(
        <div>
            <section className="contact">
                        <form onSubmit={onSubmit}>
                            <h3 className="text-2xl font-bold
                            text-center">Entrar em contacto</h3>
                            <div className="input-box">
                                <label>Nome Completo</label>
                                <input type="text" className="field" name="name"
                                    placeholder="Digite seu nome" required />
                            </div>

                            <div className="input-box">
                                <label>Email</label>
                                <input type="email" className="field" name="email"
                                    placeholder="Digite@seuemail.com" required />
                            </div>

                            <div className="input-box">
                                <label>Mensagem</label>
                            <textarea name="message"
                            className="field mess" placeholder="Digite sua mensagem"></textarea>
                            </div>
                            <button type="submit"
                            className="btnSub bg-blue-800">Enviar Mensagem</button>
                            <p>{}</p>
                        </form>
                    </section>
        </div>
    )
}
export default Contact;