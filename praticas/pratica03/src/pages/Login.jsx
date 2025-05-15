import Conteudo from "../components/Conteudo.jsx"
import Icone from "../components/Icone.jsx"
import Titulo from "../components/Titulo.jsx"
import InputEmail from "../components/InputEmail.jsx"
import InputSenha from "../components/InputSenha.jsx"
import Botao from "../components/Botao.jsx"
import Link from "../components/Link.jsx"
import Rodape from "../components/Rodape.jsx"
import './Login.css'

function Login() {
    return(
        <>
            <Conteudo estilo="login-container">
                <Icone imagem="https://www.svgrepo.com/show/411955/learn.svg" texto="Logo da aplicação"/>
                <Titulo texto="Aluno Online"/>
                <form>
                    <InputEmail/>
                    <InputSenha/>
                    <Botao texto="Entrar"/>
                    <Link texto="Esqueceu a senha?"/>
                </form>
            </Conteudo>
            <Rodape texto="Copyright (C) 2025"/>
        </>
    );
}

export default Login;