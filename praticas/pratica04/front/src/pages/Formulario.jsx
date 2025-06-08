import { useState, useEffect } from "react";
import InputNome from "../components/InputNome.jsx";
import InputTelefone from "../components/InputTelefone.jsx";

function Formulario(props) {
    const [nome, setNome] = useState("");
    const [erroNome, setErroNome] = useState("");
    const [telefone, setTelefone] = useState("");
    const [erroTelefone, setErroTelefone] = useState("");

    // Efeito para pré-preencher formulário quando recebe valores iniciais
    useEffect(() => {
        if (props.valores) {
            setNome(props.valores.nome || "");
            setTelefone(props.valores.telefone || "");
        }
    }, [props.valores]);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Resetar erros
        setErroNome("");
        setErroTelefone("");

        // Validação
        let valido = true;
        if (!nome.trim()) {
            setErroNome("Nome é obrigatório!");
            valido = false;
        }
        if (!telefone.trim()) {
            setErroTelefone("Telefone é obrigatório!");
            valido = false;
        }

        // Se válido, envia os dados
        if (valido) {
            props.onSubmit({ nome, telefone });
            // Só limpa os campos se não for edição
            if (!props.valores) {
                setNome("");
                setTelefone("");
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <InputNome 
                valor={nome} 
                onChange={(e) => setNome(e.target.value)} 
                erro={erroNome}
            />
            <InputTelefone 
                valor={telefone} 
                onChange={(e) => setTelefone(e.target.value)} 
                erro={erroTelefone}
            />
            <button type="submit">Salvar</button>
        </form>
    );
}

export default Formulario;